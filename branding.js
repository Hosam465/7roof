/*
 * Shared logo branding for host, player (index) and iPad pages.
 * Logos live in Firestore (config/logo1, config/logo2) so a change made on the
 * host shows up on every page and device. The last known logos are cached in
 * localStorage so pages paint the right logo immediately (no default-logo flash).
 *
 * Markup: <img data-brand="1"> is the main logo (defaults to sab.png),
 *         <img data-brand="2"> is the optional second logo (hidden when unset).
 */
(function () {
    var DEFAULT_LOGO = 'sab.png';
    var CACHE_KEY = 'brandingCache_v1';
    var state = { l1: null, l2: null, exists1: false, exists2: false };
    var loaded = { 1: false, 2: false };
    var known = { 1: false, 2: false };   // do we know the real value (from cache or database)?
    var forced = false;                   // safety net: show the default even if nothing is known
    var db = null;
    var readyCallbacks = [];
    var painted = false;

    function readCache() {
        try { return JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); } catch (e) { return null; }
    }

    function writeCache() {
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ l1: state.l1, l2: state.l2 })); } catch (e) {}
    }

    function paint() {
        painted = true;
        // the main logo stays hidden until we know which one to show, so the default never flashes
        var main = document.querySelectorAll('img[data-brand="1"]');
        for (var i = 0; i < main.length; i++) {
            if (!state.l1 && !known[1] && !forced) continue;
            var src = state.l1 || DEFAULT_LOGO;
            if (main[i].getAttribute('src') !== src) main[i].setAttribute('src', src);
            main[i].style.visibility = 'visible';
        }
        var second = document.querySelectorAll('img[data-brand="2"]');
        for (var j = 0; j < second.length; j++) {
            if (state.l2) {
                if (second[j].getAttribute('src') !== state.l2) second[j].setAttribute('src', state.l2);
                second[j].style.display = '';
            } else {
                second[j].removeAttribute('src');
                second[j].style.display = 'none';
            }
        }
        if (document.body) document.body.classList.toggle('has-logo2', !!state.l2);
    }

    function checkReady() {
        if (loaded[1] && loaded[2]) {
            var cbs = readyCallbacks; readyCallbacks = [];
            for (var i = 0; i < cbs.length; i++) cbs[i](state);
        }
    }

    function init(firestore) {
        db = firestore;
        var cache = readCache();
        if (cache) { state.l1 = cache.l1 || null; state.l2 = cache.l2 || null; known[1] = known[2] = true; paint(); }

        // never leave the logo hidden forever if the database is unreachable
        setTimeout(function () { forced = true; paint(); }, 3500);

        [1, 2].forEach(function (slot) {
            db.collection('config').doc('logo' + slot).onSnapshot(function (doc) {
                var data = doc.exists ? doc.data().data : null;
                state['l' + slot] = data || null;
                state['exists' + slot] = doc.exists;
                loaded[slot] = true; known[slot] = true;
                writeCache();
                paint();
                checkReady();
            }, function () {
                loaded[slot] = true;
                known[slot] = true;
                paint();
                checkReady();
            });
        });
    }

    // Host only: publish a logo (dataUrl) or reset it (null) for every page
    function save(slot, dataUrl) {
        if (!db) return Promise.reject(new Error('Branding not initialised'));
        return db.collection('config').doc('logo' + slot).set({
            data: dataUrl || null,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    // safety net: never leave the main logo hidden if something goes wrong
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () { forced = true; paint(); }, 4000);
    });

    function whenReady(cb) {
        if (loaded[1] && loaded[2]) cb(state); else readyCallbacks.push(cb);
    }

    window.Branding = { init: init, save: save, state: state, whenReady: whenReady, DEFAULT_LOGO: DEFAULT_LOGO };
})();

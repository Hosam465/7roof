const defaultGameDataENG = [
    // --- Letter A ---
    { letter: 'A', question: 'A South American country whose capital is Buenos Aires?', answer: 'Argentina', type: 'mcq', category: 'geo', options: ['Australia', 'Austria', 'Angola'] },
    { letter: 'A', question: 'The frozen continent where the South Pole is located?', answer: 'Antarctica', type: 'mcq', category: 'geo', options: ['Africa', 'Asia', 'America'] },
    { letter: 'A', question: 'English football club nicknamed "The Gunners"?', answer: 'Arsenal', type: 'mcq', category: 'sport', options: ['Aston Villa', 'Ajax', 'Almería'] },
    { letter: 'A', question: 'The smallest unit of a chemical element?', answer: 'Atom', type: 'mcq', category: 'science', options: ['Acid', 'Alloy', 'Anode'] },

    // --- Letter B ---
    { letter: 'B', question: 'The country that has won the FIFA World Cup a record 5 times?', answer: 'Brazil', type: 'mcq', category: 'sport', options: ['Belgium', 'Bulgaria', 'Bolivia'] },
    { letter: 'B', question: 'The capital city of Germany?', answer: 'Berlin', type: 'mcq', category: 'geo', options: ['Brussels', 'Budapest', 'Bratislava'] },
    { letter: 'B', question: 'The largest mammal in the world?', answer: 'Blue Whale', type: 'mcq', category: 'science', options: ['Bear', 'Buffalo', 'Baboon'] },

    // --- Letter C ---
    { letter: 'C', question: 'The capital city of Egypt?', answer: 'Cairo', type: 'mcq', category: 'geo', options: ['Casablanca', 'Carthage', 'Canberra'] },
    { letter: 'C', question: 'The chemical element essential for strong bones (Symbol Ca)?', answer: 'Calcium', type: 'mcq', category: 'science', options: ['Carbon', 'Copper', 'Chlorine'] },
    { letter: 'C', question: 'The fastest land animal in the world?', answer: 'Cheetah', type: 'mcq', category: 'science', options: ['Cat', 'Cougar', 'Camel'] },

    // --- Letter D ---
    { letter: 'D', question: 'The famous river that flows through Vienna and Budapest?', answer: 'Danube', type: 'mcq', category: 'geo', options: ['Dnieper', 'Dordogne', 'Douro'] },
    { letter: 'D', question: 'Prehistoric reptiles that became extinct millions of years ago?', answer: 'Dinosaurs', type: 'mcq', category: 'history', options: ['Dolphins', 'Donkeys', 'Dingoes'] },

    // --- Letter E ---
    { letter: 'E', question: 'The American inventor of the practical incandescent light bulb?', answer: 'Edison', type: 'mcq', category: 'science', options: ['Einstein', 'Euler', 'Erasmus'] },
    { letter: 'E', question: 'The tallest mountain in the world above sea level?', answer: 'Everest', type: 'mcq', category: 'geo', options: ['Etna', 'Elbrus', 'Erebus'] },

    // --- Letter F ---
    { letter: 'F', question: 'The country where you would find the Eiffel Tower?', answer: 'France', type: 'mcq', category: 'geo', options: ['Finland', 'Fiji', 'France'] },
    { letter: 'F', question: 'The force that pulls objects toward the center of the Earth?', answer: 'Fall (Gravity)', type: 'mcq', category: 'science', options: ['Friction', 'Fusion', 'Fission'] },

    // --- Letter G ---
    { letter: 'G', question: 'The scientific study of the Earth’s physical structure?', answer: 'Geology', type: 'mcq', category: 'science', options: ['Geography', 'Geometry', 'Genetics'] },
    { letter: 'G', question: 'The largest island in the world?', answer: 'Greenland', type: 'mcq', category: 'geo', options: ['Germany', 'Greece', 'Georgia'] },

    // --- Letter H ---
    { letter: 'H', question: 'The lightest and most abundant chemical element (Symbol H)?', answer: 'Hydrogen', type: 'mcq', category: 'science', options: ['Helium', 'Hafnium', 'Mercury'] },
    { letter: 'H', question: 'The capital city of Vietnam?', answer: 'Hanoi', type: 'mcq', category: 'geo', options: ['Havana', 'Helsinki', 'Hamburg'] },

    // --- Letter I ---
    { letter: 'I', question: 'The European country shaped like a boot?', answer: 'Italy', type: 'mcq', category: 'geo', options: ['Iceland', 'Ireland', 'India'] },
    { letter: 'I', question: 'The metal element used to make steel (Symbol Fe)?', answer: 'Iron', type: 'mcq', category: 'science', options: ['Iodine', 'Indium', 'Iridium'] },

    // --- Letter J ---
    { letter: 'J', question: 'The largest planet in our solar system?', answer: 'Jupiter', type: 'mcq', category: 'science', options: ['Jupiter', 'Saturn', 'Mars'] },
    { letter: 'J', question: 'The island country often called "The Land of the Rising Sun"?', answer: 'Japan', type: 'mcq', category: 'geo', options: ['Jordan', 'Jamaica', 'Java'] },

    // --- Letter K ---
    { letter: 'K', question: 'The Australian animal that carries its young in a pouch?', answer: 'Kangaroo', type: 'mcq', category: 'general', options: ['Koala', 'Kudu', 'Kingfisher'] },
    { letter: 'K', question: 'The capital city of Afghanistan?', answer: 'Kabul', type: 'mcq', category: 'geo', options: ['Karachi', 'Kiev', 'Khartoum'] },

    // --- Letter L ---
    { letter: 'L', question: 'The capital city of the United Kingdom?', answer: 'London', type: 'mcq', category: 'geo', options: ['Lisbon', 'Lima', 'Lyon'] },
    { letter: 'L', question: 'The "King of the Jungle"?', answer: 'Lion', type: 'mcq', category: 'general', options: ['Leopard', 'Lizard', 'Llama'] },

    // --- Letter M ---
    { letter: 'M', question: 'The planet known as the "Red Planet"?', answer: 'Mars', type: 'mcq', category: 'science', options: ['Mercury', 'Moon', 'Meteors'] },
    { letter: 'M', question: 'The capital city of Spain?', answer: 'Madrid', type: 'mcq', category: 'geo', options: ['Moscow', 'Manila', 'Munich'] },

    // --- Letter N ---
    { letter: 'N', question: 'The longest river in the world?', answer: 'Nile', type: 'mcq', category: 'geo', options: ['Niger', 'Neva', 'Nile'] },
    { letter: 'N', question: 'The capital city of Kenya?', answer: 'Nairobi', type: 'mcq', category: 'geo', options: ['Naples', 'Nassau', 'Niamey'] },

    // --- Letter O ---
    { letter: 'O', question: 'The gas that makes up about 21% of the Earth’s atmosphere?', answer: 'Oxygen', type: 'mcq', category: 'science', options: ['Ozone', 'Argon', 'Oxide'] },
    { letter: 'O', question: 'The capital city of Canada?', answer: 'Ottawa', type: 'mcq', category: 'geo', options: ['Oslo', 'Oman', 'Oran'] },

    // --- Letter P ---
    { letter: 'P', question: 'The capital city of France?', answer: 'Paris', type: 'mcq', category: 'geo', options: ['Prague', 'Porto', 'Perth'] },
    { letter: 'P', question: 'The largest ocean on Earth?', answer: 'Pacific', type: 'mcq', category: 'geo', options: ['Persian', 'Polar', 'Pond'] },

    // --- Letter Q ---
    { letter: 'Q', question: 'The country that hosted the 2022 FIFA World Cup?', answer: 'Qatar', type: 'mcq', category: 'sport', options: ['Quebec', 'Quito', 'Qatar'] },
    { letter: 'Q', question: 'A monarch who is a woman?', answer: 'Queen', type: 'mcq', category: 'general', options: ['Quail', 'Quasar', 'Quartz'] },

    // --- Letter R ---
    { letter: 'R', question: 'The capital city of Italy?', answer: 'Rome', type: 'mcq', category: 'geo', options: ['Riga', 'Riyadh', 'Rome'] },
    { letter: 'R', question: 'The largest country in the world by land area?', answer: 'Russia', type: 'mcq', category: 'geo', options: ['Romania', 'Rwanda', 'Russia'] },

    // --- Letter S ---
    { letter: 'S', question: 'The capital city of South Korea?', answer: 'Seoul', type: 'mcq', category: 'geo', options: ['Sydney', 'Stockholm', 'Seoul'] },
    { letter: 'S', question: 'The planet famous for its prominent ring system?', answer: 'Saturn', type: 'mcq', category: 'science', options: ['Sun', 'Sirius', 'Saturn'] },

    // --- Letter T ---
    { letter: 'T', question: 'The capital city of Japan?', answer: 'Tokyo', type: 'mcq', category: 'geo', options: ['Taipei', 'Tehran', 'Toronto'] },
    { letter: 'T', question: 'The largest cat species in the world?', answer: 'Tiger', type: 'mcq', category: 'science', options: ['Tarantula', 'Tapir', 'Tiger'] },

    // --- Letter U ---
    { letter: 'U', question: 'The North American country between Canada and Mexico?', answer: 'USA', type: 'mcq', category: 'geo', options: ['UK', 'Ukraine', 'Uruguay'] },
    { letter: 'U', question: 'The seventh planet from the Sun?', answer: 'Uranus', type: 'mcq', category: 'science', options: ['Uranus', 'Umbra', 'UV'] },

    // --- Letter V ---
    { letter: 'V', question: 'The hottest planet in our solar system?', answer: 'Venus', type: 'mcq', category: 'science', options: ['Venus', 'Vesta', 'Vulcan'] },
    { letter: 'V', question: 'The capital city of Austria?', answer: 'Vienna', type: 'mcq', category: 'geo', options: ['Venice', 'Vilnius', 'Vatican'] },

    // --- Letter W ---
    { letter: 'W', question: 'The capital city of the United States?', answer: 'Washington', type: 'mcq', category: 'geo', options: ['Warsaw', 'Wellington', 'Wichita'] },
    { letter: 'W', question: 'The famous battle in 1815 where Napoleon was defeated?', answer: 'Waterloo', type: 'mcq', category: 'history', options: ['War', 'Westphalia', 'Worms'] },

    // --- Letter X ---
    { letter: 'X', question: 'A high-energy radiation used to see bones?', answer: 'X-ray', type: 'mcq', category: 'science', options: ['Xenon', 'Xerox', 'Xylem'] },

    // --- Letter Y ---
    { letter: 'Y', question: 'The yellow part of an egg?', answer: 'Yolk', type: 'mcq', category: 'general', options: ['Yeast', 'Yarn', 'Yolk'] },

    // --- Letter Z ---
    { letter: 'Z', question: 'The striped African animal that looks like a horse?', answer: 'Zebra', type: 'mcq', category: 'general', options: ['Zebra', 'Zebu', 'Zatyr'] },
    { letter: 'Z', question: 'The capital city of Croatia?', answer: 'Zagreb', type: 'mcq', category: 'geo', options: ['Zurich', 'Zambia', 'Zanzibar'] },

    // ============================================================
    // Saudi National Day (national_day) & general Saudi Arabia (saudi)
    // ============================================================

    // --- Letter A ---
    { letter: 'A', question: 'What word describes the yearly commemoration of the Kingdom’s unification, celebrated every September 23rd?', answer: 'Anniversary', type: 'mcq', category: 'national_day', options: ['Announcement', 'Assembly', 'Achievement'] },
    { letter: 'A', question: 'The world’s largest and most valuable oil company, headquartered in Dhahran?', answer: 'Aramco', type: 'mcq', category: 'saudi', options: ['Adnoc', 'Opec', 'Amoco'] },
    { letter: 'A', question: 'Ancient Saudi heritage site and home to the Nabataean tombs of Hegra?', answer: 'AlUla', type: 'mcq', category: 'saudi', options: ['Amman', 'Aswan', 'Atlantis'] },

    // --- Letter B ---
    { letter: 'B', question: 'Another word for a flag, widely displayed across the Kingdom on National Day?', answer: 'Banner', type: 'mcq', category: 'national_day', options: ['Border', 'Badge', 'Bureau'] },
    { letter: 'B', question: 'Traditional nomadic desert-dwelling people historically associated with the Arabian Peninsula?', answer: 'Bedouin', type: 'mcq', category: 'saudi', options: ['Berber', 'Bantu', 'Bavarian'] },

    // --- Letter C ---
    { letter: 'C', question: 'The general word for the festivities, parades and fireworks held every September 23rd?', answer: 'Celebration', type: 'mcq', category: 'national_day', options: ['Curfew', 'Census', 'Conference'] },
    { letter: 'C', question: 'Desert animal famously raced in traditional Saudi festivals, nicknamed the "ship of the desert"?', answer: 'Camel', type: 'mcq', category: 'saudi', options: ['Coyote', 'Cobra', 'Cormorant'] },

    // --- Letter D ---
    { letter: 'D', question: 'A formal royal order — like the one King Abdulaziz issued in 1932 to unify the Kingdom under one name?', answer: 'Decree', type: 'mcq', category: 'national_day', options: ['Debate', 'Deposit', 'Delegate'] },
    { letter: 'D', question: 'Historic town near Riyadh considered the birthplace of the Saudi state, and a UNESCO World Heritage Site?', answer: 'Diriyah', type: 'mcq', category: 'saudi', options: ['Dammam', 'Dhahran', 'Dumat Al-Jandal'] },

    // --- Letter E ---
    { letter: 'E', question: 'Oil-rich Saudi region bordering the Arabian Gulf, home to Dammam and Dhahran?', answer: 'Eastern Province', type: 'mcq', category: 'saudi', options: ['Empty Quarter', 'Elba Region', 'Euphrates Valley'] },

    // --- Letter F ---
    { letter: 'F', question: 'The green banner bearing the Shahada and a sword, raised across the Kingdom on National Day?', answer: 'Flag', type: 'mcq', category: 'national_day', options: ['Festival', 'Fireworks show', 'Fanfare'] },
    { letter: 'F', question: 'Bird of prey central to traditional Arabian hunting heritage and falconry festivals?', answer: 'Falcon', type: 'mcq', category: 'saudi', options: ['Flamingo', 'Finch', 'Fulmar'] },

    // --- Letter G ---
    { letter: 'G', question: 'The predominant color of the Saudi flag, widely worn during National Day celebrations?', answer: 'Green', type: 'mcq', category: 'national_day', options: ['Gold', 'Gray', 'Purple'] },
    { letter: 'G', question: 'The largest mosque in the world, surrounding the Kaaba in Mecca?', answer: 'Grand Mosque', type: 'mcq', category: 'saudi', options: ['Green Dome', 'Golden Mosque', 'Great Mosque of Medina'] },

    // --- Letter H ---
    { letter: 'H', question: 'Traditional dances like Al-Ardah and traditional dress showcased on National Day represent Saudi ___?', answer: 'Heritage', type: 'mcq', category: 'national_day', options: ['Hierarchy', 'Horizon', 'Harvest'] },
    { letter: 'H', question: 'The annual Islamic pilgrimage to Mecca, one of the Five Pillars of Islam?', answer: 'Hajj', type: 'mcq', category: 'saudi', options: ['Hijra', 'Halal', 'Hadith'] },

    // --- Letter I ---
    { letter: 'I', question: 'The King Abdulaziz Center for World Culture, a landmark cultural institution in Dhahran?', answer: 'Ithra', type: 'mcq', category: 'saudi', options: ['Icarus', 'Ibex', 'Indus'] },

    // --- Letter J ---
    { letter: 'J', question: 'Major Red Sea port city known as the gateway to Mecca?', answer: 'Jeddah', type: 'mcq', category: 'saudi', options: ['Jazan', 'Jubail', 'Jouf'] },

    // --- Letter K ---
    { letter: 'K', question: 'What type of state, ruled by a monarch, was the name announced by King Abdulaziz in 1932?', answer: 'Kingdom', type: 'mcq', category: 'national_day', options: ['Republic', 'Caliphate', 'Federation'] },
    { letter: 'K', question: 'The cube-shaped building in Mecca that Muslims face during prayer?', answer: 'Kaaba', type: 'mcq', category: 'saudi', options: ['Kasbah', 'Karnak', 'Kremlin'] },

    // --- Letter L ---
    { letter: 'L', question: 'A value strongly emphasized during National Day, meaning devotion to one’s homeland and leadership?', answer: 'Loyalty', type: 'mcq', category: 'national_day', options: ['Luxury', 'Leisure', 'Litigation'] },

    // --- Letter M ---
    { letter: 'M', question: 'The system of government in Saudi Arabia, ruled by a King?', answer: 'Monarchy', type: 'mcq', category: 'national_day', options: ['Meritocracy', 'Municipality', 'Mandate'] },
    { letter: 'M', question: 'The holiest city in Islam and birthplace of the Prophet Muhammad?', answer: 'Mecca', type: 'mcq', category: 'saudi', options: ['Medina', 'Muscat', 'Manama'] },

    // --- Letter N ---
    { letter: 'N', question: 'What is September 23rd officially known as in Saudi Arabia?', answer: 'National Day', type: 'mcq', category: 'national_day', options: ['Founding Day', 'Flag Day', 'Labor Day'] },
    { letter: 'N', question: 'Saudi Arabia’s futuristic megacity project being built on the Red Sea coast?', answer: 'Neom', type: 'mcq', category: 'saudi', options: ['Nairobi', 'Nassau', 'Nagoya'] },

    // --- Letter O ---
    { letter: 'O', question: 'Saudi Arabia’s most valuable natural resource and main historical export?', answer: 'Oil', type: 'mcq', category: 'saudi', options: ['Ore', 'Onyx', 'Opal'] },

    // --- Letter P ---
    { letter: 'P', question: 'Along with two crossed swords, which tree appears on the Saudi national emblem?', answer: 'Palm Tree', type: 'mcq', category: 'national_day', options: ['Pine Tree', 'Papyrus Plant', 'Poppy Flower'] },
    { letter: 'P', question: 'The general English term for the religious journeys of Hajj and Umrah to Mecca?', answer: 'Pilgrimage', type: 'mcq', category: 'saudi', options: ['Procession', 'Parade', 'Pageant'] },

    // --- Letter Q ---
    { letter: 'Q', question: 'Saudi region famous for date farming, with Buraydah as its capital?', answer: 'Qassim', type: 'mcq', category: 'saudi', options: ['Qatif', 'Quwaiy', 'Qunfudhah'] },

    // --- Letter R ---
    { letter: 'R', question: 'The capital city of Saudi Arabia?', answer: 'Riyadh', type: 'mcq', category: 'saudi', options: ['Rabigh', 'Ras Tanura', 'Rafha'] },
    { letter: 'R', question: 'The sea bordering Saudi Arabia’s western coast, home to Jeddah and Neom?', answer: 'Red Sea', type: 'mcq', category: 'saudi', options: ['Ross Sea', 'Rhine Sea', 'Rift Sea'] },

    // --- Letter S ---
    { letter: 'S', question: 'The Gregorian calendar month in which Saudi National Day (the 23rd) falls?', answer: 'September', type: 'mcq', category: 'national_day', options: ['August', 'October', 'July'] },
    { letter: 'S', question: 'Along with a palm tree, what weapon appears on the Saudi flag and national emblem?', answer: 'Sword', type: 'mcq', category: 'national_day', options: ['Spear', 'Shield', 'Staff'] },
    { letter: 'S', question: 'The name of the current King of Saudi Arabia?', answer: 'Salman', type: 'mcq', category: 'saudi', options: ['Saud', 'Sultan', 'Saad'] },

    // --- Letter T ---
    { letter: 'T', question: 'What word describes the customary dances, clothing and foods showcased during National Day?', answer: 'Tradition', type: 'mcq', category: 'national_day', options: ['Transition', 'Taxation', 'Translation'] },
    { letter: 'T', question: 'Mountain city near Mecca, famous for its roses and annual rose festival?', answer: 'Taif', type: 'mcq', category: 'saudi', options: ['Tabuk', 'Turaif', 'Tanumah'] },

    // --- Letter U ---
    { letter: 'U', question: 'What major historical event, achieved in 1932, is commemorated by Saudi National Day?', answer: 'Unification', type: 'mcq', category: 'national_day', options: ['Urbanization', 'Utilization', 'Universalization'] },
    { letter: 'U', question: 'The "minor pilgrimage" to Mecca that can be performed at any time of the year?', answer: 'Umrah', type: 'mcq', category: 'saudi', options: ['Ummah', 'Uqbah', 'Uthman'] },

    // --- Letter V ---
    { letter: 'V', question: 'Saudi Arabia’s ambitious economic and social reform program launched in 2016?', answer: 'Vision 2030', type: 'mcq', category: 'saudi', options: ['Venture 2020', 'Voyage 2040', 'Vanguard 2025'] },

    // --- Letter W ---
    { letter: 'W', question: 'UNESCO status held by AlUla’s ancient city of Hegra — the first of its kind in Saudi Arabia?', answer: 'World Heritage Site', type: 'mcq', category: 'saudi', options: ['Wonder of the World', 'War Memorial', 'Wildlife Reserve'] },

    // --- Letter Y ---
    { letter: 'Y', question: 'Major Saudi industrial city and Red Sea port, located near Medina?', answer: 'Yanbu', type: 'mcq', category: 'saudi', options: ['Yamama', 'Yaroslavl', 'Yalta'] },

    // --- Letter Z ---
    { letter: 'Z', question: 'The sacred well located within the Grand Mosque in Mecca?', answer: 'Zamzam', type: 'mcq', category: 'saudi', options: ['Zanzibar Spring', 'Zambezi Well', 'Zagros Spring'] },

    // ============================================================
    // Second wave: more Saudi National Day & general Saudi Arabia trivia
    // ============================================================

    // --- Letter A ---
    { letter: 'A', question: 'The world’s largest natural palm oasis, a UNESCO World Heritage Site in Saudi Arabia’s Eastern Province?', answer: 'Al-Ahsa', type: 'mcq', category: 'saudi', options: ['Al-Jouf', 'Al-Kharj', 'Al-Baha'] },
    { letter: 'A', question: 'The Saudi national ___, which opens with the words "Sari’i lil-Majdi wal-’Ulya"?', answer: 'Anthem', type: 'mcq', category: 'national_day', options: ['Agreement', 'Assembly', 'Almanac'] },

    // --- Letter C ---
    { letter: 'C', question: 'The title held by Mohammed bin Salman, the architect of Saudi Vision 2030?', answer: 'Crown Prince', type: 'mcq', category: 'saudi', options: ['Chief Minister', 'Chancellor', 'Consul'] },

    // --- Letter D ---
    { letter: 'D', question: 'The capital city of Saudi Arabia’s oil-rich Eastern Province?', answer: 'Dammam', type: 'mcq', category: 'saudi', options: ['Doha', 'Dubai', 'Damascus'] },

    // --- Letter E ---
    { letter: 'E', question: 'A dramatic cliff formation near Riyadh, nicknamed for the way the land appears to drop away?', answer: 'Edge of the World', type: 'mcq', category: 'saudi', options: ['End of the Earth', 'Endless Horizon', 'Exit Point'] },

    // --- Letter F ---
    { letter: 'F', question: 'Saudi King who greatly expanded education and modernization, reigning from 1964 to 1975?', answer: 'Faisal', type: 'mcq', category: 'saudi', options: ['Fahd', 'Farouk', 'Fahad'] },

    // --- Letter H ---
    { letter: 'H', question: 'Historic oasis city within Al-Ahsa, one of the oldest continuously inhabited places in Arabia?', answer: 'Hofuf', type: 'mcq', category: 'saudi', options: ['Homs', 'Hebron', 'Harar'] },

    // --- Letter I ---
    { letter: 'I', question: 'The simple white, unstitched garment worn by Muslim pilgrims during Hajj and Umrah?', answer: 'Ihram', type: 'mcq', category: 'saudi', options: ['Igloo', 'Icon', 'Idiom'] },

    // --- Letter J ---
    { letter: 'J', question: 'Southwestern Saudi region on the Red Sea, known for its ancient terraced mountain farms?', answer: 'Jazan', type: 'mcq', category: 'saudi', options: ['Jubail', 'Jouf', 'Jeddah'] },

    // --- Letter K ---
    { letter: 'K', question: 'Saudi King who reigned from 1975 to 1982?', answer: 'Khalid', type: 'mcq', category: 'saudi', options: ['Khalifa', 'Karim', 'Kamal'] },

    // --- Letter M ---
    { letter: 'M', question: 'The second holiest city in Islam, home to the Prophet’s Mosque?', answer: 'Medina', type: 'mcq', category: 'saudi', options: ['Muscat', 'Manama', 'Mosul'] },

    // --- Letter N ---
    { letter: 'N', question: 'Southern Saudi region famous for ancient terraced farms and mudbrick heritage forts?', answer: 'Najran', type: 'mcq', category: 'saudi', options: ['Nairobi', 'Nassau', 'Nassiriyah'] },

    // --- Letter R ---
    { letter: 'R', question: 'The official currency of Saudi Arabia?', answer: 'Riyal', type: 'mcq', category: 'saudi', options: ['Rupee', 'Ringgit', 'Rand'] },

    // --- Letter S ---
    { letter: 'S', question: 'Islamic law, which forms the basis of the legal system in Saudi Arabia?', answer: 'Sharia', type: 'mcq', category: 'saudi', options: ['Shura', 'Sunnah', 'Salat'] },

    // --- Letter T ---
    { letter: 'T', question: 'Northwestern Saudi region bordering Jordan, home to the futuristic Neom project?', answer: 'Tabuk', type: 'mcq', category: 'saudi', options: ['Tehran', 'Tripoli', 'Tunis'] },

    // --- Letter Z ---
    { letter: 'Z', question: 'The Arabic term for a religious visit, such as visiting the Prophet’s Mosque in Medina?', answer: 'Ziyarah', type: 'mcq', category: 'saudi', options: ['Zakat', 'Zawiya', 'Zamalek'] },

    // ============================================================
    // Football questions (category: sport)
    // ============================================================

    { letter: 'A', question: 'Which country won the 2022 FIFA World Cup in Qatar?', answer: 'Argentina', type: 'mcq', category: 'sport', options: ['Australia', 'Algeria', 'Austria'] },
    { letter: 'B', question: 'Which Spanish club is nicknamed "Blaugrana" and plays at Camp Nou?', answer: 'Barcelona', type: 'mcq', category: 'sport', options: ['Bayern Munich', 'Benfica', 'Brighton'] },
    { letter: 'C', question: 'Which superstar is nicknamed "CR7"?', answer: 'Cristiano Ronaldo', type: 'mcq', category: 'sport', options: ['Carlos Tevez', 'Cesc Fabregas', 'Casemiro'] },
    { letter: 'D', question: 'Which Argentine legend scored the famous "Hand of God" goal in 1986?', answer: 'Diego Maradona', type: 'mcq', category: 'sport', options: ['Dani Alves', 'David Beckham', 'Didier Drogba'] },
    { letter: 'E', question: 'Which country hosted and won the 1966 FIFA World Cup?', answer: 'England', type: 'mcq', category: 'sport', options: ['Egypt', 'Ecuador', 'Estonia'] },
    { letter: 'F', question: 'Which country won the 2018 FIFA World Cup in Russia?', answer: 'France', type: 'mcq', category: 'sport', options: ['Finland', 'Fiji', 'Faroe Islands'] },
    { letter: 'G', question: 'Which country won the 2014 World Cup thanks to a Mario Götze goal in the final?', answer: 'Germany', type: 'mcq', category: 'sport', options: ['Ghana', 'Greece', 'Georgia'] },
    { letter: 'H', question: 'Which Norwegian striker set a Premier League scoring record in his first season at Manchester City?', answer: 'Haaland', type: 'mcq', category: 'sport', options: ['Hazard', 'Henderson', 'Hummels'] },
    { letter: 'I', question: 'Which Spanish midfielder scored the winning goal in the 2010 World Cup final?', answer: 'Iniesta', type: 'mcq', category: 'sport', options: ['Isco', 'Illarramendi', 'Iturbe'] },
    { letter: 'J', question: 'Which Italian club, based in Turin, is nicknamed "The Old Lady"?', answer: 'Juventus', type: 'mcq', category: 'sport', options: ['Jaguares', 'Jeonbuk', 'Juve Stabia'] },
    { letter: 'K', question: 'Which English striker won the Golden Boot at the 2018 World Cup?', answer: 'Kane', type: 'mcq', category: 'sport', options: ['Kroos', 'Kante', 'Kovacic'] },
    { letter: 'L', question: 'Who captained Argentina to the 2022 World Cup title?', answer: 'Lionel Messi', type: 'mcq', category: 'sport', options: ['Luis Suarez', 'Lautaro Martinez', 'Luka Modric'] },
    { letter: 'M', question: 'Which French forward scored a hat-trick in the 2022 World Cup final?', answer: 'Mbappe', type: 'mcq', category: 'sport', options: ['Messi', 'Modric', 'Mane'] },
    { letter: 'N', question: 'Which Brazilian forward passed Pele to become his country’s all-time top scorer?', answer: 'Neymar', type: 'mcq', category: 'sport', options: ['Nedved', 'Neuer', 'Nani'] },
    { letter: 'O', question: 'Which Manchester stadium is nicknamed "The Theatre of Dreams"?', answer: 'Old Trafford', type: 'mcq', category: 'sport', options: ['Olympiastadion', 'Olimpico', 'Oriel Park'] },
    { letter: 'P', question: 'Which Brazilian legend won three World Cups as a player?', answer: 'Pele', type: 'mcq', category: 'sport', options: ['Puskas', 'Platini', 'Pirlo'] },
    { letter: 'R', question: 'Which Spanish club has won the most European Cup / Champions League titles?', answer: 'Real Madrid', type: 'mcq', category: 'sport', options: ['Rayo Vallecano', 'Real Betis', 'Real Sociedad'] },
    { letter: 'S', question: 'Which country won the 2010 FIFA World Cup in South Africa?', answer: 'Spain', type: 'mcq', category: 'sport', options: ['Sweden', 'Senegal', 'Switzerland'] },
    { letter: 'T', question: 'Which North London club is nicknamed "Spurs"?', answer: 'Tottenham', type: 'mcq', category: 'sport', options: ['Torino', 'Toulouse', 'Twente'] },
    { letter: 'U', question: 'Which South American country won the very first World Cup in 1930?', answer: 'Uruguay', type: 'mcq', category: 'sport', options: ['USA', 'Ukraine', 'Uganda'] },
    { letter: 'V', question: 'Which Brazilian winger at Real Madrid is nicknamed "Vini Jr."?', answer: 'Vinicius', type: 'mcq', category: 'sport', options: ['Valverde', 'Vlahovic', 'Van Dijk'] },
    { letter: 'W', question: 'Which English club plays at Molineux and is nicknamed "Wolves"?', answer: 'Wolverhampton', type: 'mcq', category: 'sport', options: ['Watford', 'West Brom', 'Wigan'] },
    { letter: 'X', question: 'Which Barcelona midfield legend, master of tiki-taka, later managed the club?', answer: 'Xavi', type: 'mcq', category: 'sport', options: ['Xabi Alonso', 'Xherdan Shaqiri', 'Xande Silva'] },
    { letter: 'Y', question: 'Which teenage Spanish winger starred as Spain won Euro 2024?', answer: 'Yamal', type: 'mcq', category: 'sport', options: ['Yaya', 'Yashin', 'Yorke'] },
    { letter: 'Z', question: 'Which French legend scored twice in the 1998 World Cup final?', answer: 'Zidane', type: 'mcq', category: 'sport', options: ['Zola', 'Zanetti', 'Zamorano'] }
];
const defaultGameData = [
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
    { letter: 'Z', question: 'The capital city of Croatia?', answer: 'Zagreb', type: 'mcq', category: 'geo', options: ['Zurich', 'Zambia', 'Zanzibar'] }
];
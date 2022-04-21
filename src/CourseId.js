export function nameToId(name){
    var nameMapping = {
        "Biology" : "biology",
        "Calculus AB" : "calcab",
        "Calculus BC" : "calcbc",
        "Capstone" : "capstone",
        "Chemistry" : "chemistry",
        "Chinese" : "chinese",
        "Computer Science A" : "csa",
        "Computer Science Principles" : "csp",
        "English Language" : "englishlang",
        "English Literature" : "englishlit",
        "Environmental Science" : "environmental",
        "French" : "french",
        "German" : "german",
        "Human Geography" : "humangeo",
        "Latin" : "latin",
        "Macroeconomics" : "macro",
        "Microeconomics" : "micro",
        "Music Theory" : "musictheory",
        "Physics 1" : "physics1",
        "Physics 2" : "physics2",
        "Physics C" : "physicsc",
        "Psychology" : "psych",
        "Spanish" : "spanish",
        "Statistics" : "stats",
        "US Government" : "usgov",
        "US History" : "ushistory",
        "World History" : "world"
    }
    return nameMapping[name];
}
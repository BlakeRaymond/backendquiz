module.exports = {
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "You shall be a king or queen of... like... Neverlore. Or something.",
            "You're money supply shall soon increase exponentially. Probably.",
            "Stay away from bearded women and abnormally small rabbits.",
            "An old friend shall soon tell you a tale of wonder and magic.",
            "CAUTION: It is not.",
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getName: (req, res) => {
        const names = ["King Blakus Maximus Dominicus", "Lord Layover", "Sha'ana Slick", "Dude Bro McDuff", "Yoshi", "Gill Bates III", "The Mysterious Stig", "James Thompson", "Eddie the Con", "Nightmare Nunes"]

        let randomIndex = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex];

        res.status(200).send(randomName)
    },

    getClass: (req, res) => {
        const classes = ["Tech Bro", "Hipster", "Lady Boss", "Chaos Agent", "Financier", "Socialite", "Apparition", "Titled Constructor", "Drone", "Zealot", "Ignoramus", "Inte-wreck-tual"]

        let randomIndex = Math.floor(Math.random() * classes.length);
        let randomClass = classes[randomIndex];

        res.status(200).send(randomClass)
    },

    getHomeland: (req, res) => {
        const homelands = ["Narnia", "The Shire", "Tatooine", "Middle Earth", "Lyrea", "Imbooktu", "The Wastelands", "The Drop Zone", "Firghast Swamp", "Jumanji Jungle-ton", "Void", "Land of Crystal Spires"]

        let randomIndex = Math.floor(Math.random() * homelands.length);
        let randomHomeland = homelands[randomIndex];

        res.status(200).send(randomHomeland)
    },

};

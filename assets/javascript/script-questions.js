const questions = [
    {   // Very Easy - 1
        title: "What is the name of the planet that Yun Che was born on?",
        choices: ["Azure Pale Star ", "Blue Pole Star", "Sky Pill Star", "Blue Cloud Star", "Mars Gravity Star"],
        answer: "Blue Pole Star"
    },
    {   // Easy - 1
        title: "What was the first elemental seed that Yun Che obtained?",
        choices: ["Wind Seed", "Darkness Seed", "Lightning Seed", "Fire Seed", "Water Seed"],
        answer: "Fire Seed"
    },
    {   // Easy - 2
        title: "What is the name of the continent where Yun Che met his parents again?",
        choices: ["Illusory Demon Realm", "Fallen Demon Realm", "Azure Cloud Continent", "Profound Sky Continent", "Illusory Fiend Realm"],
        answer: "Illusory Demon Realm"
    },
    {   // Medium - 1
        title: "How was YC able to find He Ling?",
        choices: ["", "", "", "", "f"],
        answer: ""
    },
    {   // Very Easy - 2
        title: "Who took in Yun Che as a disciple when he arrived in the Snow Song Realm?",
        choices: ["Yun Gu", "Mu Xuanyin", "Shen Xi", "Jasmine", "Mu Bingyun"],
        answer: "Mu Xuanyin"
    },
    {   // Medium - 2
        title: "",
        choices: ["", "f", "", "", ""],
        answer: ""
    },
    {   // Easy - 3
        title: "What is the name of the Star God that Jasmine inherited her powers from?",
        choices: ["Heavenly Jade Star God", "Heavenly Soul Star God", "Heavenly Slaughter Star God", "Heavenly Demon Star God", "Heavenly Wolf Star God"],
        answer: "Heavenly Slaughter Star God"
    },
    {   // Hard - 1
        title: "What was NOT one of the requirements that Yun Che had to for Jasmine when he first accepted her as a master?",
        choices: ["", "", "", "", "f"],
        answer: ""
    },
    {   // Medium - 3
        title: "Which one of these ingredients were NOT required to refine the Universe Penta Jade Pellet?",
        choices: ["Feathered Ice Spirit Flower", "Immortal Emperor Grass", "Wood Spirit Orb", "Qilin Horn", "Divine Nine Star Buddha Jade"],
        answer: "Feathered Ice Spirit Flower"
    },
    {   // Very Easy - 3
        title: "Which profound strength is Shen Xi known for?",
        choices: ["Fire Profound Strength", "Light Profound Strength", "Water Profound Strength", "Darkness Profound Strength", "Space Profound Strength"],
        answer: "Light Profound Strength"
    },
    {   // Medium - 4
        title: "",
        choices: ["f", "", "", "", ""],
        answer: ""
    },
    {   // Easy - 4
        title: "Which female character has the Divine Stainless Soul?",
        choices: ["Qianye Ying'er", "Yue Wugou", "Cang Yue", "Shui Meiyin", "Xia Qingyue"],
        answer: "Shui Meiyin"
    },
    {   // Very Hard - 1
        title: "What was Yun Che's primary purpose in the Illusory Sea Ancient Realm?",
        choices: ["To Get Revenge Against the Black Soul Divine Sect", "To Seek Fortuitous Encounters", "To Gain Experience and Temper Himself", "To Obtain an Ingredient for a Pellet", "To Gain Entrance to Another Place"],
        answer: "To Obtain an Ingredient for a Pellet"
    },
    {   // Very Easy - 4
        title: "Which of these inheritances did Yun Che NOT receive?",
        choices: ["Dragon God Legacy", "Golden Crow Legacy", "Ice Phoenix Legacy", "Lightning Wolf Legacy", "Rage God Legacy"],
        answer: "Lightning Wolf Legacy"
    },
    {   // Hard - 2
        title: "What did Feng Hengkong discover that made him invade Blue Wind Empire?",
        choices: ["", "f", "", "", ""],
        answer: ""
    },
    {   // Easy - 5
        title: "What does the 'Moon Star Restoration' ability of the Evil/Heretic God's 4th gate, 'Rumbling Heaven', do?",
        choices: ["Burst Attack in a Small Area", "Activates a Barrier for Extreme Defense", "Increases Profound Strength by an Entire Great Realm", "Destruction Over a Large Area", "Instant Counter/Rebound"],
        answer: "Instant Counter/Rebound"
    },
    {   // Very Easy - 5
        title: "Who gave birth to Yun Che's first daughter, Yun Wuxin?",
        choices: ["Shen Xi", "Huan Caiyi", "Chu Yuechan", "Cang Yue", "Su Ling'erShen Xi"],
        answer: "Chu Yuechan"
    },
    {   // Hard - 3
        title: "How did Yun Che first obtain the Overlord's Colossal Sword?",
        choices: ["", "", "f", "", ""],
        answer: ""
    },
    {   // Medium - 5
        title: "",
        choices: ["f", "", "", "", ""],
        answer: ""
    },
    {   // Easy - 6
        title: "How many stages of heavenly lightning tribulation did Yun Che undergo when he broke through to Divine Spirit Realm?",
        choices: ["5 Stages", "8 Stages", "6 Stages", "9 Stages", "7 Stages"],
        answer: "9 Stages"
    },
    {   // Medium - 6
        title: "",
        choices: ["", "f", "", "", ""],
        answer: ""
    },
    {   // Easy - 7
        title: "What is the final 'mortal' realm before Divine Extinction Realm?",
        choices: ["Divine King Realm", "Divine Master Realm", "Divine Tribulation Realm", "Divine Spirit Realm", "Divine Sovereign Realm"],
        answer: "Divine Master Realm"
    },
    {   // Very Hard - 2
        title: "How did the Moon Slaughter Devil Sovereign obtain the first fragment of the World-Defying Heaven Manual?",
        choices: ["", "", "", "", "f"],
        answer: ""
    },
    {   // Easy - 8
        title: "Who was Yun Che's opponent in the grand finals of the Profound God Convention?",
        choices: ["Jun Xilei", "Shui Meiyin", "Lu Lengchuan", "Shui Yingyue", "Luo Changsheng"],
        answer: "Luo Changsheng"
    },
    {   // Hard - 4
        title: "What was NOT one of the punishments that Xia Qingyue imposed upon Shui Qianhang and the Glazed Light Realm?",
        choices: ["", "", "f", "", ""],
        answer: ""
    },
    {   // Medium - 7
        title: "",
        choices: ["", "", "", "", ""],
        answer: ""
    },
    {   // Hard - 5
        title: "",
        choices: ["f", "", "", "", ""],
        answer: ""
    },
    {   // Very Easy - 6
        title: "What is the name of the star realm where Huo Poyun and Huo Rulie are from?",
        choices: ["Holy Eaves Realm", "Glazed Light Realm", "Divine Martial Realm", "Shrouding Sky Realm", "Flame God Realm"],
        answer: "Flame God Realm"
    },
    {   // Easy - 9
        title: "What is Hong'er's primary ability that Yun Che relies on the most?",
        choices: ["Releasing Poison", "Granting Invisibility", "Teleporting Over Long Distances", "Storing Items", "Transforming Into a Heavy Sword"],
        answer: "Transforming Into a Heavy Sword"
    },
    {   // Very Hard - 3
        title: "Which event or occurrence caused the Mirror of Samsara to flash?",
        choices: ["", "Yun Che Training in the World Ode of the Phoenix", "", "", ""],
        answer: "Yun Che Training in the World Ode of the Phoenix"
    }
]
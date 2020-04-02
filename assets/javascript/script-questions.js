const questions = [
    {   // Very Easy - 1
        title: "What is the name of the planet that Yun Che was born on?",
        choices: ["Azure Pale Star", "Blue Pole Star", "Sky Pill Star", "Blue Cloud Star", "Mars Gravity Star"],
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
        title: "What does the Soul Star Relegation do?",
        choices: ["Soul Searches One's Mind and Memories", "Curses Someone That Lasts Their Entire Life", "Sucks Out the Souls of Weaker Cultivators in an Area", "Grants a Soul Imprint for Various Uses", "Binds Someone's Life and Soul to Another"],
        answer: "Binds Someone's Life and Soul to Another"
    }, 
    {   // Very Easy - 2
        title: "Who took in Yun Che as a disciple when he arrived in the Snow Song Realm?",
        choices: ["Yun Gu", "Mu Xuanyin", "Shen Xi", "Jasmine", "Mu Bingyun"],
        answer: "Mu Xuanyin"
    },
    {   // Medium - 2
        title: "Which one of these events lead to the creation of the Frozen Cloud Asgard?",
        choices: ["Mu Bingyun Being Poisoned in Blue Pole Star", "Mu Bingyun Being Saved by the Eternal Night Queen", "Mu Bingyun Finding Qu Aiyin", "Mu Bingyun Recovering Her Memories", "Mu Bingyun Succesfully Creating the Frozen Cloud Arts"],
        answer: "Mu Bingyun Being Saved by the Eternal Night Queen"
    },
    {   // Easy - 3
        title: "What is the name of the Star God that Jasmine inherited her powers from?",
        choices: ["Heavenly Jade Star God", "Heavenly Soul Star God", "Heavenly Slaughter Star God", "Heavenly Demon Star God", "Heavenly Wolf Star God"],
        answer: "Heavenly Slaughter Star God"
    },
    {   // Hard - 1
        title: "What was NOT one of the requirements that Yun Che had to do for Jasmine when he first accepted her as a master?",
        choices: ["Gather a Stalk of Netherworld Udambara Flower", "To Kneel Down and Worship Her as Master", "Gather 35 Kilos of Purple Veined God Crystal", "Gather at least 3 Tyrant Profound Realm Profound Cores", "Reach Sovereign Profound Realm within 50 Years"],
        answer: "Reach Sovereign Profound Realm within 50 Years"
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
        title: "How are the value of the customers for the Black Moon Merchant Guild decided?",
        choices: ["Profound Strength Test on Profound Crystal Arrays", "Profound Technique Skill Display to Proctors", "Profound Currency Amount", "Profound Strength Assessment on a Profound Assessing Stone", "Placement Position on a Small-Scale Tournament"],
        answer: "Profound Strength Test on Profound Crystal Arrays"
    },
    {   // Easy - 4
        title: "Which female character has the Divine Stainless Soul?",
        choices: ["Qianye Ying'er", "Yue Wugou", "Cang Yue", "Shui Meiyin", "Xia Qingyue"],
        answer: "Shui Meiyin"
    },
    {   // Very Hard - 1
        title: "What was Yun Che's primary purpose in the Illusory Sea Ancient Realm?",
        choices: ["To Get Revenge Against a Sect", "To Seek Fortuitous Encounters with Xia Qingyue", "To Gain Experience and Temper Himself", "To Obtain an Ingredient for a Pellet", "To Gain Entrance to Another Place"],
        answer: "To Obtain an Ingredient for a Pellet"
    },
    {   // Very Easy - 4
        title: "Which of these inheritances did Yun Che NOT receive?",
        choices: ["Dragon God Legacy", "Golden Crow Legacy", "Ice Phoenix Legacy", "Lightning Wolf Legacy", "Rage God Legacy"],
        answer: "Lightning Wolf Legacy"
    },
    {   // Hard - 2
        title: "What was the main reason why Feng Hengkong invaded Blue Wind Empire?",
        choices: ["To Receive The Other Half of the World Ode of the Phoenix", "To Obtain a Purple Veined Divine Crystal Mine", "To Annex More Territory", "To Boost Divine Phoenix Empire as a Sacred Ground", "To Show Military Might for His Revenge Against Yun Che"],
        answer: "To Obtain a Purple Veined Divine Crystal Mine"
    },
    {   // Easy - 5
        title: "What does the 'Moon Star Restoration' ability of the Evil God's 4th gate, 'Rumbling Heaven', do?",
        choices: ["Burst Attack in a Small Area", "Activates a Barrier for Extreme Defense", "Increases Profound Strength by an Entire Great Realm", "Destruction Over a Large Area", "Instant Counter/Rebound"],
        answer: "Instant Counter/Rebound"
    },
    {   // Very Easy - 5
        title: "Who gave birth to Yun Che's first daughter, Yun Wuxin?",
        choices: ["Shen Xi", "Huan Caiyi", "Chu Yuechan", "Cang Yue", "Su Ling'er", "Qianye Ying'er"],
        answer: "Chu Yuechan"
    },
    {   // Hard - 3
        title: "How did Yun Che first obtain the Overlord's Colossal Sword?",
        choices: ["Personal Reward from Cang Wanhe", "Discovered in the Wasteland of Death", "Picked from the Sky Weapon Pavilion", "Bought from an Auction in Blue Wind Imperial City", "Reward from the First Stage of the Dragon God's First Trial"],
        answer: "Picked from the Sky Weapon Pavilion"
    },
    {   // Medium - 5
        title: "What is the overall main significance of the Demon Emperor's Seal to each generation of Demon Emperors?",
        choices: ["To Obtain the Golden Crow's Legacy", "To Ascend the Throne as a New Demon Emperor", "To Remove the Barrier Around the Golden Crow Lightning Valley", "To Signify the Highest Status in the Illusory Demon Realm", "To Grant a Blood Escape Technique from Life-Threatening Situations"],
        answer: "To Obtain the Golden Crow's Legacy"
    },
    {   // Easy - 6
        title: "How many stages of heavenly lightning tribulation did Yun Che undergo when he broke through to Divine Spirit Realm?",
        choices: ["5 Stages", "8 Stages", "6 Stages", "9 Stages", "7 Stages"],
        answer: "9 Stages"
    },
    {   // Medium - 6
        title: "Which of Chi Wuyao's Witches is known for an unrivaled concealment ability?",
        choices: ["Fourth Witch, Yao Die", "Seventh Witch, Hua Jin", "Ninth Witch, Nahuang Chanyi", "Fifth Witch, Qing Ying", "Third Witch, Ye Li"],
        answer: "Seventh Witch, Hua Jin"
    },
    {   // Easy - 7
        title: "What is the final 'mortal' realm before Divine Extinction Realm?",
        choices: ["Divine King Realm", "Divine Master Realm", "Divine Tribulation Realm", "Divine Spirit Realm", "Divine Sovereign Realm"],
        answer: "Divine Master Realm"
    },
    {   // Very Hard - 2
        title: "How did the Moon Slaughter Devil Sovereign obtain the first fragment of the World-Defying Heaven Manual?",
        choices: ["By Being the King of the Eternal Night Devil Clan", "After the Evil God Sealed Him", "Before the Activation of the Myriad Tribulation Poison", "Right After He Was Posssessed by the Evil Infant", "The Moment the Evil Infant Exhausted its Power"],
        answer: "The Moment the Evil Infant Exhausted its Power"
    },
    {   // Easy - 8
        title: "Who was Yun Che's opponent in the grand finals of the Profound God Convention?",
        choices: ["Jun Xilei", "Shui Meiyin", "Lu Lengchuan", "Shui Yingyue", "Luo Changsheng"],
        answer: "Luo Changsheng"
    },
    {   // Hard - 4
        title: "What was NOT one of the things that the Heaven Smiting Devil Emperor bestowed upon Yun Che?",
        choices: ["Knowledge on the Last Fragment of the World-Defying Heaven Manual", "Additional Darkness Profound Arts", "Unlocking Only the 6th Gate Seal Inside Yun Che's Profound Veins", "Heaven Smiting Devil Emperor Sword", "3 Drops of Her Origin Devil Blood"],
        answer: "Unlocking Only the 6th Gate Seal Inside Yun Che's Profound Veins"
    },
    {   // Medium - 7
        title: "Which of these King Realms accepted to be the direct protector of the Wood Spirit Race?",
        choices: ["Brahma Monarch God Realm", "Star God Realm", "Moon God Realm", "Eternal Heaven Realm", "Dragon God Realm"],
        answer: "Brahma Monarch God Realm"
    },
    {   // Hard - 5
        title: "When did Yun Che first learn about the cause of the Crimson Crack?",
        choices: ["From the Ice Phoenix After Going Through Nirvana", "From the Dragon God After Meeting its Residual Soul Form Again", "From the Golden Crow After Suffering From Devil Origin Orb Backlash", "From Zhou Xuzi in the Eternal Heaven Grand Assembly", "From the Ice Phoenix during Yun Che's Participation to be Mu Xuanyin's Direct Disciple"],
        answer: "From the Ice Phoenix After Going Through Nirvana"
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
        choices: ["Yun Che Mentioning his Strange Dreams to Xia Qingyue", "Yun Che Training in the World Ode of the Phoenix", "Yun Che Picking the Netherworld Udambara Flower for Jasmine", "Yun Che Going Through Nirvana", "Xiao Lingxi Reading a World-Defying Heaven Manual Fragment"],
        answer: "Yun Che Training in the World Ode of the Phoenix"
    }
]
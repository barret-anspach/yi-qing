import {isEqual, take, takeRight} from 'lodash'
const hexagrams = [
    {
        "_id": {
            "$oid": "5797be774703d060025168a1"
        },
        "number": 1,
        "name": "The Creative Heaven",
        "nameChinese": "乾",
        "changing": [
            {
                "line": 0,
                "meaning": "Your creative talents remain unrecognized. Don't worry. Your time will come.",
                "_id": {
                    "$oid": "5797be774703d060025168a8"
                }
            },
            {
                "line": 1,
                "meaning": "As you enter your chosen field, be open to help for people who are more experienced than you. At the same time, believe in your own ability. If you don't take yourself seriously, who will?",
                "_id": {
                    "$oid": "5797be774703d060025168a7"
                }
            },
            {
                "line": 2,
                "meaning": "Busy. The more successful you are, the more you have to deal with. As you influence grows, there's a danger you will become the victim of your own popularity. By staying in touch with your true feelings, you will remain free from blame.",
                "_id": {
                    "$oid": "5797be774703d060025168a6"
                }
            },
            {
                "line": 3,
                "meaning": "Your creativity has brought you to a crossroads. You have a choice: Go on blazing a trail of glory, or retreat from the world and work on perfecting your art.",
                "_id": {
                    "$oid": "5797be774703d060025168a5"
                }
            },
            {
                "line": 4,
                "meaning": "Water flows to the ocean. Fire reaches for the sun. You have a purpose here, and you have the chance to fulfill it.",
                "_id": {
                    "$oid": "5797be774703d060025168a4"
                }
            },
            {
                "line": 5,
                "meaning": "You've made it. You're flying high. Don't let it go to your head!",
                "_id": {
                    "$oid": "5797be774703d060025168a3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168a2"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            0,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "It's easy to create when your heart is full of joy.",
            "sees": "you like father sky\nshedding light on the world\nradiating warmth and benevolence\njust being who you are\nbrings good things to life",
            "suggests": "within you is the power to create\nto make things happen\nbeing true to yourself\ngives you the courage\nyou need to be original\nbelieve in yourself\nand others will believe in you\nwhatever you do\ndon't give up"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168a9"
        },
        "number": 2,
        "name": "The Receptive Earth",
        "nameChinese": "坤",
        "changing": [
            {
                "line": 0,
                "meaning": "When the first frost of autumn hits, winter is not far behind. Better get ready.",
                "_id": {
                    "$oid": "5797be774703d060025168b0"
                }
            },
            {
                "line": 1,
                "meaning": "You can be your own worst critic. Accept your nature. The thing to remember is that you are unique and original, and this is what you have to offer.",
                "_id": {
                    "$oid": "5797be774703d060025168af"
                }
            },
            {
                "line": 2,
                "meaning": "Don't be too concerned about recognition at this stage. Finish what you start and be satisfied with that.",
                "_id": {
                    "$oid": "5797be774703d060025168ae"
                }
            },
            {
                "line": 3,
                "meaning": "Keep it to yourself. Whatever you say now will be taken the wrong way. Wait for the controversy to die down before sticking you neck out.",
                "_id": {
                    "$oid": "5797be774703d060025168ad"
                }
            },
            {
                "line": 4,
                "meaning": "Let your work speak for itself. Don't interrupt.",
                "_id": {
                    "$oid": "5797be774703d060025168ac"
                }
            },
            {
                "line": 5,
                "meaning": "A power struggle at the top causes harm on both sides. Stay out of it if you can or you might get caught in the crossfire. This is not your fight.",
                "_id": {
                    "$oid": "5797be774703d060025168ab"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168aa"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            4,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "It's simple to receive when your heart is full of love.",
            "sees": "you like mother earth\nthe seeds are within you\nall you need is light\nwater and nourishment\nwith plenty of room to grow\nwhat a harvest it will be",
            "suggests": "the more you can receive\nthe more you are able to give\nsympathetic souls\nkindred spirits\nallies and helpers\nthey are all around you\nsimply by being open\nreceptive to the blessings\nlife has to give\nyou will prosper and grow"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168b1"
        },
        "number": 3,
        "name": "Difficulty at the Beginning",
        "nameChinese": "屯",
        "changing": [
            {
                "line": 0,
                "meaning": "Obstacles, difficulties, hindrances. Pause for thought. What you need is an intelligent approach to intelligence.",
                "_id": {
                    "$oid": "5797be774703d060025168b8"
                }
            },
            {
                "line": 1,
                "meaning": "Bide your time. Things appear to be falling apart. Whom can you trust? On what can you depend? You.",
                "_id": {
                    "$oid": "5797be774703d060025168b7"
                }
            },
            {
                "line": 2,
                "meaning": "If you enter uncharted territory without a guide or a map, you're looking for trouble.",
                "_id": {
                    "$oid": "5797be774703d060025168b6"
                }
            },
            {
                "line": 3,
                "meaning": "When you're in a fix, don't be too proud to accept help. The right helper at the right time can get you out of trouble and put you back on the road.",
                "_id": {
                    "$oid": "5797be774703d060025168b5"
                }
            },
            {
                "line": 4,
                "meaning": "Just because you're paranoid doesn't mean they're not out to get you. When you don't have the confidence of others, proceed with extreme caution.",
                "_id": {
                    "$oid": "5797be774703d060025168b4"
                }
            },
            {
                "line": 5,
                "meaning": "Fate seems to be conspiring against you. You've got to know when to walk away (and know when to run!).",
                "_id": {
                    "$oid": "5797be774703d060025168b3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168b2"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            1,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "In the beginning is the word and the word is now.",
            "sees": "a new beginning\nan exciting development\na storm clearing the air\na new day\nwhen anything is possible",
            "suggests": "beginning can be a difficult time\nwhen extra care must be taken\nwhether it's a newborn baby\nan idea or an initiative\na journey or a work of art\nbest to be prepared\nwhen it's time to bring order out of chaos\nhelping hands are most welcome\nonce the clutter has been cleared\nthe dust has settled\nthe scene is set\nlet us begin"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168b9"
        },
        "number": 4,
        "name": "Youthful Folly",
        "nameChinese": "蒙",
        "changing": [
            {
                "line": 0,
                "meaning": "There comes a time when you have to grow up and start taking the business of life more seriously. A little self-discipline is needed. life is not a game.",
                "_id": {
                    "$oid": "5797be774703d060025168c0"
                }
            },
            {
                "line": 1,
                "meaning": "Remember when you were young and foolish? A little tolerance goes a long way. A little kindness never hurt anyone.",
                "_id": {
                    "$oid": "5797be774703d060025168bf"
                }
            },
            {
                "line": 2,
                "meaning": "Are you wasting your time on an adolescent fantasy? Is it really worth it?",
                "_id": {
                    "$oid": "5797be774703d060025168be"
                }
            },
            {
                "line": 3,
                "meaning": "Are you deluded by your own projections? Are you about to make a fool of yourself again? The Book suggests: don't.",
                "_id": {
                    "$oid": "5797be774703d060025168bd"
                }
            },
            {
                "line": 4,
                "meaning": "Stay in touch with the innate wisdom of the young. Approach life with the heart of a child.",
                "_id": {
                    "$oid": "5797be774703d060025168bc"
                }
            },
            {
                "line": 5,
                "meaning": "What do you do with someone who won't listen, who just goes on playing the fool? Temper justice with mercy. Punishment is meant to improve the behavior, not make it worse.",
                "_id": {
                    "$oid": "5797be774703d060025168bb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168ba"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            2,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "If you lack experience, you need a good teacher. If you have a good teacher, pay attention and do what the teacher tells you.",
            "sees": "you like a mountain stream\nfull of rushing enthusiasm\nthe exuberance of young life\na fool on the brink",
            "suggests": "the folly of youth\nis a fact of life\nplaying the fool\ngoes with the territory\nbut there comes a time\nwhen you have to grow up\nif you listen to what is being said\nyou can receive the gift of wisdom\nand not be fooled again"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168c1"
        },
        "number": 5,
        "name": "Waiting",
        "nameChinese": "需",
        "changing": [
            {
                "line": 0,
                "meaning": "Waiting on the meadows. Sweet! Enjoy it while it lasts.",
                "_id": {
                    "$oid": "5797be774703d060025168c8"
                }
            },
            {
                "line": 1,
                "meaning": "Draw a line in the sand. Across this line, they do not pass.",
                "_id": {
                    "$oid": "5797be774703d060025168c7"
                }
            },
            {
                "line": 2,
                "meaning": "Stuck in the mud? Spinning your wheels will just get you in deeper. Once you appreciate the gravity of your situation, you discover a way out.",
                "_id": {
                    "$oid": "5797be774703d060025168c6"
                }
            },
            {
                "line": 3,
                "meaning": "Wait. This is a dangerous situation. Remain calm. Stand fast. Be brave.",
                "_id": {
                    "$oid": "5797be774703d060025168c5"
                }
            },
            {
                "line": 4,
                "meaning": "Take time out to enjoy the simple pleasures life can afford. You deserve it.",
                "_id": {
                    "$oid": "5797be774703d060025168c4"
                }
            },
            {
                "line": 5,
                "meaning": "Are you in the pits? Have all your efforts been in vain? Sometimes help comes from unexpected quarters. A happy outcome can appear in a form that, at first, seems strange.",
                "_id": {
                    "$oid": "5797be774703d060025168c3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168c2"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            0,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "Patience is a gift. Like kindness, you have an abundant reserve of patience within you. Learn how to use it and you'll see a beautiful transformation in your life.",
            "sees": "you like clouds in a blue sky\npretty as a picture\na sunny interval\na pause for reflection",
            "suggests": "waiting is an art\nancient and timeless\nwaiting is a seed\nfull of life's certainty\nwaiting is a drop\non its way to becoming a river\nwaiting is knowing\ntiming is everything\nwhile you're waiting\neat, drink, and be merry\nfor tomorrow we dine"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168c9"
        },
        "number": 6,
        "name": "Conflict",
        "nameChinese": "訟",
        "changing": [
            {
                "line": 0,
                "meaning": "By not reacting to the attacks on you, you defuse the conflict. Don't worry \u2014 it will work out in the end.",
                "_id": {
                    "$oid": "5797be774703d060025168d0"
                }
            },
            {
                "line": 1,
                "meaning": "When you know you can't win, retreat. Timely withdrawal implies no blame. If you can see it coming, avoid the calamity.",
                "_id": {
                    "$oid": "5797be774703d060025168cf"
                }
            },
            {
                "line": 2,
                "meaning": "In times of danger, dig deep. Draw on your inner strength. Don't focus on the rewards \u2014 just get the job done.",
                "_id": {
                    "$oid": "5797be774703d060025168ce"
                }
            },
            {
                "line": 3,
                "meaning": "You're so caught up in the conflict, you are not seeing clearly. Accept your situation. There's not a lot you can do about it at this point. What you can affect is your attitude. Be at peace with yourself, no matter what.",
                "_id": {
                    "$oid": "5797be774703d060025168cd"
                }
            },
            {
                "line": 4,
                "meaning": "If you are in the right and the authorities are on your side, the conflict can be resolved to your satisfaction.",
                "_id": {
                    "$oid": "5797be774703d060025168cc"
                }
            },
            {
                "line": 5,
                "meaning": "When you engage in an unjust conflict, even if you win, you will lose in the end. A hollow victory will bring you under attach again and again.",
                "_id": {
                    "$oid": "5797be774703d060025168cb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168ca"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            2,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "When you can find peace within yourself, you will find peace all around you.",
            "sees": "you like the inner diplomat\nobserving the conflict\ndiscovering hidden agendas\ndigging into the causes\nof the dangers and difficulties",
            "suggests": "take a dep breath\na big step back\nresolving inner conflicts\nenables you to find solutions\nto external problems\nsometimes doing nothing\nis better than doing the wrong thing\nonce you make peace with yourself\nyou can make peace with anyone"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168d1"
        },
        "number": 7,
        "name": "The Army",
        "nameChinese": "師",
        "changing": [
            {
                "line": 0,
                "meaning": "In the beginning of a campaign, good organization is essential.",
                "_id": {
                    "$oid": "5797be774703d060025168d8"
                }
            },
            {
                "line": 1,
                "meaning": "A good leader spends time on the ground sharing experiences with the people doing the work: recognition, reward, reinforcement.",
                "_id": {
                    "$oid": "5797be774703d060025168d7"
                }
            },
            {
                "line": 2,
                "meaning": "You have to get rid of the dead wood if you want the tree to be healthy and grow.",
                "_id": {
                    "$oid": "5797be774703d060025168d6"
                }
            },
            {
                "line": 3,
                "meaning": "When you're up against a vastly superior force, there's no shane in a well-ordered retreat.",
                "_id": {
                    "$oid": "5797be774703d060025168d5"
                }
            },
            {
                "line": 4,
                "meaning": "The game is afoot. Now's the time to act! May your progress be swift and your aim be true.",
                "_id": {
                    "$oid": "5797be774703d060025168d4"
                }
            },
            {
                "line": 5,
                "meaning": "The campaign is complete. Victory is yours. Share the rewards with the people who helped you achieve them.",
                "_id": {
                    "$oid": "5797be774703d060025168d3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168d2"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            2,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "You are a force to be reckoned with. Discipline is the key to success.",
            "sees": "you as a natural leader\nwith the support of people\nwho have good reason\nto come out and fight for you\nwhen the cause is just\nand the need is great",
            "suggests": "you have courage and strength\nthe ability to inspire others\nbut just as muscles need exercise\nif they are to be strong\nyour talents must be employed\nfor you to develop and grow\nwhen the leader lacks discipline\nwhat hope is there for the army?"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168d9"
        },
        "number": 8,
        "name": "Holding Together",
        "nameChinese": "比",
        "changing": [
            {
                "line": 0,
                "meaning": "Content is everything. If you are sincere, you will be blessed with good fortune.",
                "_id": {
                    "$oid": "5797be774703d060025168e0"
                }
            },
            {
                "line": 1,
                "meaning": "If you are happy to be a follower and feel genuine respect for the leader, trust your feeling. If you're just going along for the ride, watch out.",
                "_id": {
                    "$oid": "5797be774703d060025168df"
                }
            },
            {
                "line": 2,
                "meaning": "You're hanging out with the wrong people. Not only are they holding you back, they're keeping you from the right people.",
                "_id": {
                    "$oid": "5797be774703d060025168de"
                }
            },
            {
                "line": 3,
                "meaning": "When you find a good person or group of people that you trust and believe in, show your loyalty. Let them know how you feel.",
                "_id": {
                    "$oid": "5797be774703d060025168dd"
                }
            },
            {
                "line": 4,
                "meaning": "Fair play is the foundation of good teamwork. A unity based on trust and conviction is always stronger than one fraught with fear and suspicion.",
                "_id": {
                    "$oid": "5797be774703d060025168dc"
                }
            },
            {
                "line": 5,
                "meaning": "Make sure you get it right from the start. If the beginning is all wrong, what hope is there for the outcome?",
                "_id": {
                    "$oid": "5797be774703d060025168db"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168da"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            4,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "You are the river and the river is you.",
            "sees": "you are like a drop of water\njoining together\nwith other drops of water\nto form one mighty river",
            "suggests": "now is the time to unite\nwith kindred spirits\nin a common cause\nworking together\nyou can achieve great things\nthat you cannot do alone\nfor you to take the lead of such forces\nto be the center of attention\nyou will need to be strong\nconsistent and clear\n(so if you're still not sure\nask the oracle once more)"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168e1"
        },
        "number": 9,
        "name": "Small Taming",
        "nameChinese": "小畜",
        "changing": [
            {
                "line": 0,
                "meaning": "Do what suits you. Find the place where you feel comfortable. How can you go wrong with that?",
                "_id": {
                    "$oid": "5797be774703d060025168e8"
                }
            },
            {
                "line": 1,
                "meaning": "The way ahead is blocked. Bide your time. Consider an alternative route.",
                "_id": {
                    "$oid": "5797be774703d060025168e7"
                }
            },
            {
                "line": 2,
                "meaning": "You blew it again! If only you'd held back and bided your time. If married or in a partnership, a row is almost inevitable.",
                "_id": {
                    "$oid": "5797be774703d060025168e6"
                }
            },
            {
                "line": 3,
                "meaning": "Being gentle in your handling of the situation is not a sign of weakness. Your strength is in holding on to what you know to be true. Then you need not fear.",
                "_id": {
                    "$oid": "5797be774703d060025168e5"
                }
            },
            {
                "line": 4,
                "meaning": "Sincerity coupled with loyalty is a winning combination. By serving the mutual interests of both parties, everyone's a winner.",
                "_id": {
                    "$oid": "5797be774703d060025168e4"
                }
            },
            {
                "line": 5,
                "meaning": "With the downpour comes relief. Through your patient efforts, you have finally attained your goal. Take extra care or you might snatch defeat from the jaws of victory.",
                "_id": {
                    "$oid": "5797be774703d060025168e3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168e2"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            0,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "Like a gentle breeze on a hot summer's day, your influence is subtle yet most welcome.",
            "sees": "you like a beautiful day\ngentle breezes are blowing\nexquisite clouds adorn\na brilliant blue sky",
            "suggests": "the gentle art of persuasion\nin the eyes of others\nyou are what you appear to be\ninvest the time and effort\nboth in your appearance\nand how you express yourself\nonly remember\nclouds are not merely ornamental\nthey serve a vital purpose:\nthe delivery of rain"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168e9"
        },
        "number": 10,
        "name": "Treading",
        "nameChinese": "履",
        "changing": [
            {
                "line": 0,
                "meaning": "Keep it simple. Be happy with your rate of progress. Your restless mind with its endless ambitions will only make you miserable. Ignore it if you can.",
                "_id": {
                    "$oid": "5797be774703d060025168f0"
                }
            },
            {
                "line": 1,
                "meaning": "Stay on the path. You walk your walk and are not affected by the opinions of others. You are happy with your own company.",
                "_id": {
                    "$oid": "5797be774703d060025168ef"
                }
            },
            {
                "line": 2,
                "meaning": "Be careful. If you tread on a tiger's tail, he just might turn around and bite you.",
                "_id": {
                    "$oid": "5797be774703d060025168ee"
                }
            },
            {
                "line": 3,
                "meaning": "You're riding a tiger, so be extremely cautious. The danger is real, but by being extra careful, you can avoid being hurt.",
                "_id": {
                    "$oid": "5797be774703d060025168ed"
                }
            },
            {
                "line": 4,
                "meaning": "When you embark on a bold course of action, you are taking your chances. However, if you are aware of the dangers and how to deal with them, your adventure can be a great success.",
                "_id": {
                    "$oid": "5797be774703d060025168ec"
                }
            },
            {
                "line": 5,
                "meaning": "Look at what you've done. If you've done well, enjoy your rewards. Let's celebrate.",
                "_id": {
                    "$oid": "5797be774703d060025168eb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168ea"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            7,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "There's no doubt you're going places now, but watch your step and don't get ahead of yourself.",
            "sees": "you finding your way in the world\nwhere your position is defined\nboth by your inner character\nand how it is outwardly expressed",
            "suggests": "it's not what you do\nit's the way that you do it\ntread carefully\nyou are working with powerful forces\nthat can take you where you want to go\nso show some respect\nbut don't lose your sense of humor\na respectful attitude\ncombined with\na cheerful expression\nwill win you friends\nin both high and low places"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168f1"
        },
        "number": 11,
        "name": "Peace",
        "nameChinese": "泰",
        "changing": [
            {
                "line": 0,
                "meaning": "In times of peace and prosperity, your ability to achieve your goals is enhanced. It's only natural that like-minded people are drawn to help you.",
                "_id": {
                    "$oid": "5797be774703d060025168f8"
                }
            },
            {
                "line": 1,
                "meaning": "Prosperous times will attract all kinds of people to your enterprise. Trusting those who are close to you allows you to pay more attention to those who are far away.",
                "_id": {
                    "$oid": "5797be774703d060025168f7"
                }
            },
            {
                "line": 2,
                "meaning": "Everything changes; it's always the same. perservere in times of difficulty. The Book suggests: less complaining, more sustaining.",
                "_id": {
                    "$oid": "5797be774703d060025168f6"
                }
            },
            {
                "line": 3,
                "meaning": "A shower of blessings, a time of harmony \u2014 rich and poor get together like good neighbors and friends. Sweet.",
                "_id": {
                    "$oid": "5797be774703d060025168f5"
                }
            },
            {
                "line": 4,
                "meaning": "With the generosity of your nature, you bring all different kinds of people together and a good time is had by all.",
                "_id": {
                    "$oid": "5797be774703d060025168f4"
                }
            },
            {
                "line": 5,
                "meaning": "Your outer defenses are crumbling. Accept your fate. Withdraw into the inner circle, composed of the people you know you can trust. Guard yourself in silence.",
                "_id": {
                    "$oid": "5797be774703d060025168f3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168f2"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            0,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "You discover your heaven on earth when you find true peace within yourself.",
            "sees": "you like a peaceable domain\nenjoying and appreciating\nthe benign influence of your heaven\nthe receptive nature of your earth\nthe symmetry of your seasons\nthe elegance of your day\nthe comfort of your night",
            "suggests": "be at peace with yourself\nthis is your heaven on earth\nrain brings the seed to life\nsunlight enables it to grow\nworking with nature\nyou achieve a bountiful harvest\nas the well-being within you rises\nsickness will simply disappear"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025168f9"
        },
        "number": 12,
        "name": "Standstill",
        "nameChinese": "否",
        "changing": [
            {
                "line": 0,
                "meaning": "In a time of standstill, be true to yourself. When things start moving again, you will be in a good position to succeed.",
                "_id": {
                    "$oid": "5797be774703d06002516900"
                }
            },
            {
                "line": 1,
                "meaning": "Stick to your principles and everything will turn out right in the end. Have patience.",
                "_id": {
                    "$oid": "5797be774703d060025168ff"
                }
            },
            {
                "line": 2,
                "meaning": "Once you acknowledge your mistakes you can begin to put them right.",
                "_id": {
                    "$oid": "5797be774703d060025168fe"
                }
            },
            {
                "line": 3,
                "meaning": "It's your call. Look for the mutual benefits to all parties concerned and you'll make the right decision.",
                "_id": {
                    "$oid": "5797be774703d060025168fd"
                }
            },
            {
                "line": 4,
                "meaning": "Time to stop standing still and spring into action. Ask yourself: What if it should fail? But don't let that stop you. Have a plan B.",
                "_id": {
                    "$oid": "5797be774703d060025168fc"
                }
            },
            {
                "line": 5,
                "meaning": "The time for standing still is over. A good thing, too. You didn't know how much more standing still you could stand.",
                "_id": {
                    "$oid": "5797be774703d060025168fb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025168fa"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            4,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "When all around you are losing their heads, you can keep yours \u2014 simply by standing still.",
            "sees": "you like a wise leader\nwithdrawing from the fray\nwhen all is discordant and confusing\nwhen chaos is the order of the day\nyou stand for dignity\nyour position is clear",
            "suggests": "stand still\nvery very still\ntake a good look around\nbide your time\nmind your own business\ndon't be fooled\nby tempting offers\nuntil you know it's time\nto make your move\nthen go for it\nif you stand still for too long\nit may turn to stagnation"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516901"
        },
        "number": 13,
        "name": "Fellowship",
        "nameChinese": "同人",
        "changing": [
            {
                "line": 0,
                "meaning": "In the beginning of a communal enterprise, openness is the key. Transparency inspires trust.",
                "_id": {
                    "$oid": "5797be774703d06002516908"
                }
            },
            {
                "line": 1,
                "meaning": "When the fellowship is fragmented and people are driven by selfish motives, your are heading for disaster. Be aware of this potential and try to stop it before it happens.",
                "_id": {
                    "$oid": "5797be774703d06002516907"
                }
            },
            {
                "line": 2,
                "meaning": "Hostile or divisive forces have infiltrated your fellowship. Suspicion breeds suspicion, paranoia feeds on itself. The longer it goes on, the worse it gets.",
                "_id": {
                    "$oid": "5797be774703d06002516906"
                }
            },
            {
                "line": 3,
                "meaning": "It takes two to tango. Stay out of the fight. Seek reconciliation.",
                "_id": {
                    "$oid": "5797be774703d06002516905"
                }
            },
            {
                "line": 4,
                "meaning": "When the fellowship has been kept apart by circumstances, great joy attends the reunion.",
                "_id": {
                    "$oid": "5797be774703d06002516904"
                }
            },
            {
                "line": 5,
                "meaning": "The common meadows belong to the people. Friends meet in the open air. It is a wonderful, easygoing fellowship.",
                "_id": {
                    "$oid": "5797be774703d06002516903"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516902"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            6,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "At the heart of any fellowship worthy of the name is a great love that is shared by your fellows.",
            "sees": "you like a good fellow\nentertaining friends\nserving the cause\nfollowing your heart",
            "suggests": "the foundation of your fellowship\nis the common cause\nbinding you together\nwith clarity on the inside\nstrength on the outside\ngreat things are possible\nbut you will need clear leadership\ngood organization\nif you want to succeed"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516909"
        },
        "number": 14,
        "name": "Great Possession",
        "nameChinese": "大有",
        "changing": [
            {
                "line": 0,
                "meaning": "When things start to go your way, don't let it go to your head. There are still difficulties to be overcome.",
                "_id": {
                    "$oid": "5797be774703d06002516910"
                }
            },
            {
                "line": 1,
                "meaning": "You've found the treasure. Now you must use the appropriate vehicle to convey it to where it can do the most good. Reliable people are worth their weight in gold.",
                "_id": {
                    "$oid": "5797be774703d0600251690f"
                }
            },
            {
                "line": 2,
                "meaning": "Don't keep it to yoursef. Such a heavenly treasure is for the benefit of everyone.",
                "_id": {
                    "$oid": "5797be774703d0600251690e"
                }
            },
            {
                "line": 3,
                "meaning": "Don't envy those who are better off, nor look down on those who are worse. Be happy with a little, be content with your lot.",
                "_id": {
                    "$oid": "5797be774703d0600251690d"
                }
            },
            {
                "line": 4,
                "meaning": "You've reached an exalted position. Be accessible but retain your dignity. This is your time of good fortune. Enjoy it.",
                "_id": {
                    "$oid": "5797be774703d0600251690c"
                }
            },
            {
                "line": 5,
                "meaning": "You are blessed by good fortune. Your devotion is rewarded from above, your sincerity is recognized by one and all.",
                "_id": {
                    "$oid": "5797be774703d0600251690b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251690a"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            0,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "A treasure shared is a treasure doubled.",
            "sees": "you like the sun\nhigh in the sky\nshining brightly\nto light up your world\nrevealing both the good and the bad",
            "suggests": "in the light of this new day\ntake a good look at your life\nget rid of the evil\nnurture the good\ndig the riches you discover\nshare them with the world\nexpress yourself clearly\nstay in control\nyou will be richly rewarded\nwhen you find your treasure on earth\nit feels like heaven"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516911"
        },
        "number": 15,
        "name": "Modesty",
        "nameChinese": "謙",
        "changing": [
            {
                "line": 0,
                "meaning": "Make no promises you cannot keep. When you're facing a new challenge, you need all your concentration to get the job done.",
                "_id": {
                    "$oid": "5797be774703d06002516918"
                }
            },
            {
                "line": 1,
                "meaning": "Being modest does not mean keeping quiet. Express your actual feelings if you want to have a real influence.",
                "_id": {
                    "$oid": "5797be774703d06002516917"
                }
            },
            {
                "line": 2,
                "meaning": "Your natural modesty is the key to your success. When the rewards and recognition come, follow the hip commandment: be cool.",
                "_id": {
                    "$oid": "5797be774703d06002516916"
                }
            },
            {
                "line": 3,
                "meaning": "Modesty is not something to hide behind. Recognition of your ability and commitment enables you to accomplish more.",
                "_id": {
                    "$oid": "5797be774703d06002516915"
                }
            },
            {
                "line": 4,
                "meaning": "Modesty can be mistaken for weakness, but don't be tempted into boasting of your strength. Nobody likes a show-off.",
                "_id": {
                    "$oid": "5797be774703d06002516914"
                }
            },
            {
                "line": 5,
                "meaning": "When modesty finds its full expression, it creates order. It's a discipline that allows you to transcend ego and achieve true and lasting benefits for you and your world.",
                "_id": {
                    "$oid": "5797be774703d06002516913"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516912"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            3,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "Being as humble as you can be (without disappearing) you shine with an inner light.",
            "sees": "you like a hidden mountain\ncomposed and self-contained\nempty of conceit\nfull of genuine affection\nmaking you radiant",
            "suggests": "modesty suits you\nreduce your excesses\nclear what needs clearing\nbuild what needs building\nedit what you do not need\npolish what you want to keep\nsuch refinements will bring success"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516919"
        },
        "number": 16,
        "name": "Enthusiasm",
        "nameChinese": "豫",
        "changing": [
            {
                "line": 0,
                "meaning": "You may feel the need to show off and make an impression. Like you have to boast a bit. You don't.",
                "_id": {
                    "$oid": "5797be774703d06002516920"
                }
            },
            {
                "line": 1,
                "meaning": "You know straightaway what the real deal is here. Secure in this knowledge, you can relax. Your take on the situation is right on.",
                "_id": {
                    "$oid": "5797be774703d0600251691f"
                }
            },
            {
                "line": 2,
                "meaning": "Don't let those above you dim your enthusiasm. You who hesitate are lost.",
                "_id": {
                    "$oid": "5797be774703d0600251691e"
                }
            },
            {
                "line": 3,
                "meaning": "No doubt about it. You retain friends and supporters, who are attracted by your enthusiasm. Together, you can achieve great things.",
                "_id": {
                    "$oid": "5797be774703d0600251691d"
                }
            },
            {
                "line": 4,
                "meaning": "Frustration. Obstacles. Stress. It's enough to make you ill, and it frequently does. Try not to react. Don't let it get under your skin.",
                "_id": {
                    "$oid": "5797be774703d0600251691c"
                }
            },
            {
                "line": 5,
                "meaning": "There's a big gap between expectation and reality here. Awakening from a false enthusiasm can only be a good thing.",
                "_id": {
                    "$oid": "5797be774703d0600251691b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251691a"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            4,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "To be enthused is to be filled with divine inspiration. When you are inspired you are inspiring.",
            "sees": "you like a summer storm\nyour enthusiasm resounding\nfar and wide\nlike rolling tunder\nlike heavenly music",
            "suggests": "as a thunderstorm relieves tensions\nrefreshing the earth\nmusic brings joy to the heart\nfollowing the line of least resistance\nyou get the people moving\nthey are on your side\nlike a rainbow bridge\nyou make the connection\nbetween heaven and earth\nyou've got the whole world\nin your hands\nwhen you know the secret of enthusiasm"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516921"
        },
        "number": 17,
        "name": "Following",
        "nameChinese": "隨",
        "changing": [
            {
                "line": 0,
                "meaning": "Exciting events are unfolding. If you want to be part of the action, get out more.",
                "_id": {
                    "$oid": "5797be774703d06002516928"
                }
            },
            {
                "line": 1,
                "meaning": "The company you keep can seriously affect how well you perform. Beware the weak and seek out the strong, for they will bring out the best in you.",
                "_id": {
                    "$oid": "5797be774703d06002516927"
                }
            },
            {
                "line": 2,
                "meaning": "When you connect with the right people who enable you to follow you true path, it often means parting company from the ones who were leading you astray.",
                "_id": {
                    "$oid": "5797be774703d06002516926"
                }
            },
            {
                "line": 3,
                "meaning": "Follow through and you will fulfill your ambition. Go your own way \u2014 just as you are. Sincerity will bring clarity. Clarity will show the way.",
                "_id": {
                    "$oid": "5797be774703d06002516925"
                }
            },
            {
                "line": 4,
                "meaning": "Recognizing and following the path that leads you to your promised land \u2014 this is your great good fortune.",
                "_id": {
                    "$oid": "5797be774703d06002516924"
                }
            },
            {
                "line": 5,
                "meaning": "You achieve recognition. You advance along your chosen path. Enjoy your rewards \u2014 you deserve them.",
                "_id": {
                    "$oid": "5797be774703d06002516923"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516922"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            1,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "Following the path that feels right to you will take you where you really want to go.",
            "sees": "a storm on the water\njoy in motion\na natural sequence of event\na fabulous footpath",
            "suggests": "the path you are on was made for you\nif you stay on it\nyou will find it easy going\nwhen you learn to listen\nyou will be heard\nwhen you learn to follow\nyou will know how to lead\nyour ability to adapt\nto the changes around you\ninspires confidence in your followers\nwhen you have had a long day on the trail\nbetter get some rest"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516929"
        },
        "number": 18,
        "name": "Work on the Decayed",
        "nameChinese": "蠱",
        "changing": [
            {
                "line": 0,
                "meaning": "The mess may not be of your making. It may be a legacy mess. However, it's now your responsibility to clear it up. Just do it.",
                "_id": {
                    "$oid": "5797be774703d06002516930"
                }
            },
            {
                "line": 1,
                "meaning": "The mess you've inherited was not created deliberately. It's much more satisfying to clean it up than to worry about who's to blame.",
                "_id": {
                    "$oid": "5797be774703d0600251692f"
                }
            },
            {
                "line": 2,
                "meaning": "Sometimes when you're clearing up, you have to get your hands dirty. Wear rubber gloves if you like \u2014 just get cleaning. You will feel so much better when it's done.",
                "_id": {
                    "$oid": "5797be774703d0600251692e"
                }
            },
            {
                "line": 3,
                "meaning": "Once the rot set in, it becomes harder and harder to get rid of it. The sooner you start, the better.",
                "_id": {
                    "$oid": "5797be774703d0600251692d"
                }
            },
            {
                "line": 4,
                "meaning": "Job done. You've cleared up the mess and put things back in order. You deserve a break.",
                "_id": {
                    "$oid": "5797be774703d0600251692c"
                }
            },
            {
                "line": 5,
                "meaning": "What does all work and no play make you? Take a break and have some fun.",
                "_id": {
                    "$oid": "5797be774703d0600251692b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251692a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            5,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "When you know the job has got to be done, the sooner you get to work, the better you will begin to feel.",
            "sees": "you in a state of inertia\nsomehow stuck in a moment\nlike stagnant water\nsomething in you\nneeds to be moved\nwants to be moving",
            "suggests": "the longer you leave it\nthe worse it gets\nthe garden that needs weeding\nthe mess that needs clearing up\nthe heart that needs to be understood\nget weeding \u2014 get clearing\nseek understanding\nand you will find fulfillment\nwhen you bring order out of chaos\nyou show the way\nfor others who may be stuck"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516931"
        },
        "number": 19,
        "name": "Approach",
        "nameChinese": "臨",
        "changing": [
            {
                "line": 0,
                "meaning": "Doors are opening. Things are looking up. You approach greatness by standing up for what you know to be right.",
                "_id": {
                    "$oid": "5797be774703d06002516938"
                }
            },
            {
                "line": 1,
                "meaning": "When a collaboration works, your burden is lightened. A joint approach leads to progress.",
                "_id": {
                    "$oid": "5797be774703d06002516937"
                }
            },
            {
                "line": 2,
                "meaning": "Things are going well. But complacency can undo your good work. If it's already happened, apologize and move on.",
                "_id": {
                    "$oid": "5797be774703d06002516936"
                }
            },
            {
                "line": 3,
                "meaning": "Be open-minded. You have gathered able people around you who can make good things happen. Let them.",
                "_id": {
                    "$oid": "5797be774703d06002516935"
                }
            },
            {
                "line": 4,
                "meaning": "A wise leader attracts capable people and encourages them to use their abilities to the full.",
                "_id": {
                    "$oid": "5797be774703d06002516934"
                }
            },
            {
                "line": 5,
                "meaning": "Great is the good fortune of the student who can approach a true teacher with a humble heart.",
                "_id": {
                    "$oid": "5797be774703d06002516933"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516932"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            7,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "How do you approach greatness? Very humbly.",
            "sees": "you like a good teacher\nwhose clarity and enthusiasm\nmakes the subject easy to approach\nthe lake is deep\nthe earth spreads far and wide",
            "suggests": "it's all in your approach\na humble heart and a tolerant attitude\ncreate a safe atmosphere\nwhere people want to do their best\nthis is how a good teacher\nbecomes a great teacher\nonce you get the ball rolling\nmaintain the momentum\nthe excitement in the early stages\nis bound to diminish\ndefeat the threat of boredom\nby keeping your approach fresh"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516939"
        },
        "number": 20,
        "name": "Contemplation",
        "nameChinese": "觀",
        "changing": [
            {
                "line": 0,
                "meaning": "Childlike imaginings are all very well if you're just having fun at home. But if you want to be taken seriously in the real world, you'd better start acting like a grown-up.",
                "_id": {
                    "$oid": "5797be774703d06002516940"
                }
            },
            {
                "line": 1,
                "meaning": "Life as seen through a crack in the door \u2014 you need to get out more.",
                "_id": {
                    "$oid": "5797be774703d0600251693f"
                }
            },
            {
                "line": 2,
                "meaning": "Look at what you are contemplating. Honestly. Do you really want to go there?",
                "_id": {
                    "$oid": "5797be774703d0600251693e"
                }
            },
            {
                "line": 3,
                "meaning": "Good people invite you into their world. Enjoy the hospitality they offer and express your gratitude.",
                "_id": {
                    "$oid": "5797be774703d0600251693d"
                }
            },
            {
                "line": 4,
                "meaning": "Contemplate this: How are you affecting the people around you? Now, consider what's going on inside you to cause these effects. Change begins within you.",
                "_id": {
                    "$oid": "5797be774703d0600251693c"
                }
            },
            {
                "line": 5,
                "meaning": "Contemplate life itself. Life within you and without you.",
                "_id": {
                    "$oid": "5797be774703d0600251693b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251693a"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            4,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "By finding a high place, you gain the perspective you need.",
            "sees": "you like seeing and being seen\nthe wind blows where it will\nyou move among the people\nobserving their ways",
            "suggests": "a period of contemplation\na place of elevation\nso you can see the big picture\nlooking at your life\nwhat you have to offer the world\nthe intensity of your focus\nthe sincerity of your devotion\ncombine to give you a power of seeing\nthat enables you to have a profound effect\non the attitudes of people\nwithout them even knowing how it happens"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516941"
        },
        "number": 21,
        "name": "Biting Through",
        "nameChinese": "噬嗑",
        "changing": [
            {
                "line": 0,
                "meaning": "Your authority is threatened. You hope a warning shot may be enough. But be prepared to take more drastic action.",
                "_id": {
                    "$oid": "5797be774703d06002516948"
                }
            },
            {
                "line": 1,
                "meaning": "The case is easy to settle and you meet with little resistance. No blame.",
                "_id": {
                    "$oid": "5797be774703d06002516947"
                }
            },
            {
                "line": 2,
                "meaning": "You're stirring up some old grudges here. It's a painful procedure but a necessary one. It will be odd to get through these things.",
                "_id": {
                    "$oid": "5797be774703d06002516946"
                }
            },
            {
                "line": 3,
                "meaning": "Because of your determination to take on the opposition and remove the obstacles, you'll be under attack. You'd best be well protected.",
                "_id": {
                    "$oid": "5797be774703d06002516945"
                }
            },
            {
                "line": 4,
                "meaning": "You're aware of the danger but you know you're right to proceed. Be fair in your demands and you will receive satisfaction.",
                "_id": {
                    "$oid": "5797be774703d06002516944"
                }
            },
            {
                "line": 5,
                "meaning": "When people are deaf to all warnings and keep making the same mistakes, you need to do something dramatic to focus their attention.",
                "_id": {
                    "$oid": "5797be774703d06002516943"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516942"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            1,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "Energetic and decisive action is required to remove the obstacle blocking your progress.",
            "sees": "an electrical storm\ngreat flashes of lightning\nilluminating the scene\nso you can see clearly",
            "suggests": "when an obstacle needs to be removed\na problem must be solved\nyou've got to lay down the law\nact swiftly\nlike an animal in the wild\nbiting through the umbilical cord\nof its newborn offspring\nyou have to cut through\nwhatever's getting in the way\nof your natural progress\nwith whatever is available to you"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516949"
        },
        "number": 22,
        "name": "Grace",
        "nameChinese": "賁",
        "changing": [
            {
                "line": 0,
                "meaning": "It is more graceful to go on foot than to ride in the carriage under a false pretext.",
                "_id": {
                    "$oid": "5797be774703d06002516950"
                }
            },
            {
                "line": 1,
                "meaning": "If you want to get ahead in the world, good grooming is essential. Why do you think they say someone is being groomed for success?",
                "_id": {
                    "$oid": "5797be774703d0600251694f"
                }
            },
            {
                "line": 2,
                "meaning": "Are you leading a charmed existence? Don't get too comfortable or you might lose your edge. Without your edge, life would be so dull.",
                "_id": {
                    "$oid": "5797be774703d0600251694e"
                }
            },
            {
                "line": 3,
                "meaning": "Like a winged horse, you rise above your situation. You can go on pushing the boundaries or return to a simpler style. The choice is yours.",
                "_id": {
                    "$oid": "5797be774703d0600251694d"
                }
            },
            {
                "line": 4,
                "meaning": "You find grace in your surroundings: a walk in the hills, relaxing in nature. Who needs material riches when you can enjoy such simple pleasures?",
                "_id": {
                    "$oid": "5797be774703d0600251694c"
                }
            },
            {
                "line": 5,
                "meaning": "No unnecessary ornamentation is required. Form serves function. The design does not get in the way; it brings out the value of the content.",
                "_id": {
                    "$oid": "5797be774703d0600251694b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251694a"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            6,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "The world is a beautiful place when your life is full of grace.",
            "sees": "you like a fire in the mountain\na radiant inner glow\nbrightening and gladdening\nevery aspect of your existence",
            "suggests": "as the moon reflects\nthe glory of the sun\nyou too can create\nbeautiful reflections\nto enrich your world\nattend to the details\nrefine and polish the threads\nyou weave together\nto create a tapestry of delight\nso you can live\nin a state of grace"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516951"
        },
        "number": 23,
        "name": "Splitting Apart",
        "nameChinese": "剝",
        "changing": [
            {
                "line": 0,
                "meaning": "Is your authority being undermined? Has your reputation been tarnished by hearsay? Don't be too concerned. You know what you're doing.",
                "_id": {
                    "$oid": "5797be774703d06002516958"
                }
            },
            {
                "line": 1,
                "meaning": "Feeling isolated? Under attack? Consider your options. Sometimes just changing your position can alleviate the pain.",
                "_id": {
                    "$oid": "5797be774703d06002516957"
                }
            },
            {
                "line": 2,
                "meaning": "Enough is enough. You can only take so much. A clean break is indicated.",
                "_id": {
                    "$oid": "5797be774703d06002516956"
                }
            },
            {
                "line": 3,
                "meaning": "Something's wrong when you can't sleep at night. Try to figure out what it is and put it right. If you can't manage on your own, get help.",
                "_id": {
                    "$oid": "5797be774703d06002516955"
                }
            },
            {
                "line": 4,
                "meaning": "When things are falling apart, you find out who your true friends are. Lay down your arms and surrender to their tender loving care. You could use some right now.",
                "_id": {
                    "$oid": "5797be774703d06002516954"
                }
            },
            {
                "line": 5,
                "meaning": "The worst of your fall from grace is over. Evil has eaten itself. Now you can start again. The core of your being is intact and ready to put forth fresh growth.",
                "_id": {
                    "$oid": "5797be774703d06002516953"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516952"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            4,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "When the old order is collapsing, find shelter in the sanctuary of your heart. Prepare to embrace the new.",
            "sees": "you like a crumbling mountain\na house on the verge of collapse\nthe old order passing away\nthe new order rising",
            "suggests": "keep a low profile\nconserve your energy\nthere's not much you can do now\nwhen things fall apart\nit's time to let them go\nstay true to your generous nature\ndon't let the bad times\nput a dent in your benevolence\nhold on to your inner equilibrium\nstay safe in a quiet heart\nuntil the good times return"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516959"
        },
        "number": 24,
        "name": "Return",
        "nameChinese": "復",
        "changing": [
            {
                "line": 0,
                "meaning": "It's OK to stray from the path as long as you get back on it.",
                "_id": {
                    "$oid": "5797be774703d06002516960"
                }
            },
            {
                "line": 1,
                "meaning": "Come home to where you belong. You'll be in good company \u2014 even when you are alone.",
                "_id": {
                    "$oid": "5797be774703d0600251695f"
                }
            },
            {
                "line": 2,
                "meaning": "Do you keep changing your mind? Going back on your decisions? Too many changes are not good for you.",
                "_id": {
                    "$oid": "5797be774703d0600251695e"
                }
            },
            {
                "line": 3,
                "meaning": "Don't follow the herd. Do your own thing, even if it means doing it alone.",
                "_id": {
                    "$oid": "5797be774703d0600251695d"
                }
            },
            {
                "line": 4,
                "meaning": "You're big enough to admit your mistakes and return to the way. Your heart is in the right place, and it shows.",
                "_id": {
                    "$oid": "5797be774703d0600251695c"
                }
            },
            {
                "line": 5,
                "meaning": "If you keep missing the point and straying from where you truly belong, you are going to get hurt. Only a change of heart can save you now.",
                "_id": {
                    "$oid": "5797be774703d0600251695b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251695a"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            1,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "When you come to a major turning point, just for a moment, your whole world stands still.",
            "sees": "you like coming home\nreturning to the light\ncelebrating your life\nin the company of good friends",
            "suggests": "let nature take its course\njust as the earth\nin the depths of winter\nat the time of the solstice\nstops for a moment\nbefore turning\nmaking its journey back toward the sun\nyou too have arrived at a place\nwhere you can begin the journey\nback to where you belong\nit's a cause for celebration"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516961"
        },
        "number": 25,
        "name": "Innocence",
        "nameChinese": "無妄",
        "changing": [
            {
                "line": 0,
                "meaning": "Follow your heart. It knows you better than you know yourself.",
                "_id": {
                    "$oid": "5797be774703d06002516968"
                }
            },
            {
                "line": 1,
                "meaning": "Focus on what you're doing. Enjoy the simple pleasure of getting the job done.",
                "_id": {
                    "$oid": "5797be774703d06002516967"
                }
            },
            {
                "line": 2,
                "meaning": "Accidents will happen. Good people have bad luck. That's just how it is.",
                "_id": {
                    "$oid": "5797be774703d06002516966"
                }
            },
            {
                "line": 3,
                "meaning": "Do your own thing. Give it your all \u2014 you've got nothing to lose and everything to gain.",
                "_id": {
                    "$oid": "5797be774703d06002516965"
                }
            },
            {
                "line": 4,
                "meaning": "Whatever's troubling you will pass. If it's not your fault, why take the blame? If you're not really sick, why pay for medicine?",
                "_id": {
                    "$oid": "5797be774703d06002516964"
                }
            },
            {
                "line": 5,
                "meaning": "Hang on. The time may not be right. Is it instinct or impulse? Best to be sure.",
                "_id": {
                    "$oid": "5797be774703d06002516963"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516962"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            1,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "Your fundamental nature has not changed. It is as innocent as the day you were born. If you lose touch with this inner sense, what will become of you?",
            "sees": "you like a benign ruler\ngrounded in your true nature\nfill of virtue\noverflowing with kindness",
            "suggests": "being true to yourself\nyou can't go wrong\nexpecting the unexpected\nyou're not taken by surprise\nbeing attuned to the times\nfollowing your better instincts\nyou bring good things to life\nlife brings good things to you"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516969"
        },
        "number": 26,
        "name": "Great Taming",
        "nameChinese": "大畜",
        "changing": [
            {
                "line": 0,
                "meaning": "Greatness comes in its own time \u2014 you can't force it. Hold on to the power stored within you and hold back till the time is right.",
                "_id": {
                    "$oid": "5797be774703d06002516970"
                }
            },
            {
                "line": 1,
                "meaning": "Your progress is temporarily halted \u2014 like someone took the wheels off! You need to repair your vehicle, or you won't get too far.",
                "_id": {
                    "$oid": "5797be774703d0600251696f"
                }
            },
            {
                "line": 2,
                "meaning": "Lead by following. Key your ear close to the ground. Be alert to any sign of danger.",
                "_id": {
                    "$oid": "5797be774703d0600251696e"
                }
            },
            {
                "line": 3,
                "meaning": "Anticipate trouble before it happens. Stop it before it starts.",
                "_id": {
                    "$oid": "5797be774703d0600251696d"
                }
            },
            {
                "line": 4,
                "meaning": "By not overreacting, you diminish the power of dissension. By remaining cal you can diffuse the tension that agitated people tend to create.",
                "_id": {
                    "$oid": "5797be774703d0600251696c"
                }
            },
            {
                "line": 5,
                "meaning": "A stairway to heaven. The success you have been seeking is yours for the taking.",
                "_id": {
                    "$oid": "5797be774703d0600251696b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251696a"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            0,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "You can draw on the ancient wisdom teachings to strengthen your character.",
            "sees": "heaven in the mountain\nhidden treasures revealed\nthe wisdom of the past\nmade available to you today",
            "suggests": "your success is so close\nyou can taste it\nall this energy building up inside\nis about to be released\nget ready for the ride of your life\nhold on\nhold fast to what you know to be true\nhold back till the time is just right\nhold on to your dreams\nas they turn into reality"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516971"
        },
        "number": 27,
        "name": "Corners of the Mouth",
        "nameChinese": "頤",
        "changing": [
            {
                "line": 0,
                "meaning": "There is magic, working wonders in your life. Don't lost it by looking at what works for other people and wondering if you should be like them.",
                "_id": {
                    "$oid": "5797be774703d06002516978"
                }
            },
            {
                "line": 1,
                "meaning": "Your natural state is to support yourself. If you are dependent on someone else for your support, you will never be truly comfortable.",
                "_id": {
                    "$oid": "5797be774703d06002516977"
                }
            },
            {
                "line": 2,
                "meaning": "Sensual gratification and the pursuit of pleasure will be your undoing. You've got to know when to quit.",
                "_id": {
                    "$oid": "5797be774703d06002516976"
                }
            },
            {
                "line": 3,
                "meaning": "You're hungry like a tiger, your appetite for success driving you onward and upward.",
                "_id": {
                    "$oid": "5797be774703d06002516975"
                }
            },
            {
                "line": 4,
                "meaning": "Going into unfamiliar territory, you're likely to need help. If you're not sure of the outcome, don't invest too heavily.",
                "_id": {
                    "$oid": "5797be774703d06002516974"
                }
            },
            {
                "line": 5,
                "meaning": "Well-nourished, both physically and spiritually, you can now face the dangers and overcome the difficulties.",
                "_id": {
                    "$oid": "5797be774703d06002516973"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516972"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            1,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "Watch your mouth.",
            "sees": "you like cultivating character\nboth phusical and spiritual\ntranquility is the key\nto your growth and well-being",
            "suggests": "the food and drink you consume\nwill determine the health you enjoy\nthe things you express\nthe words you choose to say them\nwill define your state of mind\njust as delicious nourishing food\nsustains the body\nexpressions that are beautiful and true\nnurture the spirit\nthe nourishment you provide for yourself\ncan also nourish those around you"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516979"
        },
        "number": 28,
        "name": "Great Preponderance",
        "nameChinese": "大過",
        "changing": [
            {
                "line": 0,
                "meaning": "Careful. When moving a heavy, valuable object, take extra care, especially when setting it down.",
                "_id": {
                    "$oid": "5797be774703d06002516980"
                }
            },
            {
                "line": 1,
                "meaning": "When you're not overloaded and yo are content with your lot, extraordinary things can happen. Like new growth on an old tree, you can experience the vitality of youth all over again.",
                "_id": {
                    "$oid": "5797be774703d0600251697f"
                }
            },
            {
                "line": 2,
                "meaning": "Overload. If you refuse to listen to good counsel and go on carrying a burden you are not really able to bear, your collapse is almost inevitable.",
                "_id": {
                    "$oid": "5797be774703d0600251697e"
                }
            },
            {
                "line": 3,
                "meaning": "You've got the extra support just when you need it. Don't abuse it, or you'll lose it.",
                "_id": {
                    "$oid": "5797be774703d0600251697d"
                }
            },
            {
                "line": 4,
                "meaning": "Have you seen new growth on an old tree? Where there's life, there's always hope.",
                "_id": {
                    "$oid": "5797be774703d0600251697c"
                }
            },
            {
                "line": 5,
                "meaning": "You're in over your head. Some things in life are worth your sacrifice. But is this one of them?",
                "_id": {
                    "$oid": "5797be774703d0600251697b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251697a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            5,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "Find a way to lighten your load before something gives.",
            "sees": "you like a beam that is sagging\nan overloaded structure\non the edge of collapse\na system that is being pushed\nto its limit",
            "suggests": "if you've taken on too much\nyou have two choices\nlighten the load\nby discarding some items\nor get help carrying it\nwhen the burden becomes insupportable\nsomething's got to give\nand it's likely to be you\nonly by identifying the real problem\ncan you discover a lasting solution"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516981"
        },
        "number": 29,
        "name": "The Abyss",
        "nameChinese": "坎",
        "changing": [
            {
                "line": 0,
                "meaning": "You've fallen into a pit. Bad luck. You are going to need help getting out of it.",
                "_id": {
                    "$oid": "5797be774703d06002516988"
                }
            },
            {
                "line": 1,
                "meaning": "It's a disaster. Until conditions improve, don't try to accomplish too much. Just get through this.",
                "_id": {
                    "$oid": "5797be774703d06002516987"
                }
            },
            {
                "line": 2,
                "meaning": "Hang in there. Whichever way you go will get you into trouble. Do nothing till the dangers have passed and the situation has improved.",
                "_id": {
                    "$oid": "5797be774703d06002516986"
                }
            },
            {
                "line": 3,
                "meaning": "A jug of wine? A bowl of rice? Given the circumstances, it's a veritable feast.",
                "_id": {
                    "$oid": "5797be774703d06002516985"
                }
            },
            {
                "line": 4,
                "meaning": "You're in serious trouble but not in over your head. Not yet, anyway. Get out of there while your head's still above water.",
                "_id": {
                    "$oid": "5797be774703d06002516984"
                }
            },
            {
                "line": 5,
                "meaning": "You're in a tight spot, all right! Bound and gagged, imprisoned. There's no escape from this situation. All you can do is hang tough and ride the time.",
                "_id": {
                    "$oid": "5797be774703d06002516983"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516982"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            2,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "You're in a tight spot. By remaining calm and true to your nature, you'll get out of this place.",
            "sees": "you in a deep ravine\nbut just as water\nremains true to its nature\nfinding its own level\nflowing ever onward\nyou can still reach your goal",
            "suggests": "even when things appear\nto be abysmal\nand you are at your lowest ebb\nkeep the faith\nremain true to your principles\nmaintain your integrity\nthe consistency you show\nwhen surrounded by danger\nis an inspiration\nto those who follow"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516989"
        },
        "number": 30,
        "name": "The Clinging Fire",
        "nameChinese": "離",
        "changing": [
            {
                "line": 0,
                "meaning": "Another new day and the world is kicking into life. Your mind is all over the place. Intent on your purpose, you compose yourself so you can acquire the clarity you need to get the job done.",
                "_id": {
                    "$oid": "5797be774703d06002516990"
                }
            },
            {
                "line": 1,
                "meaning": "Blazing with the light of the midday sun, you radiate feelings of benevolence and good fortune. The flowering of your creative self-expression is at its height.",
                "_id": {
                    "$oid": "5797be774703d0600251698f"
                }
            },
            {
                "line": 2,
                "meaning": "At the end of the day there's a temptation to indulge in drunken revelry or wallow in melancholy. Resist it.",
                "_id": {
                    "$oid": "5797be774703d0600251698e"
                }
            },
            {
                "line": 3,
                "meaning": "A fire made of straw will blaze up brilliantly but soon burns itself out. A meteor is a thrilling sight but quickly forgotten.",
                "_id": {
                    "$oid": "5797be774703d0600251698d"
                }
            },
            {
                "line": 4,
                "meaning": "Sometimes it's good to cry, to release the flood of tears. Acknowledging your grief, a natural process of healing begins.",
                "_id": {
                    "$oid": "5797be774703d0600251698c"
                }
            },
            {
                "line": 5,
                "meaning": "Don't be too hard on yourself, but do try and root out some of your bad habits. If something is seriously wrong, look for the causes of the symptoms. If you can eradicate evil, the good will prevail.",
                "_id": {
                    "$oid": "5797be774703d0600251698b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251698a"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            6,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "You're on fire. You light up your world with the intensity of your enthusiasm and the clarity of your vision.",
            "sees": "you like a roaring fire\nfueled by your passions\nflames of love are dancing\nspreading warmth and light all around",
            "suggests": "trees and grass cling to the earth\nsun and moon cling to the sky\nflames cling to the wood\nyou cling to the light within\nthat enables you to shine\nreturn to the source again and again\nso you don't burn yourself out\nagreeing to agree\naccepting your position in life\nyou are clearly where you are meant to be\nkeeping the home fires burning"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516991"
        },
        "number": 31,
        "name": "Influence",
        "nameChinese": "咸",
        "changing": [
            {
                "line": 0,
                "meaning": "Your influence is barely felt. It may just be a whim or a passing fancy. Either way, it's no big thing.",
                "_id": {
                    "$oid": "5797be774703d06002516998"
                }
            },
            {
                "line": 1,
                "meaning": "The influence you're under is not coming from your heart. Therefore, it's not in your control. You'd be wise to wait until it is.",
                "_id": {
                    "$oid": "5797be774703d06002516997"
                }
            },
            {
                "line": 2,
                "meaning": "The attraction here is distinctly below the belt. If you follow your desire and not your heart, you're heading for trouble \u2014 again. When will you ever learn?",
                "_id": {
                    "$oid": "5797be774703d06002516996"
                }
            },
            {
                "line": 3,
                "meaning": "If your thoughts are flitting here and there, your influence on people and events is negligible. Focus your mind, listen to your heart, and the cause for remorse will disappear.",
                "_id": {
                    "$oid": "5797be774703d06002516995"
                }
            },
            {
                "line": 4,
                "meaning": "If you overexert your influence, you run the risk of a pain in the neck. Having one and/or being one.",
                "_id": {
                    "$oid": "5797be774703d06002516994"
                }
            },
            {
                "line": 5,
                "meaning": "Empty words persuade no one. When your words are meaningful and backed up by genuine passion, people will be influenced by them.",
                "_id": {
                    "$oid": "5797be774703d06002516993"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516992"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            3,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "When you want to win people over to your point of view, you don't necessarily need to wow them, but you do have to woo them.",
            "sees": "you like a lake on a hill\na reservoir of received wisdom\nyou say: come on in\nthe water's fine",
            "suggests": "there are people you naturally like\nand naturally they like you\nsuch affinities work well together\nto increase your sphere of influence\nrespect is the foundation\nfor any long-lasting relationship\nwhether it is with your audience\nyour friend or your spouse\nshow some respect in the house"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516999"
        },
        "number": 32,
        "name": "Duration",
        "nameChinese": "恆",
        "changing": [
            {
                "line": 0,
                "meaning": "If you want to compress something, you must first let it fully expand. If you want to make something that will last, take your time.",
                "_id": {
                    "$oid": "5797be774703d060025169a0"
                }
            },
            {
                "line": 1,
                "meaning": "Through your actions, the remorse you've been feeling disappears. What a relief.",
                "_id": {
                    "$oid": "5797be774703d0600251699f"
                }
            },
            {
                "line": 2,
                "meaning": "Don't let the ups and down get to you. Don't lose the inner quality on which you depend. Get back in touch \u2014 with yourself.",
                "_id": {
                    "$oid": "5797be774703d0600251699e"
                }
            },
            {
                "line": 3,
                "meaning": "No game is afoot. You're looking for love in all the wrong places.",
                "_id": {
                    "$oid": "5797be774703d0600251699d"
                }
            },
            {
                "line": 4,
                "meaning": "Whether you uphold tradition or make a break from it depends on your own good judgment. Keep an open mind and adapt to the situation. Be flexible without being too flexible.",
                "_id": {
                    "$oid": "5797be774703d0600251699c"
                }
            },
            {
                "line": 5,
                "meaning": "If you're always in a hurry, looking anxiously ahead, constantly changing your mind, no good can come of it. Calm down.",
                "_id": {
                    "$oid": "5797be774703d0600251699b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d0600251699a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            5,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "You are self-contained, relying on your inner resources \u2014 you stand firm. You abide.",
            "sees": "you like a force of nature\nthunder rolling\nhigh wind blowing\na reed bending with the breeze\na flower turning toward the sun\nforever changing yet always the same",
            "suggests": "seasons wax and wane\naccording to fixed laws\neverything comes and goes\nin its proper time and place\nall around you: change\nthere may be a storm outside\nbut inwardly you are calm\nthe enduring present belongs to you"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169a1"
        },
        "number": 33,
        "name": "Retreat",
        "nameChinese": "遯",
        "changing": [
            {
                "line": 0,
                "meaning": "The tail end of a retreat is a dangerous place to be. Don't try anything till you're in a safer place.",
                "_id": {
                    "$oid": "5797be774703d060025169a8"
                }
            },
            {
                "line": 1,
                "meaning": "You may not be winning this battle, but even when you have to withdraw, you never lose sight of your long-term goal: winning the war.",
                "_id": {
                    "$oid": "5797be774703d060025169a7"
                }
            },
            {
                "line": 2,
                "meaning": "When a retreat is blocked or halted, it's a stressful and dangerous time. Keep you people close \u2014 the ones you trust.",
                "_id": {
                    "$oid": "5797be774703d060025169a6"
                }
            },
            {
                "line": 3,
                "meaning": "When it is appropriate, a well-organized retreat can only help you and your case. At the same time, it may well defuse hostile forces.",
                "_id": {
                    "$oid": "5797be774703d060025169a5"
                }
            },
            {
                "line": 4,
                "meaning": "Yes, you are withdrawing from the scene, but you can still be friendly.",
                "_id": {
                    "$oid": "5797be774703d060025169a4"
                }
            },
            {
                "line": 5,
                "meaning": "No doubt about it \u2014 you are free to go. Liberating yourself from a losing battle fills you with good cheer. The clarity you consequently feel reveals the path you must follow.",
                "_id": {
                    "$oid": "5797be774703d060025169a3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169a2"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            3,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "Sometimes a retreat into a place of tranquility is just what the doctor ordered.",
            "sees": "you like a distant mountain peak\nkeeping the demons at bay\nyou are not angry\nyou are reserved",
            "suggests": "retreat need not be running away\nit can be a sign of strength\nby putting distance between yourself\nand the hostile forces on the attack\nyou remain calm and dignified\nbecause even when retreating\nespecially when retreating\na human being must have dignity"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169a9"
        },
        "number": 34,
        "name": "Great Power",
        "nameChinese": "大壯",
        "changing": [
            {
                "line": 0,
                "meaning": "You may feel the power, but are you really in a position to exercise it? If not, better wait until you are.",
                "_id": {
                    "$oid": "5797be774703d060025169b0"
                }
            },
            {
                "line": 1,
                "meaning": "The gates to success are beginning to open. Be excited but not too excited.",
                "_id": {
                    "$oid": "5797be774703d060025169af"
                }
            },
            {
                "line": 2,
                "meaning": "A frustrated goat butts a hedge and its horns become entangled. Careful!",
                "_id": {
                    "$oid": "5797be774703d060025169ae"
                }
            },
            {
                "line": 3,
                "meaning": "The obstacles give way, the gates open \u2014 the only question now: Are you ready to make your entrance?",
                "_id": {
                    "$oid": "5797be774703d060025169ad"
                }
            },
            {
                "line": 4,
                "meaning": "The gates to success are open. All you have to do now is walk through them. Release the tensions. Drop the shoulders. Take a deep breath...",
                "_id": {
                    "$oid": "5797be774703d060025169ac"
                }
            },
            {
                "line": 5,
                "meaning": "A goat is butting a hedge and its horns are entangled. It can't go forward and it can't go back. The only way out of this predicament is to stop struggling. Calm down and gently disentangle yourself.",
                "_id": {
                    "$oid": "5797be774703d060025169ab"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169aa"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            0,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "A righteous combination of power and goodness makes you irresistible. Use it, don't abuse it.",
            "sees": "you like a quiet storm\ngenerating excitement\nclearing the air\ninspiring enthusiasm",
            "suggests": "you know the feeling\nit's the right time\nthe right place\nthe right people\nyou have got it made\nstill you must be careful\nhow you proceed\nonly going through appropriate channels\nremember where you're coming from\nand you can see where you want to go:\na place of harmony and goodwill\nwhere love is the order of the day"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169b1"
        },
        "number": 35,
        "name": "Progress",
        "nameChinese": "晉",
        "changing": [
            {
                "line": 0,
                "meaning": "If others appear to doubt you, remain confident and calm. If they are rude, don't let it get to you. Simply let your light shine.",
                "_id": {
                    "$oid": "5797be774703d060025169b8"
                }
            },
            {
                "line": 1,
                "meaning": "Your progress is checked, but only temporarily. In the end, you'll be as happy with the outcome as if your mother had wished it for you.",
                "_id": {
                    "$oid": "5797be774703d060025169b7"
                }
            },
            {
                "line": 2,
                "meaning": "The progress you make is the direct result of the support you receive from allies and helpers. This is not to be denied; it is to be acknowledged and celebrated.",
                "_id": {
                    "$oid": "5797be774703d060025169b6"
                }
            },
            {
                "line": 3,
                "meaning": "Even if you win the rat race, you'll still be a rat.",
                "_id": {
                    "$oid": "5797be774703d060025169b5"
                }
            },
            {
                "line": 4,
                "meaning": "It's all going your way. Don't be too concerned about gains and losses. You'll come out ahead, whatever happens. Enjoy your progress.",
                "_id": {
                    "$oid": "5797be774703d060025169b4"
                }
            },
            {
                "line": 5,
                "meaning": "There's no call for aggressive tactics here, unless you are correcting your own mistakes. Being aware of the pitfalls and dangers, and proceeding cautiously, you can certainly achieve your purpose.",
                "_id": {
                    "$oid": "5797be774703d060025169b3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169b2"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            4,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "The clearer you are, the brighter your light can shine.",
            "sees": "you like the rising sun\nyou are in the ascendancy\ntaking your place in the sky\nthis is your chance to shine",
            "suggests": "the higher the sun rises\nthe brighter it becomes\nas you emerge from obscurity\nyou shine more and more brightly\nenjoy the recognition\nonly remember your role\nas the devoted servant\nto a powerful ruler\nby practicing your craft\npolishing your techniques\nto serve your benefactor\nyour progress is assured"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169b9"
        },
        "number": 36,
        "name": "Darkening of the Light",
        "nameChinese": "明夷",
        "changing": [
            {
                "line": 0,
                "meaning": "Hard times. You could be really stretched. You might have to go without. People may try to put you down. Don't let them.",
                "_id": {
                    "$oid": "5797be774703d060025169c0"
                }
            },
            {
                "line": 1,
                "meaning": "Is it your feelings that are hurt, or are you really wounded? If you can still help others even though you're hurting yourself, do it. What goes around comes around.",
                "_id": {
                    "$oid": "5797be774703d060025169bf"
                }
            },
            {
                "line": 2,
                "meaning": "Accidents happen. Sometimes they work to your advantage, but don't let that lull you into a false sense of security. The danger is not over yet.",
                "_id": {
                    "$oid": "5797be774703d060025169be"
                }
            },
            {
                "line": 3,
                "meaning": "You can see the coming storm. So you are able to weather it or, if necessary, get out of its way.",
                "_id": {
                    "$oid": "5797be774703d060025169bd"
                }
            },
            {
                "line": 4,
                "meaning": "It's wrong and you know it's wrong, but they've got the upper hand for now. Exposing them is too dangerous. Keep it to yourself.",
                "_id": {
                    "$oid": "5797be774703d060025169bc"
                }
            },
            {
                "line": 5,
                "meaning": "Don't despair. The darkness will feed on itself until there is nothing left. The light of a new day will inevitably shine again.",
                "_id": {
                    "$oid": "5797be774703d060025169bb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169ba"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            6,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "While the forces of darkness surround you, keep a low profile and stay safe at home.",
            "sees": "the sun setting on you\ndarkness spreading over the earth\nlanterns glowing in your sanctuary\nyour little world is full of light",
            "suggests": "your talent may not be recognized\nyour true worth may not be valued\nyou let many things pass\nbut you are not fooled\nkeep the flame burning\nkeep it safe\nthe darker it gets out there\nthe brighter it looks inside"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169c1"
        },
        "number": 37,
        "name": "The Family",
        "nameChinese": "家人",
        "changing": [
            {
                "line": 0,
                "meaning": "Domestic harmony depends on order. When you establish clear boundaries from the outset, you can avoid most of the rows. If everything is vague and undefined, look out!",
                "_id": {
                    "$oid": "5797be774703d060025169c8"
                }
            },
            {
                "line": 1,
                "meaning": "Nurture the family and provide healthy nourishment. What's good for them is also good for you.",
                "_id": {
                    "$oid": "5797be774703d060025169c7"
                }
            },
            {
                "line": 2,
                "meaning": "Family rows \u2014 we all have them. Try not to overreact or be too severe. At the same time, a total lack of discipline will end in tears. Find the happy medium.",
                "_id": {
                    "$oid": "5797be774703d060025169c6"
                }
            },
            {
                "line": 3,
                "meaning": "How fortunate is the family where a good partner is happy at home. If you have such a treasure, you will want to protect it.",
                "_id": {
                    "$oid": "5797be774703d060025169c5"
                }
            },
            {
                "line": 4,
                "meaning": "There's no need for fear in a family ruled by love.",
                "_id": {
                    "$oid": "5797be774703d060025169c4"
                }
            },
            {
                "line": 5,
                "meaning": "Work rules (especially if you work at home). The breadwinners of the family must be given the time and space they need to do their jobs well.",
                "_id": {
                    "$oid": "5797be774703d060025169c3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169c2"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            6,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "Thank God for the people who embrace and support you through thick and thin.",
            "sees": "you like a blazing fire\nradiating good cheer\nfilling the house with warmth\nmaking it feel like home",
            "suggests": "home is where the hearth is\nto keep the fire dancing\nfeed the flame\ngive it room to breathe\ngather 'round the familiar tree\nwith your tribe\nwhere you know you belong\npartaking of your good food\ndrinking your good health\ngiving thanks\nfor your refuge from the world"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169c9"
        },
        "number": 38,
        "name": "Opposition",
        "nameChinese": "睽",
        "changing": [
            {
                "line": 0,
                "meaning": "A change for the better. Instead of chasing the object of your desire, let it come to you.",
                "_id": {
                    "$oid": "5797be774703d060025169d0"
                }
            },
            {
                "line": 1,
                "meaning": "Serendipity at work. A chance encounter leads to resolution of a misunderstanding.",
                "_id": {
                    "$oid": "5797be774703d060025169cf"
                }
            },
            {
                "line": 2,
                "meaning": "All too often it seems as though circumstances and people are conspiring agains you. You're checked, hindered, and insulted. Yes, it's annoying and frustrating, but don't let it get to you. Persist. It will turn out well in the end.",
                "_id": {
                    "$oid": "5797be774703d060025169ce"
                }
            },
            {
                "line": 3,
                "meaning": "Feeling isolated? At odds with the world? Out in the cold? At times like these, one good friend can make all the difference. Two good friends \u2014 even better!",
                "_id": {
                    "$oid": "5797be774703d060025169cd"
                }
            },
            {
                "line": 4,
                "meaning": "Strange days have found you. When a friend is prepared to put up with all this for your sake, you have a friend indeed.",
                "_id": {
                    "$oid": "5797be774703d060025169cc"
                }
            },
            {
                "line": 5,
                "meaning": "No one falls out harder than 'best friends.' We've all been there. In the end, if you can remember the beginning of the friendship, you will want to be reconciled.",
                "_id": {
                    "$oid": "5797be774703d060025169cb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169ca"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            7,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "Our differences can be a cause of conflict or the elements of a dance. When opposites unite in harmony, what a joy.",
            "sees": "a flame on the lake\ndancing on the surface of the water\nbeautiful and strange",
            "suggests": "opposing viewpoints\ndifferent ways of seeing\nwalking contradictions\nsuch fascination you hold for some people\nand they have a hold over you\nwhile it is true opposites attract\nno matter how much you are attracted\nhow deeply you get involved\nretain your individuality\nat all costs\ngive each other space\nthe flame must stay above the water\nor it will be extinguished"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169d1"
        },
        "number": 39,
        "name": "Obstruction",
        "nameChinese": "蹇",
        "changing": [
            {
                "line": 0,
                "meaning": "When confronted by an obstacle, stop and consider. What's the easiest way to remove it? There's always an easy way.",
                "_id": {
                    "$oid": "5797be774703d060025169d8"
                }
            },
            {
                "line": 1,
                "meaning": "It's not your fault that so many obstacles have arisen, but it is your duty to remove them. Just do it.",
                "_id": {
                    "$oid": "5797be774703d060025169d7"
                }
            },
            {
                "line": 2,
                "meaning": "Sometimes the obstacles are insurmountable, the dangers more than you can safely handle. At such a time, there's no disgrace in turning back. Your people will be glad if you do.",
                "_id": {
                    "$oid": "5797be774703d060025169d6"
                }
            },
            {
                "line": 3,
                "meaning": "Don't take on more than you can handle. If you have friends and allies, now is the time to call on them. Together, you can overcome the obstacles.",
                "_id": {
                    "$oid": "5797be774703d060025169d5"
                }
            },
            {
                "line": 4,
                "meaning": "Isn't it amazing that when you most need them, friends have a way of showing up or getting in touch?",
                "_id": {
                    "$oid": "5797be774703d060025169d4"
                }
            },
            {
                "line": 5,
                "meaning": "It may not be your problem, and you're entitled to walk away. Bot you have the experience and the know-how to solve it. Working with good people to put things right is indeed satisfying.",
                "_id": {
                    "$oid": "5797be774703d060025169d3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169d2"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            3,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "Adversity is a teacher, and the difficulties you face are the lessons to be learned. At times like this, you can use all the help you can get.",
            "sees": "water on the mountain\na difficult situation\ndangers all around\nobstacles dead ahead",
            "suggests": "greet difficulty with respect\nas you would a teacher\nwho demands your ingenuity\nsharpens your focus\nstrengthens your resolve\nenjoy the process of discovering\nsolutions to the problems\naccept the help of friends\npersevere\ndeep in your heart you know\nyou will overcome"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169d9"
        },
        "number": 40,
        "name": "Deliverance",
        "nameChinese": "解",
        "changing": [
            {
                "line": 0,
                "meaning": "Well done \u2014 you've delivered. It's a success. Take a moment to enjoy the peace and quiet, the calm after the storm.",
                "_id": {
                    "$oid": "5797be774703d060025169e0"
                }
            },
            {
                "line": 1,
                "meaning": "Your aim is true. You deserve the recognition, so savor the rewards.",
                "_id": {
                    "$oid": "5797be774703d060025169df"
                }
            },
            {
                "line": 2,
                "meaning": "Enjoying your success? Tempted to flaunt your recently acquired wealth? Don't set yourself up for others to rip you off.",
                "_id": {
                    "$oid": "5797be774703d060025169de"
                }
            },
            {
                "line": 3,
                "meaning": "When great deeds are called for, you need good people you can depend on. Passengers and hangers-on just get in the way. Lose the losers and win the day.",
                "_id": {
                    "$oid": "5797be774703d060025169dd"
                }
            },
            {
                "line": 4,
                "meaning": "Deliver yourself. When people realize you are in earnest, that you are undeniable, they will yield.",
                "_id": {
                    "$oid": "5797be774703d060025169dc"
                }
            },
            {
                "line": 5,
                "meaning": "Your bow is strong. Your arrow is straight and its point is sharp. The target is clear. If you have put in the practice, how can you miss?",
                "_id": {
                    "$oid": "5797be774703d060025169db"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169da"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            2,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "What a relief! Like a thundercloud, pregnant with pent-up moisture, you can now release your cargo of rain.",
            "sees": "you like a downpour of rain\na sweet summer storm\nclearing the air\nrelieving the tension",
            "suggests": "the time for agonizing is over\nwhether it's a package or a promise\na project or an invitation\nit's time to deliver\nwhen it comes to delivering judgments\ntemper justice with mercy\ndon't dwell on mistakes\nforgive failings\nas thunder fades away\nas the rain washes all clean"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169e1"
        },
        "number": 41,
        "name": "Decrease",
        "nameChinese": "損",
        "changing": [
            {
                "line": 0,
                "meaning": "You are ahead of schedule. You can take off early, or you can help others. The choice is yours.",
                "_id": {
                    "$oid": "5797be774703d060025169e8"
                }
            },
            {
                "line": 1,
                "meaning": "If you can be of service, good. But don't waste your valuable time helping people who don't appreciate it.",
                "_id": {
                    "$oid": "5797be774703d060025169e7"
                }
            },
            {
                "line": 2,
                "meaning": "Two's company, three's a crowd.",
                "_id": {
                    "$oid": "5797be774703d060025169e6"
                }
            },
            {
                "line": 3,
                "meaning": "Sort yourself out. If you make a sincere effort to overcome bad habits, you'll be amazed how people will support you.",
                "_id": {
                    "$oid": "5797be774703d060025169e5"
                }
            },
            {
                "line": 4,
                "meaning": "All the signs are favorable. You're in luck.",
                "_id": {
                    "$oid": "5797be774703d060025169e4"
                }
            },
            {
                "line": 5,
                "meaning": "Your work is rewarded with good fortune. Now you can afford help, but maybe you simply prefer working alone.",
                "_id": {
                    "$oid": "5797be774703d060025169e3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169e2"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            7,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "Hard times can bring out the best in you. With fewer distractions on the outside, you can discover the wealth within.",
            "sees": "a lake in the foothills\na cool still place\nideal for reflection",
            "suggests": "less is more\nwhen times are hard\nresources are low\ngoing without on the outside\ncan motivate you to go within\nwhere your true riches\nare waiting to be discovered\nat the same time\na decrease in negativity\nis a definite plus"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169e9"
        },
        "number": 42,
        "name": "Increase",
        "nameChinese": "益",
        "changing": [
            {
                "line": 0,
                "meaning": "The help you receive from above puts you in a position to achieve great things \u2014things you've always wanted to do. Lucky.",
                "_id": {
                    "$oid": "5797be774703d060025169f0"
                }
            },
            {
                "line": 1,
                "meaning": "Someone up there really does love you. You are attracting all kinds of positive energy into your life, making you virtually unstoppable. Use this increase for the benefit of one and all, then your lucky streak can go on and on.",
                "_id": {
                    "$oid": "5797be774703d060025169ef"
                }
            },
            {
                "line": 2,
                "meaning": "Even accidents seem to help your case. Be sincere and you'll come to no harm. Your influence is recognized at the highest levels.",
                "_id": {
                    "$oid": "5797be774703d060025169ee"
                }
            },
            {
                "line": 3,
                "meaning": "Keep to the middle path. Don't be swayed by extremes. Make sure that any increase in power or wealth is distributed fairly.",
                "_id": {
                    "$oid": "5797be774703d060025169ed"
                }
            },
            {
                "line": 4,
                "meaning": "If your heart is in the right place, you don't need to make a fuss. This is your good fortune: Your sincerity will be recognized.",
                "_id": {
                    "$oid": "5797be774703d060025169ec"
                }
            },
            {
                "line": 5,
                "meaning": "When you keep your good fortune to yourself, you invite trouble. By enriching others, you enrich yourself.",
                "_id": {
                    "$oid": "5797be774703d060025169eb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169ea"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            1,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "What an opportunity! You have a real chance to improve your lot in life. Seize the moment while you can.",
            "sees": "wind and thunder\nmovement and change\na season of growth\na time for new developments",
            "suggests": "increasing your influence in the world\nmay require a change of character\nwhere you see people doing good\nemulate them\nwhere you can recognize your own faults\nwork on getting rid of them\ndo something for the community\nand they will do something for you\nthis time of increase will not last\nso make the most of it"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169f1"
        },
        "number": 43,
        "name": "Breakthrough",
        "nameChinese": "夬",
        "changing": [
            {
                "line": 0,
                "meaning": "These are big steps you are about to take. Are you sure you're up to it? If not, you could take a fall.",
                "_id": {
                    "$oid": "5797be774703d060025169f8"
                }
            },
            {
                "line": 1,
                "meaning": "You get a wake-up call. Are you ready for this? Have you prepared? Guard yourself against the dangers and don't be afraid.",
                "_id": {
                    "$oid": "5797be774703d060025169f7"
                }
            },
            {
                "line": 2,
                "meaning": "After the breakthrough, people may turn against you. They may find you guilty by association when you are in fact innocent. Make no mistake: You have the resolve and the strength to walk through the storm and emerge unscathed.",
                "_id": {
                    "$oid": "5797be774703d060025169f6"
                }
            },
            {
                "line": 3,
                "meaning": "Are you in such a rush to attain your goal that you ignore the obvious pitfalls? Stubbornly charging ahead is going to backfire on you. But if you refuse to listen, what's the use of good advice?",
                "_id": {
                    "$oid": "5797be774703d060025169f5"
                }
            },
            {
                "line": 4,
                "meaning": "Time for some serious weeding in the garden. If you just pull off the tops, those weeds will come right back. Eradicate them and the plants you love will have room to grow.",
                "_id": {
                    "$oid": "5797be774703d060025169f4"
                }
            },
            {
                "line": 5,
                "meaning": "You've made it: your breakthrough. This is when complacency can set in and undo all your good work. Don't let it.",
                "_id": {
                    "$oid": "5797be774703d060025169f3"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169f2"
                }
            }
        ],
        "sequence": [
            1,
            1,
            1,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            0,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa1"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "Fortunes favor the brave. This is the breakthrough you've been waiting for and working toward.",
            "sees": "a heavenly lake\na gathering of forces\nan accumulation of energies\nready to explode",
            "suggests": "when people have been holding you back\nand circumstances conspiring against you\nyou can turn it around\nthrough bold and decisive action\nbreak through\nonce you've made it to the other side\nshare the rewards with your supporters\nkeep the momentum going\nonly remember\nmaking a breakthrough\nwill expose you to new dangers\nso keep your eyes open"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d060025169f9"
        },
        "number": 44,
        "name": "Coming to Meet",
        "nameChinese": "姤",
        "changing": [
            {
                "line": 0,
                "meaning": "When you detect that a negative person is trying to undermine the meeting, immediately check it. Even the young and inexperienced with little power or responsibility can cause major damage if left to run wild. Nip it in the bud.",
                "_id": {
                    "$oid": "5797be774703d06002516a00"
                }
            },
            {
                "line": 1,
                "meaning": "You have detected a negative influence at work. You can control the damage by containing it.",
                "_id": {
                    "$oid": "5797be774703d060025169ff"
                }
            },
            {
                "line": 2,
                "meaning": "Some days, even the simplest steps are tricky. Be mindful of the dangers and proceed with caution.",
                "_id": {
                    "$oid": "5797be774703d060025169fe"
                }
            },
            {
                "line": 3,
                "meaning": "You can't afford to alienate anyone at this stage. You never know who is going to turn out to be an ally just when you need one.",
                "_id": {
                    "$oid": "5797be774703d060025169fd"
                }
            },
            {
                "line": 4,
                "meaning": "The confidence you have in yourself inspires confidence in others. IN turn, the confidence you have in them is rewarded with their enthusiastic cooperation.",
                "_id": {
                    "$oid": "5797be774703d060025169fc"
                }
            },
            {
                "line": 5,
                "meaning": "If you've had enough and want to enjoy some peace and quiet, just ask everybody to go away and leave you alone. You're entitled.",
                "_id": {
                    "$oid": "5797be774703d060025169fb"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d060025169fa"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            1,
            1,
            1
        ],
        "trigramsOrder": [
            5,
            0
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa1"
            }
        },
        "book": {
            "says": "Meeting people halfway, so both parties benefit, is a good thing. But be aware of people who might try to take advantage.",
            "sees": "you like the winds of heaven\ncelestial influences\ninspire you to communicate\nyour vision to the people",
            "suggests": "when the benign influence of heaven\nmeets the receptive earth\nall creatures prosper\nwhen people are drawn together\nto make the world a better place\ntransparency is key\nany hidden agenda will bring harm\nbe prepared to compromise\nbut come to the meeting\nwith a clear vision\nof what you are trying to achieve\nwatch out for weaker elements\nwho appear harmless\nyet could undermine all your good work"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a01"
        },
        "number": 45,
        "name": "Gathering Together",
        "nameChinese": "萃",
        "changing": [
            {
                "line": 0,
                "meaning": "At first you're not so sure about this gathering. when you connect with a friend, there is laughter. Now you're glad you came.",
                "_id": {
                    "$oid": "5797be774703d06002516a08"
                }
            },
            {
                "line": 1,
                "meaning": "Follow the feeling. There are unexpected good times to be had here. Remember to bring something to the party.",
                "_id": {
                    "$oid": "5797be774703d06002516a07"
                }
            },
            {
                "line": 2,
                "meaning": "Alone in a crowd? Feeling like the odd one out? Hang in there. Wait for a sympathetic soul to show. Help is on the way.",
                "_id": {
                    "$oid": "5797be774703d06002516a06"
                }
            },
            {
                "line": 3,
                "meaning": "It's a great party. Everything is as it should be.",
                "_id": {
                    "$oid": "5797be774703d06002516a05"
                }
            },
            {
                "line": 4,
                "meaning": "You have your rightful place in this gathering and your reasons for being there. If the others are still sitting on the fence, your commitment will eventually bring them round.",
                "_id": {
                    "$oid": "5797be774703d06002516a04"
                }
            },
            {
                "line": 5,
                "meaning": "When people try to get together, misunderstandings all too often get in the way. So don't be afraid to express your true feelings. A little honesty goes a long way.",
                "_id": {
                    "$oid": "5797be774703d06002516a03"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a02"
                }
            }
        ],
        "sequence": [
            0,
            0,
            0,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            4,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa5"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "Whether it's a festival or a ceremony, a concert or a congress, a collaboration or a movement, getting together with like-minded individuals renew your sense of purpose \u2014 and it's fun!",
            "sees": "you drawn to a gathering\nof people like you\nunited by a common cause\ninspired by a shared vision",
            "suggests": "bring something to the table\noffering your talents\nwith sincerity\nwill bring success\nas your influence grows\nyou may encounter resistance\nwatch out for slings and arrows\nhold on to the shield of hope\nwear the armor of patience\nsharpen your sword of truth\nput on a good show"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a09"
        },
        "number": 46,
        "name": "Pushing Upward",
        "nameChinese": "升",
        "changing": [
            {
                "line": 0,
                "meaning": "Vigorously pushing onward and upward with confidence is a winning combination.",
                "_id": {
                    "$oid": "5797be774703d06002516a10"
                }
            },
            {
                "line": 1,
                "meaning": "A humble offering made with sincerity has more value than the most lavish gift offered with none. It is the thought that counts.",
                "_id": {
                    "$oid": "5797be774703d06002516a0f"
                }
            },
            {
                "line": 2,
                "meaning": "When the timing is right, growth is easy. Success breeds success.",
                "_id": {
                    "$oid": "5797be774703d06002516a0e"
                }
            },
            {
                "line": 3,
                "meaning": "You're on. You're up!",
                "_id": {
                    "$oid": "5797be774703d06002516a0d"
                }
            },
            {
                "line": 4,
                "meaning": "Even the most successful people have to walk the walk. Keep your focus. Onward and upward \u2014 one step at a time.",
                "_id": {
                    "$oid": "5797be774703d06002516a0c"
                }
            },
            {
                "line": 5,
                "meaning": "Progress for its own sake is not necessarily taking you where you want to go. Blindly pushing onward without a clear direction may well lead to exhaustion.",
                "_id": {
                    "$oid": "5797be774703d06002516a0b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a0a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            0,
            0,
            0
        ],
        "trigramsOrder": [
            5,
            4
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa5"
            }
        },
        "book": {
            "says": "The passion you have for the things you do enables you to push upward and reach for the stars.",
            "sees": "you like a tree\ndrawing strength\nfrom your roots\nirresistibly growing\ntoward the light",
            "suggests": "self-confidence makes all the difference\nthe tree of your life\nis rooted in good earth\nfull of nutrients and moisture\nyour branches are supple and strong\nthe leaves know what to do with sunlight\nso grow for it\nmake the effort to reach upward\nand attain your goals\nthe incredible beauty of this treeL\nit just goes on growing"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a11"
        },
        "number": 47,
        "name": "Oppression",
        "nameChinese": "困",
        "changing": [
            {
                "line": 0,
                "meaning": "There are times when you are really up against it. Don't give in to the urge to be melancholy or depressed. You are a warrior, and the warrior must fight the good fight.",
                "_id": {
                    "$oid": "5797be774703d06002516a18"
                }
            },
            {
                "line": 1,
                "meaning": "Hang in there. Help is on the way. When you feel things getting on top of you, work is the worship in which your prayers for release are answered.",
                "_id": {
                    "$oid": "5797be774703d06002516a17"
                }
            },
            {
                "line": 2,
                "meaning": "You bang your head against the wall and blame the wall for your head hurting. You lean on things that cannot support you, and you're surprised when you take a tumble.",
                "_id": {
                    "$oid": "5797be774703d06002516a16"
                }
            },
            {
                "line": 3,
                "meaning": "You're caught up in an affluent society where you find the atmosphere oppressive. Embarrassment leads to withdrawal. Returning to your simpler way of life is a relief.",
                "_id": {
                    "$oid": "5797be774703d06002516a15"
                }
            },
            {
                "line": 4,
                "meaning": "You're not getting the help you need form the people out there who are supposed to be on your side. All you can do is quietly persevere, deriving strength from turning within to your God. Slowly but surely, joy returns.",
                "_id": {
                    "$oid": "5797be774703d06002516a14"
                }
            },
            {
                "line": 5,
                "meaning": "You're still feeling shaky and uncertain about making your next move, still hurting from the last time it all went wrong. But things change. Let go of the past, hold on the the present, and move on.",
                "_id": {
                    "$oid": "5797be774703d06002516a13"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a12"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            2,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "When your best efforts are thwarted and your counsel rejected, it's easy to be demoralized. Get some rest and return to the frat when you are refreshed.",
            "sees": "you like a dried-up lake\nyour resources depleted\nyour energy exhausted\nin need of replenishment",
            "suggests": "events seem to conspire against you\nobstacles and setbacks confront you\npeople try to undermine you\nbut don't give up\nif you can greet adversity with a smile\nyou will gain respect\nif you can draw strength from distress\nyou will be revitalized\ntry to get a good night's sleep\nthings will look better in the morning"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a19"
        },
        "number": 48,
        "name": "The Well",
        "nameChinese": "井",
        "changing": [
            {
                "line": 0,
                "meaning": "Nobody want to drink from a muddy well. If your water is dirty, who will come and drink?",
                "_id": {
                    "$oid": "5797be774703d06002516a20"
                }
            },
            {
                "line": 1,
                "meaning": "The well is fit only for fish and the bucket is broken. No wonder nobody comes to drink from your well.",
                "_id": {
                    "$oid": "5797be774703d06002516a1f"
                }
            },
            {
                "line": 2,
                "meaning": "The well is fine, full of pure water, but nobody seems to know it's there. It would be good to let people know.",
                "_id": {
                    "$oid": "5797be774703d06002516a1e"
                }
            },
            {
                "line": 3,
                "meaning": "It's time to repair the well. The long-term advantage outweighs the short-term inconvenience.",
                "_id": {
                    "$oid": "5797be774703d06002516a1d"
                }
            },
            {
                "line": 4,
                "meaning": "Clear, cold water bubbles up from a spring within. You are inspired. People who come and drink from your well are truly refreshed.",
                "_id": {
                    "$oid": "5797be774703d06002516a1c"
                }
            },
            {
                "line": 5,
                "meaning": "The well has an inexhaustible supply of pure water. There's plenty for all and everyone is welcome. The more people draw on your experience, the more you are replenished.",
                "_id": {
                    "$oid": "5797be774703d06002516a1b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a1a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            5,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "As a wellspring of kindness, you play a special role in your community. But only if you keep the water pure.",
            "sees": "you like a well of pure water\na valuable resource\ninevitably attracting\nthe thirsty to come and drink",
            "suggests": "fashions come and go\nsocieties change\neconomies fluctuate\nbut the need for water remains the same\njust as people gather round a well\na kind person always attracts supporters\nbut the well must be kept in good order\nif the community is going to benefit\npreserve the integrity of your well\nshare the wealth within\nyou can afford to be kind\nwater is kindness"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a21"
        },
        "number": 49,
        "name": "Revolution",
        "nameChinese": "革",
        "changing": [
            {
                "line": 0,
                "meaning": "Before you embark on any major changes, stop. Take a good look before you leap into the unknown.",
                "_id": {
                    "$oid": "5797be774703d06002516a28"
                }
            },
            {
                "line": 1,
                "meaning": "It's your day, your revolution. Be aware of what is likely to happen as a result of the changes you intend to make. Get ready for the consequences of your actions.",
                "_id": {
                    "$oid": "5797be774703d06002516a27"
                }
            },
            {
                "line": 2,
                "meaning": "In times of great changes, take extra care. Try, try, and try again. Three is the magic number.",
                "_id": {
                    "$oid": "5797be774703d06002516a26"
                }
            },
            {
                "line": 3,
                "meaning": "When your own doubts disappear, people start to believe in you again. Now you can set about establishing a better way of doing things.",
                "_id": {
                    "$oid": "5797be774703d06002516a25"
                }
            },
            {
                "line": 4,
                "meaning": "You're like a tiger, burning bright. The cause is just, and you make it clear why people should lend their support.",
                "_id": {
                    "$oid": "5797be774703d06002516a24"
                }
            },
            {
                "line": 5,
                "meaning": "Don't give up, no matter what. Once you've set your changes in motion, persevere. It's your initiative. You can't expect others, especially those with less at stake, to take it as seriously as you do.",
                "_id": {
                    "$oid": "5797be774703d06002516a23"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a22"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            6,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "Change is good. By recognizing and acknowledging the cyclical nature of life, by going with the flow, you can enjoy success.",
            "sees": "you like a fire in the lake\ntalk about a revolution\nas the seasons turn\ncomes a time of radical changes",
            "suggests": "change is inevitable\nsummer yields to autumn\nwinter dissolves into spring\nan animal molts\na snake sheds its skin\na spider renews its skeleton\nyou too are bound to change\nit's all in the timing\nwhen the time is right\nyou can change your world\nwhen people believe in you\nit really is your day"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a29"
        },
        "number": 50,
        "name": "The Cauldron",
        "nameChinese": "鼎",
        "changing": [
            {
                "line": 0,
                "meaning": "Turn that cauldron upside down. When the stew has turned or the soup is spoiled, get rid of it. Clean the cauldron thoroughly. Start fresh.",
                "_id": {
                    "$oid": "5797be774703d06002516a30"
                }
            },
            {
                "line": 1,
                "meaning": "Your cauldron is filled with delicious food. This may make some people envious, but it doesn't bother you. You're enjoying the nourishment and happy to share. You have plenty.",
                "_id": {
                    "$oid": "5797be774703d06002516a2f"
                }
            },
            {
                "line": 2,
                "meaning": "Don't take this the wrong way, but something seems wrong with your handles. If people have difficulty grasping your cauldron, you defeat your own purpose. Turn this lack of recognition around: make it easy for people to get hold of you.",
                "_id": {
                    "$oid": "5797be774703d06002516a2e"
                }
            },
            {
                "line": 3,
                "meaning": "Confucius said, \"Weak character coupled with honored place, little knowledge with big plans, limited powers with heavy responsibility, will seldom escape disaster.\"",
                "_id": {
                    "$oid": "5797be774703d06002516a2d"
                }
            },
            {
                "line": 4,
                "meaning": "The cauldron has handles of gold. Working with it is a privilege and a pleasure that your can really feel. Lucky you.",
                "_id": {
                    "$oid": "5797be774703d06002516a2c"
                }
            },
            {
                "line": 5,
                "meaning": "The cauldron has rings of jade. Jade represents something truly precious. You are blessed. When fortune smiles on you, smile back.",
                "_id": {
                    "$oid": "5797be774703d06002516a2b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a2a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            5,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "Now you're cooking! Like a ceremonial vessel that serves to nourish the people, you play a central role in the tribe.",
            "sees": "you like a cauldron\nfill of nourishment\nyou're not too high\nyou're not too low\n your position is perfect for you",
            "suggests": "contemplate the cauldron\nthe cooking vessel at the heart\nof ancient Chinese society\nan object of great beauty\nserving the practical purpose of cooking\nwhile standing as a symbol\na sacred vessel in which to offer\nthe fruits of your labors to the gods\nwhat you offer to the people of the world\nwith sincerity and reverence\nwill bring you good fortune and success"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a31"
        },
        "number": 51,
        "name": "Arousing Thunder",
        "nameChinese": "震",
        "changing": [
            {
                "line": 0,
                "meaning": "One moment, you're in a state of shock. The next, you are laughing yourself silly. Now you can relax.",
                "_id": {
                    "$oid": "5797be774703d06002516a38"
                }
            },
            {
                "line": 1,
                "meaning": "Wipe-out. You've been hit by a storm. The thing to do is accept your losses and start again. It will all come back to you.",
                "_id": {
                    "$oid": "5797be774703d06002516a37"
                }
            },
            {
                "line": 2,
                "meaning": "A shock to the system can be upsetting, but if it spurs you to take action, it's a good thing.",
                "_id": {
                    "$oid": "5797be774703d06002516a36"
                }
            },
            {
                "line": 3,
                "meaning": "You're bogged down in a quagmire, the legacy of recent storms. You either get help or you have to be patient.",
                "_id": {
                    "$oid": "5797be774703d06002516a35"
                }
            },
            {
                "line": 4,
                "meaning": "The impact of the storm spreads far and wide. It's a dangerous situation. Stay calm, but be prepared for damages.",
                "_id": {
                    "$oid": "5797be774703d06002516a34"
                }
            },
            {
                "line": 5,
                "meaning": "When disaster strikes the person right next to you, it has a dramatic effect on you. A shock like this can provoke feelings of gratitude, making you realize how lucky you are.",
                "_id": {
                    "$oid": "5797be774703d06002516a33"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a32"
                }
            }
        ],
        "sequence": [
            1,
            0,
            0,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            1,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa2"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "Oh my God! Sometimes, a shock to the system will awaken you to the reality of your situation.",
            "sees": "you being hit by a bolt from the blue\nsome kind of wake-up call\nmaking you jump\nthough not necessarily for joy",
            "suggests": "a major thunderstorm is awesome\nin the true sense of the word\nit awakens feelings of fear and wonder\nof reverence and delight\nif you can keep your composure\nin the center of the storm\nheightened perceptions\nilluminate the state you are in\nwith such clarity\nit can come as a shock\nfacing your problems bring relief\nwith relief comes laughter and jollity"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a39"
        },
        "number": 52,
        "name": "Keeping Still Mountain",
        "nameChinese": "艮",
        "changing": [
            {
                "line": 0,
                "meaning": "Begin with the toes and work your way up. Simply by keeping still, you can get back in touch with your inner sense.",
                "_id": {
                    "$oid": "5797be774703d06002516a40"
                }
            },
            {
                "line": 1,
                "meaning": "You are swept along by strong currents. If you resist, your limbs are going to ache.",
                "_id": {
                    "$oid": "5797be774703d06002516a3f"
                }
            },
            {
                "line": 2,
                "meaning": "Try not to try too hard. Drop the shoulders. When you can relax into your meditation, a natural feeling of calm will arise.",
                "_id": {
                    "$oid": "5797be774703d06002516a3e"
                }
            },
            {
                "line": 3,
                "meaning": "Keep the torso still and the spine in line. The heart can start to heal.",
                "_id": {
                    "$oid": "5797be774703d06002516a3d"
                }
            },
            {
                "line": 4,
                "meaning": "Keep your own counsel. As the confusing and conflicting opinions of other people die down, you find your answers. You know what to do.",
                "_id": {
                    "$oid": "5797be774703d06002516a3c"
                }
            },
            {
                "line": 5,
                "meaning": "You have achieved stillness. You feel much better. By keeping still and trusting your own feelings, you find the solutions, not just for your immediate situation but for your whole life. The power of keeping still is might indeed. Peace. Good fortune.",
                "_id": {
                    "$oid": "5797be774703d06002516a3b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a3a"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            0,
            0,
            1
        ],
        "trigramsOrder": [
            3,
            3
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa4"
            }
        },
        "book": {
            "says": "Take some time: Forget your anxiety about the future, let go of your anguish about the past, focus on the moment called now.",
            "sees": "you like a sacred mountain\nserene\nrising above the conflicts\nthe confusions of your world\nsolid as a rock",
            "suggests": "your restless heart\nneeds to be still\nfor you to feel tranquil\nsafe at home\nfar from the madding crowd\nfind a peaceful spot\nkeeping the spine straight\nbreathe\nas the conflicting opinions in your head\nbegin to subside\nyour clarity will arise\nthe sacred mountain within"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a41"
        },
        "number": 53,
        "name": "Development",
        "nameChinese": "漸",
        "changing": [
            {
                "line": 0,
                "meaning": "If you're starting something new, you can expect to get some resistance. But don't give up. You are definitely making progress.",
                "_id": {
                    "$oid": "5797be774703d06002516a48"
                }
            },
            {
                "line": 1,
                "meaning": "You're making good progress and have completed the first stage. A little celebration is in order.",
                "_id": {
                    "$oid": "5797be774703d06002516a47"
                }
            },
            {
                "line": 2,
                "meaning": "Gradual progress in the right direction is infinitely preferable to huge strides in the wrong direction. Slowly but surely, find the way that will take you where you want to go, and stick to it.",
                "_id": {
                    "$oid": "5797be774703d06002516a46"
                }
            },
            {
                "line": 3,
                "meaning": "As you progress toward you distant goal, there will come times of danger and uncertainty. Even if it's only temporary, a safe place to land is a blessing. Make the most of it.",
                "_id": {
                    "$oid": "5797be774703d06002516a45"
                }
            },
            {
                "line": 4,
                "meaning": "Your progress has taken you to an elevated position. It's easy to become isolated and misunderstood. Don't let it get to you. You will be vindicated in the end.",
                "_id": {
                    "$oid": "5797be774703d06002516a44"
                }
            },
            {
                "line": 5,
                "meaning": "Your progress is complete. You have attained your goal. It's a time for celebration. More than a festive occasion, this is an affirmation of the circle of life and your place in it. What a beautiful dance it is.",
                "_id": {
                    "$oid": "5797be774703d06002516a43"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a42"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            3,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "Take a step back and look at the big picture. How you have grown, and how much you still have to grow!",
            "sees": "you like a tree on a hill\nslowly developing roots\nsurely spreading branches\nyou stand tall and dignified\nan example to us all",
            "suggests": "you\ntake your time\nlet nature do the work\nlook: how kind is the tree\nit spreads its branches as shade\nprovides shelter and nourishment\ngives freely of its bounty\nremains true to its nature\nin every season\nso calm\nso right\nso you\nletting nature take its course brings success"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a49"
        },
        "number": 54,
        "name": "Marrying Maiden",
        "nameChinese": "歸妹",
        "changing": [
            {
                "line": 0,
                "meaning": "You've been crippled by relationships in the past. Now, with this new love, you find you can walk again.",
                "_id": {
                    "$oid": "5797be774703d06002516a50"
                }
            },
            {
                "line": 1,
                "meaning": "In the country of the blind, the one-eyed man is king. In any relationship, the one who can see clearly will be the one who calls the shots.",
                "_id": {
                    "$oid": "5797be774703d06002516a4f"
                }
            },
            {
                "line": 2,
                "meaning": "Are you a slave of your desires? Are you a victim of your passions? If the answer is yes, you're asking for trouble and you'll probably get it.",
                "_id": {
                    "$oid": "5797be774703d06002516a4e"
                }
            },
            {
                "line": 3,
                "meaning": "Give your love space to grow. Allow it time to blossom.",
                "_id": {
                    "$oid": "5797be774703d06002516a4d"
                }
            },
            {
                "line": 4,
                "meaning": "The moon that is nearly full is an exquisite sight. Natural modesty combined with great beauty is an irresistible combination.",
                "_id": {
                    "$oid": "5797be774703d06002516a4c"
                }
            },
            {
                "line": 5,
                "meaning": "Are you just going through the motions? If you're not feeling it, why are you doing it?",
                "_id": {
                    "$oid": "5797be774703d06002516a4b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a4a"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            7,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "Every day is a miracle waiting to happen, and falling in love means being free.",
            "sees": "you like a storm over a lake\nthe water stirred up\nyour equanimity disturbed\nby unusual emotions",
            "suggests": "life is full of surprises\nlike when you fall in love\nwith a person or a place\nwith a song or an idea\nwith a story or a prayer\ndefenses come down\nyour heart leaps within you\nthe tyranny of time is overthrown\nall of a sudden, nothing's a chore!\nlosing yourself in the other\nyou let yourself go\nonly to discover:\nthe ones you love the most\ndrive you the craziest"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a51"
        },
        "number": 55,
        "name": "Abundance",
        "nameChinese": "豐",
        "changing": [
            {
                "line": 0,
                "meaning": "Sometimes tow heads are better than one.",
                "_id": {
                    "$oid": "5797be774703d06002516a58"
                }
            },
            {
                "line": 1,
                "meaning": "Are you being eclipsed? Don't let it get to you. The nature of an eclipse is that it's short lived. You are going to shine again.",
                "_id": {
                    "$oid": "5797be774703d06002516a57"
                }
            },
            {
                "line": 2,
                "meaning": "Your brilliance is being obscured by your detractors. There's not a lot you can do about it for now. But it's bound to change.",
                "_id": {
                    "$oid": "5797be774703d06002516a56"
                }
            },
            {
                "line": 3,
                "meaning": "The eclipse is passing. The light is returning. Friends and allies are at hand. Be glad the livelong day.",
                "_id": {
                    "$oid": "5797be774703d06002516a55"
                }
            },
            {
                "line": 4,
                "meaning": "You know what to do \u2014 the way is clear. Your good fortune awaits you.",
                "_id": {
                    "$oid": "5797be774703d06002516a54"
                }
            },
            {
                "line": 5,
                "meaning": "You're getting what you want. But if you alienate family and friends in the process, you could end up feeling isolated.",
                "_id": {
                    "$oid": "5797be774703d06002516a53"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a52"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            6,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "It's time for you to share your wealth with the world and, in turn, reap your rewards.",
            "sees": "the sun at midday\nyou\nat the peak of your powers\nradiating pure energy\ncreating abundance",
            "suggests": "the zenith of the sun's progress\nis a fleeting moment in time\nthe abundance of summer cannot last\nbut don't be sad\nsadness doesn't suit you\nmake the most of this time\nrejoice in your good fortune\nshare your wealth with the world\nand the world will share its wealth with you"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a59"
        },
        "number": 56,
        "name": "The Wanderer",
        "nameChinese": "旅",
        "changing": [
            {
                "line": 0,
                "meaning": "The first rule of the road: Keep your cool. Don't play the fool. When people know you better, you can do your comedy routine. Maybe.",
                "_id": {
                    "$oid": "5797be774703d06002516a60"
                }
            },
            {
                "line": 1,
                "meaning": "An inn at the crossroads. You find a helper and friend. Lucky.",
                "_id": {
                    "$oid": "5797be774703d06002516a5f"
                }
            },
            {
                "line": 2,
                "meaning": "When a stranger in a strange land has no dependable friends or sympathetic contacts, the situation becomes dangerous. Take care out there.",
                "_id": {
                    "$oid": "5797be774703d06002516a5e"
                }
            },
            {
                "line": 3,
                "meaning": "You find shelter from the storm. But it doesn't mean you can lower your guard. You're still a stranger.",
                "_id": {
                    "$oid": "5797be774703d06002516a5d"
                }
            },
            {
                "line": 4,
                "meaning": "If you know how to play the game and can impress the locals with your ability, you can win friends and influence. The adventurer will often reap rich rewards away from home.",
                "_id": {
                    "$oid": "5797be774703d06002516a5c"
                }
            },
            {
                "line": 5,
                "meaning": "Don't get so carried away with your wanderings that you put your home at risk. A bird without a nest may well have cause to lament.",
                "_id": {
                    "$oid": "5797be774703d06002516a5b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a5a"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            3,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "Good fortune awaits the traveler who honors the law of the road: Gratitude is the attitude.",
            "sees": "a fire on the mountain\na light to guide you\non your travels\na beacon to give you hope",
            "suggests": "when you're a stranger in a strange land\na pleasant manner\na willingness to engage\nthe innocence of a child\nwill open many doors for you\nstay with good people\nand your journey will go well\ndo all you can\nto protect your state of mind\nbecause life is not without its hazards"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a61"
        },
        "number": 57,
        "name": "The Gentle Wind",
        "nameChinese": "巽",
        "changing": [
            {
                "line": 0,
                "meaning": "Drifting back and forth, a victim of indecision, will expose you to danger. No doubt about it: Decisive action is the order of the day.",
                "_id": {
                    "$oid": "5797be774703d06002516a68"
                }
            },
            {
                "line": 1,
                "meaning": "Are there skeletons in your closet? Monsters under your bed? When you stir up ghosts, some sort of exorcism may be required.",
                "_id": {
                    "$oid": "5797be774703d06002516a67"
                }
            },
            {
                "line": 2,
                "meaning": "You've contemplated this question enough already. If you don't act decisively soon, you'll just be assailed by fresh doubts.",
                "_id": {
                    "$oid": "5797be774703d06002516a66"
                }
            },
            {
                "line": 3,
                "meaning": "Your hunt is a great success. Three's a charm.",
                "_id": {
                    "$oid": "5797be774703d06002516a65"
                }
            },
            {
                "line": 4,
                "meaning": "As your plan unfolds, monitor your progress. Evaluate the results. Such painstaking work will increase your chances of a long-term success.",
                "_id": {
                    "$oid": "5797be774703d06002516a64"
                }
            },
            {
                "line": 5,
                "meaning": "Your investigations into the darker corners of your world have gone far enough. You put yourself at risk if you continue to probe. Come back to the light.",
                "_id": {
                    "$oid": "5797be774703d06002516a63"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a62"
                }
            }
        ],
        "sequence": [
            0,
            1,
            1,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            5,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa6"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "You penetrate every aspect of the situation, making sure things keep moving in the right direction.",
            "sees": "you like a summer breeze\nclearing your sky of clouds\nrevealing the serenity of the sky",
            "suggests": "be like the wind\nthat keeps blowing in the same direction\nyou don't bluster about\nconstantly changing your approach\nyou are consistent in your aims\nalways moving toward your goal\nyou communicate your purpose clearly\nconsistently\nthe effects are subtle yet irresistible\nyou just keep coming"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a69"
        },
        "number": 58,
        "name": "The Joyous Lake",
        "nameChinese": "兌",
        "changing": [
            {
                "line": 0,
                "meaning": "A contented heart. Pure joy. When you feel blessed, you are blessed.",
                "_id": {
                    "$oid": "5797be774703d06002516a70"
                }
            },
            {
                "line": 1,
                "meaning": "This joy is within you. You contain it. They can't take it away from you even if they try.",
                "_id": {
                    "$oid": "5797be774703d06002516a6f"
                }
            },
            {
                "line": 2,
                "meaning": "Yes, you can have too much of a good thing. Overindulgence leads to grief.",
                "_id": {
                    "$oid": "5797be774703d06002516a6e"
                }
            },
            {
                "line": 3,
                "meaning": "Chasing after pleasure all too often ends in pain. The day you realize this is a good day.",
                "_id": {
                    "$oid": "5797be774703d06002516a6d"
                }
            },
            {
                "line": 4,
                "meaning": "When you're enjoying yourself, your guard is down. Dangerous forces may be lurking. A little security is advisable.",
                "_id": {
                    "$oid": "5797be774703d06002516a6c"
                }
            },
            {
                "line": 5,
                "meaning": "There is the joy that springs from within. Indulge in it as much as you like. But be wary of the enjoyments that come from outside. Wanton indulgence in such pleasures will put you at risk.",
                "_id": {
                    "$oid": "5797be774703d06002516a6b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a6a"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            1,
            1,
            0
        ],
        "trigramsOrder": [
            7,
            7
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa8"
            }
        },
        "book": {
            "says": "Joy upon you! The happiness you feel allows you to be gentle and kind to those around you.",
            "sees": "two lakes\nfeeding into each other\npeople pooling their knowledge\nin a a friendly environment\nwhere learning is fun",
            "suggests": "dive in\ncreating delightful patterns\nreflections of the joy you feel inside\nfinding yourself in this beautiful place\nyou feel free to express yourself\nyour appreciation is shared by others\ntogether you discover ways\nto reflect the water's love of the sky"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a71"
        },
        "number": 59,
        "name": "Dispersion",
        "nameChinese": "渙",
        "changing": [
            {
                "line": 0,
                "meaning": "Nip it in the bud. When misunderstandings threaten the harmony of the group, stop them before they start.",
                "_id": {
                    "$oid": "5797be774703d06002516a78"
                }
            },
            {
                "line": 1,
                "meaning": "Feeling alienated? Are people getting you down? Hurry back to where you belong. Stay there until you feel yourself again.",
                "_id": {
                    "$oid": "5797be774703d06002516a77"
                }
            },
            {
                "line": 2,
                "meaning": "Get over yourself. Dive into the work. The harder you work, the better you feel.",
                "_id": {
                    "$oid": "5797be774703d06002516a76"
                }
            },
            {
                "line": 3,
                "meaning": "Don't follow the crowd. Dare to be different. When you work hard to make your unique contribution, it will be appreciated.",
                "_id": {
                    "$oid": "5797be774703d06002516a75"
                }
            },
            {
                "line": 4,
                "meaning": "You are the one to bring about the recovery. Your solution is just what is needed. Shout it out if you have to, but let the people know.",
                "_id": {
                    "$oid": "5797be774703d06002516a74"
                }
            },
            {
                "line": 5,
                "meaning": "You can't always fulfill the expectations of others, especially family members. Sometimes you have to do your own thing.",
                "_id": {
                    "$oid": "5797be774703d06002516a73"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a72"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            2,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "When pride and ego create barriers between people, your love can dissolve them \u2014 like ice melting in the sun.",
            "sees": "you like the warm winds of spring\nmelting the ice of winter\nreleasing liquid happiness\nback into your world",
            "suggests": "create a sanctuary\nwhere love holds sway\nin the gentle warmth of devotion\nthe hard edges dissolve\nthrough ceremony and celebration\nfeelings of awe awaken\nwhen the music plays\nthe spirit dances\nfellowship is restored\nyour intuitions fulfilled\nyou can end your winter of discontent\nsimply by embracing the content of spring"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a79"
        },
        "number": 60,
        "name": "Limitation",
        "nameChinese": "節",
        "changing": [
            {
                "line": 0,
                "meaning": "Don't expose yourself to unnecessary risks. In dangerous times, keeping a low profile is your safest strategy.",
                "_id": {
                    "$oid": "5797be774703d06002516a80"
                }
            },
            {
                "line": 1,
                "meaning": "Time to get out more. Let you light shine. It could be an illuminating experience for everyone, including you.",
                "_id": {
                    "$oid": "5797be774703d06002516a7f"
                }
            },
            {
                "line": 2,
                "meaning": "If you go on self-indulging, you'll be sorry. If you go on overindulging, you'll be very sorry.",
                "_id": {
                    "$oid": "5797be774703d06002516a7e"
                }
            },
            {
                "line": 3,
                "meaning": "Like the banks of a river, limitations help direct you. Accept them. Be content. Go with the flow.",
                "_id": {
                    "$oid": "5797be774703d06002516a7d"
                }
            },
            {
                "line": 4,
                "meaning": "Accepting limitations graciously makes life sweet. Where you lead, others will follow.",
                "_id": {
                    "$oid": "5797be774703d06002516a7c"
                }
            },
            {
                "line": 5,
                "meaning": "Don't be so stingy with yourself. Set limits on the limits. You know what they say: Moderation in all things, including moderation.",
                "_id": {
                    "$oid": "5797be774703d06002516a7b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a7a"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            7,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "With no boundaries, the lake would be a swamp; without its banks, the river could not flow.",
            "sees": "you like a body of water\nclearly defined\nself-contained\ncontent with your lot",
            "suggests": "establish your boundaries\nset limits\nwork out a budget and stick to it\nmake a line in the sand\nand do not cross this line\nby rising to the little challenges\nof living simply\nyou can enjoy the enormous satisfaction\nof simply living"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a81"
        },
        "number": 61,
        "name": "Inner Truth",
        "nameChinese": "中孚",
        "changing": [
            {
                "line": 0,
                "meaning": "The more you depend on the truth of others, the waker you become. Tap into what's true for you. When you get in touch with you own truth, anxiety goes away.",
                "_id": {
                    "$oid": "5797be774703d06002516a88"
                }
            },
            {
                "line": 1,
                "meaning": "Express your real feelings, sincerely and clearly, and your circle of influence will grow.",
                "_id": {
                    "$oid": "5797be774703d06002516a87"
                }
            },
            {
                "line": 2,
                "meaning": "You're riding a roller coaster of emotions. One moment you're on top of the world, the next you're in the abyss. All the fun of the affair!",
                "_id": {
                    "$oid": "5797be774703d06002516a86"
                }
            },
            {
                "line": 3,
                "meaning": "As the moon derives its radiance from the sun, your inner truth is intensified by the love and respect you feel for the teacher who inspires you.",
                "_id": {
                    "$oid": "5797be774703d06002516a85"
                }
            },
            {
                "line": 4,
                "meaning": "Your inner truth is the foundation of your relationships in the world. When you are true to yourself, you create a circle of strength around you.",
                "_id": {
                    "$oid": "5797be774703d06002516a84"
                }
            },
            {
                "line": 5,
                "meaning": "The rooster that crows at the break of day. It may make a good alarm call, but you need more than crowing to get you through the day.",
                "_id": {
                    "$oid": "5797be774703d06002516a83"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a82"
                }
            }
        ],
        "sequence": [
            1,
            1,
            0,
            0,
            1,
            1
        ],
        "trigramsOrder": [
            7,
            5
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa8"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa6"
            }
        },
        "book": {
            "says": "Free yourself from prejudice that your actions can be based on what you know to be true.",
            "sees": "a gentle wind blowing\nthe surface of the water\nmaking the invisible visible\ninciting waves of joy",
            "suggests": "hold on to your inner truth\nsometimes a good idea is an egg\nit needs warmth and protection\nit will come to life\nwhen the time is right\nwhen dealing with difficult people\nuse your intuitive ability\nto discover what will appeal to them\nabout the truth you're trying to get across\nwhen you stop judging so much\nand start understanding a little more\nyou can bring out the best\nin everyone \u2014 including yourself"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a89"
        },
        "number": 62,
        "name": "Small Preponderance",
        "nameChinese": "小過",
        "changing": [
            {
                "line": 0,
                "meaning": "What happens if a fledgling tries to fly before it's ready?",
                "_id": {
                    "$oid": "5797be774703d06002516a90"
                }
            },
            {
                "line": 1,
                "meaning": "Go through the appropriate channels. Sometimes you just cannot beat the system.",
                "_id": {
                    "$oid": "5797be774703d06002516a8f"
                }
            },
            {
                "line": 2,
                "meaning": "If you're not careful, someone is liable to sneak up on you and attack. Pay attention!",
                "_id": {
                    "$oid": "5797be774703d06002516a8e"
                }
            },
            {
                "line": 3,
                "meaning": "Caution is called for. If you try to force your way now, you're likely to cause more damage. Patience. Your day will come.",
                "_id": {
                    "$oid": "5797be774703d06002516a8d"
                }
            },
            {
                "line": 4,
                "meaning": "High clouds, no rain. You need the support of good people you can trust to help you through the dry spell.",
                "_id": {
                    "$oid": "5797be774703d06002516a8c"
                }
            },
            {
                "line": 5,
                "meaning": "There's a time to fly high and a time to stay close to the ground. Attend to the little things. God is in the details.",
                "_id": {
                    "$oid": "5797be774703d06002516a8b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a8a"
                }
            }
        ],
        "sequence": [
            0,
            0,
            1,
            1,
            0,
            0
        ],
        "trigramsOrder": [
            3,
            1
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa4"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa2"
            }
        },
        "book": {
            "says": "Come back to earth. Don't try to fly so high. Not now. If your high-flying stunts result in the loss of your nest, you'll be sorry.",
            "sees": "you like attending to the details\nto make the big picture\na true work of art\na bird in flight tells you\nthink small \u2014 think beautiful",
            "suggests": "by achieving tiny victories\nyou are working toward\nsomething truly magnificent\nso play your part as well as you can\nfor you to succeed\nin so ambitious a task\nyou'd better be extremely conscientious\nonly the lowly know\nhow wonderful it is to be uplifted\nlittle things make a big difference"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a91"
        },
        "number": 63,
        "name": "After Completion",
        "nameChinese": "既濟",
        "changing": [
            {
                "line": 0,
                "meaning": "Don't get carried away. Success is intoxicating, but you should rein in that unbridled enthusiasm of yours or you might fall flat on your face.",
                "_id": {
                    "$oid": "5797be774703d06002516a98"
                }
            },
            {
                "line": 1,
                "meaning": "Wait for it! When the new order is established and the honors are being handed out, don't worry if you are overlooked. Your worth will be recognized and rewarded if you can be patient.",
                "_id": {
                    "$oid": "5797be774703d06002516a97"
                }
            },
            {
                "line": 2,
                "meaning": "After completion, a clear policy is essential, especially when the new order is threatened by greedy people.",
                "_id": {
                    "$oid": "5797be774703d06002516a96"
                }
            },
            {
                "line": 3,
                "meaning": "The finest clothes will one day turn to rags. Even the most stylish wardrobe needs refreshing.",
                "_id": {
                    "$oid": "5797be774703d06002516a95"
                }
            },
            {
                "line": 4,
                "meaning": "In the rush of events surrounding the new order, extravagant gestures are being made on every side. But your humble offering, made with sincerity, will have a more lasting influence.",
                "_id": {
                    "$oid": "5797be774703d06002516a94"
                }
            },
            {
                "line": 5,
                "meaning": "Tough times. The less you look back and the more you move forward, the more likely you are to get into a better place.",
                "_id": {
                    "$oid": "5797be774703d06002516a93"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a92"
                }
            }
        ],
        "sequence": [
            1,
            0,
            1,
            0,
            1,
            0
        ],
        "trigramsOrder": [
            6,
            2
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa7"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa3"
            }
        },
        "book": {
            "says": "When everything has gone your way and you've got what you wanted, it's time to be extra careful.",
            "sees": "a kettle boiling above a fire\ncaution is required\nbecause if the water boils over\nit will extinguish the flames\nno tea for two",
            "suggests": "things are coming together\nyour house is set in order\nyou are achieving your goals\nwhen everything's going so well\ncomplacency can take over\nand your new order reverts to chaos\nyou'd be wise to foresee the dangers and difficulties to come\nwhen you can see it coming\nyou can stop it before it starts"
        }
    },
    {
        "_id": {
            "$oid": "5797be774703d06002516a99"
        },
        "number": 64,
        "name": "Before Completion",
        "nameChinese": "未濟",
        "changing": [
            {
                "line": 0,
                "meaning": "Discretion is the better part of valor, especially during a time of transition. Picture an inexperienced fox running onto thin ice.",
                "_id": {
                    "$oid": "5797be774703d06002516aa0"
                }
            },
            {
                "line": 1,
                "meaning": "S-T-O-P. Stop, Think, Organize, Proceed.",
                "_id": {
                    "$oid": "5797be774703d06002516a9f"
                }
            },
            {
                "line": 2,
                "meaning": "A time of transition can expose you to threats and dangers you don't normally have to deal with. Helping hands may well be required to get you safely across to the other side.",
                "_id": {
                    "$oid": "5797be774703d06002516a9e"
                }
            },
            {
                "line": 3,
                "meaning": "Be bold and decisive. Persevere. The time for doubt and hesitation is over. Ring out the old, bring on the new.",
                "_id": {
                    "$oid": "5797be774703d06002516a9d"
                }
            },
            {
                "line": 4,
                "meaning": "You have succeeded. You time has come. Like sunshine after rain, like new growth in the forest after a fire, the new era is beautiful and full of joy.",
                "_id": {
                    "$oid": "5797be774703d06002516a9c"
                }
            },
            {
                "line": 5,
                "meaning": "Congratulations! Time to celebrate. But don't overdo it. The new era is about to begin, and you'll appreciate it more with a clear head. In the end, it's time to start again.",
                "_id": {
                    "$oid": "5797be774703d06002516a9b"
                }
            },
            {
                "line": 6,
                "meaning": "",
                "_id": {
                    "$oid": "5797be774703d06002516a9a"
                }
            }
        ],
        "sequence": [
            0,
            1,
            0,
            1,
            0,
            1
        ],
        "trigramsOrder": [
            2,
            6
        ],
        "__v": 0,
        "trigrams": {
            "lower": {
                "$oid": "5797be784703d06002516aa3"
            },
            "upper": {
                "$oid": "5797be784703d06002516aa7"
            }
        },
        "book": {
            "says": "You're on the cusp between the old order and the new. Take as much care with the last step of the journey as with the first.",
            "sees": "you like a fire on the water\nopposing elements\nsomehow joined\nyet kept separate",
            "suggests": "tread carefully like an old fox\ncrossing a frozen river\nalert to the slightest crack\nin a time of transition\nthe priority has to be making it\nsafely to the other side\nas fire leaps up\nreaching for the sun\nas water flows down\ndrawn to the ocean\nyou will find your true home\nin the end\n(and see it for the first time)"
        }
    }
]
const trigrams = [
    {
        "_id": {
            "$oid": "5797be784703d06002516aa1"
        },
        "name": "Heaven",
        "nameChinese": "乾",
        "order": 0,
        "color": "#DAA520",
        "sequence": [
            1,
            1,
            1
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa2"
        },
        "name": "Thunder",
        "nameChinese": "震",
        "order": 1,
        "color": "#808080",
        "sequence": [
            1,
            0,
            0
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa3"
        },
        "name": "Water",
        "nameChinese": "坎",
        "order": 2,
        "color": "#4682B4",
        "sequence": [
            0,
            1,
            0
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa4"
        },
        "name": "Mountain",
        "nameChinese": "艮",
        "order": 3,
        "color": "#C0C0C0",
        "sequence": [
            0,
            0,
            1
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa5"
        },
        "name": "Earth",
        "nameChinese": "坤",
        "order": 4,
        "color": "#FFDEAD",
        "sequence": [
            0,
            0,
            0
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa6"
        },
        "name": "Wind",
        "nameChinese": "巽",
        "order": 5,
        "color": "#9ACD32",
        "sequence": [
            0,
            1,
            1
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa7"
        },
        "name": "Flame",
        "nameChinese": "離",
        "order": 6,
        "color": "#FF4500",
        "sequence": [
            1,
            0,
            1
        ],
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5797be784703d06002516aa8"
        },
        "name": "Lake",
        "nameChinese": "兌",
        "order": 7,
        "color": "#0000FF",
        "sequence": [
            1,
            1,
            0
        ],
        "__v": 0
    }
]

const state = {
    hexagrams,
    trigrams
}
const getters = {
    hexagrams: (state) => state.hexagrams,
    trigrams: (state) => state.trigrams,
    hexagram: (state, rootState) => {
        if (rootState.sequence.length !== 0 && rootState.sequence.length % 6 === 0) {
            return state.hexagrams.find(h => isEqual(h.sequence, rootState.sequence))
        }
    },
    trigramUpper: (state, rootState) => {
        if (rootState.sequence.length !== 0 && rootState.sequence.length % 6 === 0) {
            return state.trigrams.find(t => isEqual(t.sequence, takeRight(rootState.sequence, 3)))
        }
    },
    trigramLower: (state, rootState) => {
        if (rootState.sequence.length !== 0 && rootState.sequence.length % 3 === 0) {
            return state.trigrams.find(t => isEqual(t.sequence, take(rootState.sequence, 3)))
        }
    }
}
const actions = {}
const mutations = {}
export default {
    state,
    getters,
    actions,
    mutations
}

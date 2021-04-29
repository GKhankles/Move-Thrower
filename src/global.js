var advancedToggle = false;
var curGeneration = 3;
var weatherList = [];
var pkmn1 = null;
var pkmn2 = null;
var uid = "";
var bulbasaurMoves = [
    {
        "move": {
            "name": "razor-wind",
            "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "swords-dance",
            "url": "https://pokeapi.co/api/v2/move/14/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "cut",
            "url": "https://pokeapi.co/api/v2/move/15/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "bind",
            "url": "https://pokeapi.co/api/v2/move/20/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "vine-whip",
            "url": "https://pokeapi.co/api/v2/move/22/"
        },
        "version_group_details": [
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 10,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 9,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "headbutt",
            "url": "https://pokeapi.co/api/v2/move/29/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "tackle",
            "url": "https://pokeapi.co/api/v2/move/33/"
        },
        "version_group_details": [
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "body-slam",
            "url": "https://pokeapi.co/api/v2/move/34/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "take-down",
            "url": "https://pokeapi.co/api/v2/move/36/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "double-edge",
            "url": "https://pokeapi.co/api/v2/move/38/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "growl",
            "url": "https://pokeapi.co/api/v2/move/45/"
        },
        "version_group_details": [
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 1,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 4,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 3,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "strength",
            "url": "https://pokeapi.co/api/v2/move/70/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "mega-drain",
            "url": "https://pokeapi.co/api/v2/move/72/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "leech-seed",
            "url": "https://pokeapi.co/api/v2/move/73/"
        },
        "version_group_details": [
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 7,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "growth",
            "url": "https://pokeapi.co/api/v2/move/74/"
        },
        "version_group_details": [
            {
                "level_learned_at": 34,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 34,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 32,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "razor-leaf",
            "url": "https://pokeapi.co/api/v2/move/75/"
        },
        "version_group_details": [
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 27,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 19,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "solar-beam",
            "url": "https://pokeapi.co/api/v2/move/76/"
        },
        "version_group_details": [
            {
                "level_learned_at": 48,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 48,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 46,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "poison-powder",
            "url": "https://pokeapi.co/api/v2/move/77/"
        },
        "version_group_details": [
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 20,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "sleep-powder",
            "url": "https://pokeapi.co/api/v2/move/79/"
        },
        "version_group_details": [
            {
                "level_learned_at": 41,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 41,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 15,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 13,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "petal-dance",
            "url": "https://pokeapi.co/api/v2/move/80/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "string-shot",
            "url": "https://pokeapi.co/api/v2/move/81/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "toxic",
            "url": "https://pokeapi.co/api/v2/move/92/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "rage",
            "url": "https://pokeapi.co/api/v2/move/99/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "mimic",
            "url": "https://pokeapi.co/api/v2/move/102/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "double-team",
            "url": "https://pokeapi.co/api/v2/move/104/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "defense-curl",
            "url": "https://pokeapi.co/api/v2/move/111/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "light-screen",
            "url": "https://pokeapi.co/api/v2/move/113/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "reflect",
            "url": "https://pokeapi.co/api/v2/move/115/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "bide",
            "url": "https://pokeapi.co/api/v2/move/117/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "sludge",
            "url": "https://pokeapi.co/api/v2/move/124/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "skull-bash",
            "url": "https://pokeapi.co/api/v2/move/130/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "amnesia",
            "url": "https://pokeapi.co/api/v2/move/133/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "flash",
            "url": "https://pokeapi.co/api/v2/move/148/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "rest",
            "url": "https://pokeapi.co/api/v2/move/156/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "substitute",
            "url": "https://pokeapi.co/api/v2/move/164/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "snore",
            "url": "https://pokeapi.co/api/v2/move/173/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "curse",
            "url": "https://pokeapi.co/api/v2/move/174/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "protect",
            "url": "https://pokeapi.co/api/v2/move/182/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "sludge-bomb",
            "url": "https://pokeapi.co/api/v2/move/188/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "mud-slap",
            "url": "https://pokeapi.co/api/v2/move/189/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "giga-drain",
            "url": "https://pokeapi.co/api/v2/move/202/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "endure",
            "url": "https://pokeapi.co/api/v2/move/203/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "charm",
            "url": "https://pokeapi.co/api/v2/move/204/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "swagger",
            "url": "https://pokeapi.co/api/v2/move/207/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "fury-cutter",
            "url": "https://pokeapi.co/api/v2/move/210/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "attract",
            "url": "https://pokeapi.co/api/v2/move/213/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "sleep-talk",
            "url": "https://pokeapi.co/api/v2/move/214/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "return",
            "url": "https://pokeapi.co/api/v2/move/216/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "frustration",
            "url": "https://pokeapi.co/api/v2/move/218/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "safeguard",
            "url": "https://pokeapi.co/api/v2/move/219/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "sweet-scent",
            "url": "https://pokeapi.co/api/v2/move/230/"
        },
        "version_group_details": [
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 25,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 21,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "synthesis",
            "url": "https://pokeapi.co/api/v2/move/235/"
        },
        "version_group_details": [
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 39,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 33,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "hidden-power",
            "url": "https://pokeapi.co/api/v2/move/237/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "sunny-day",
            "url": "https://pokeapi.co/api/v2/move/241/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "rock-smash",
            "url": "https://pokeapi.co/api/v2/move/249/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "facade",
            "url": "https://pokeapi.co/api/v2/move/263/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "nature-power",
            "url": "https://pokeapi.co/api/v2/move/267/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "ingrain",
            "url": "https://pokeapi.co/api/v2/move/275/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "knock-off",
            "url": "https://pokeapi.co/api/v2/move/282/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "secret-power",
            "url": "https://pokeapi.co/api/v2/move/290/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "grass-whistle",
            "url": "https://pokeapi.co/api/v2/move/320/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "bullet-seed",
            "url": "https://pokeapi.co/api/v2/move/331/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "magical-leaf",
            "url": "https://pokeapi.co/api/v2/move/345/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "natural-gift",
            "url": "https://pokeapi.co/api/v2/move/363/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "worry-seed",
            "url": "https://pokeapi.co/api/v2/move/388/"
        },
        "version_group_details": [
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 31,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "seed-bomb",
            "url": "https://pokeapi.co/api/v2/move/402/"
        },
        "version_group_details": [
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 37,
                "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "energy-ball",
            "url": "https://pokeapi.co/api/v2/move/412/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "leaf-storm",
            "url": "https://pokeapi.co/api/v2/move/437/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "power-whip",
            "url": "https://pokeapi.co/api/v2/move/438/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "captivate",
            "url": "https://pokeapi.co/api/v2/move/445/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "grass-knot",
            "url": "https://pokeapi.co/api/v2/move/447/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "venoshock",
            "url": "https://pokeapi.co/api/v2/move/474/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "round",
            "url": "https://pokeapi.co/api/v2/move/496/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "echoed-voice",
            "url": "https://pokeapi.co/api/v2/move/497/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "grass-pledge",
            "url": "https://pokeapi.co/api/v2/move/520/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "work-up",
            "url": "https://pokeapi.co/api/v2/move/526/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "grassy-terrain",
            "url": "https://pokeapi.co/api/v2/move/580/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "egg",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    },
    {
        "move": {
            "name": "confide",
            "url": "https://pokeapi.co/api/v2/move/590/"
        },
        "version_group_details": [
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                }
            },
            {
                "level_learned_at": 0,
                "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                },
                "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                }
            }
        ]
    }
];

var bulbasaurInfo = {
			curPkmn: "Bulbasaur",
			baseStats: {			
				HP: 45,
				Atk: 49,
				SpAtk: 65,
				Def: 49,
				SpDef: 65,
				Spd: 45
			},
			ivInfo: {			
				HP: 0,
				Atk: 0,
				SpAtk: 0,
				Def: 0,
				SpDef: 0,
				Spd: 0
			},
			evInfo: {			
				HP: 0,
				Atk: 0,
				SpAtk: 0,
				Def: 0,
				SpDef: 0,
				Spd: 0
			},
			totalStats: {			
				HP: 11,
				Atk: 5,
				SpAtk: 6,
				Def: 5,
				SpDef: 6,
				Spd: 5
			},
			level: 1,
			nature: "Hardy",
			status: "Healthy",
			moves: bulbasaurMoves,
			types: ["Grass", "Poison"],
			pkmnImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        };
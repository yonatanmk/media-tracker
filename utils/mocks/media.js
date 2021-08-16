import { mediaTypes, addHoursToDate } from "../media";

const mockMediaData = [
  {
    _id: 1,
    name: "Dishonored 2",
    startTime: new Date("04/20/2019"),
    endTime: new Date("6/14/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 2,
    name: "Red Dead Redemption 2",
    startTime: new Date("10/26/2018"),
    endTime: new Date("3/18/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 3,
    name: "Cyberpunk 2077",
    startTime: new Date("12/09/2020"),
    endTime: new Date("12/30/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 4,
    name: "Yakuza 6",
    startTime: new Date("12/7/2020"),
    endTime: new Date("1/7/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 5,
    name: "Divinity Original Sin 2",
    startTime: new Date("05/31/2020"),
    endTime: new Date("10/26/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 6,
    name: "Persona 4 Golden",
    startTime: new Date("06/15/2021"),
    endTime: null,
    type: mediaTypes.videogame,
  },
  {
    _id: 7,
    name: "13 Sentinels",
    startTime: new Date("02/25/2021"),
    endTime: new Date("03/10/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 8,
    name: "Ori and the Will of the Wisps",
    startTime: new Date("05/30/2021"),
    endTime: new Date("06/20/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 9,
    name: "Immortals Fenyx Rising",
    startTime: new Date("01/23/2021"),
    endTime: new Date("02/23/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 10,
    name: "Last of Us Part 2",
    startTime: new Date("01/09/2021"),
    endTime: new Date("01/23/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 11,
    name: "Greedfall",
    startTime: new Date("05/14/2021"),
    endTime: new Date("05/28/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 12,
    name: "SubNautica",
    startTime: new Date("12/16/2018"),
    endTime: new Date("12/25/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 13,
    name: "Slime Rancher",
    startTime: new Date("03/21/2019"),
    endTime: new Date("03/23/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 14,
    name: "The Painscreek Killings",
    startTime: new Date("12/25/2018"),
    endTime: new Date("12/30/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 15,
    name: "Return of the Obra Dinn",
    startTime: new Date("04/06/2019"),
    endTime: new Date("04/08/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 16,
    name: "AI: The Somnium Files",
    startTime: new Date("09/18/2019"),
    endTime: new Date("10/04/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 17,
    name: "Bugsnax",
    startTime: new Date("11/14/2020"),
    endTime: new Date("12/06/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 18,
    name: "Borderlands 3",
    startTime: new Date("09/27/2019"),
    endTime: new Date("10/29/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 19,
    name: "Outer Worlds",
    startTime: new Date("12/02/2019"),
    endTime: new Date("12/20/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 20,
    name: "Outer Wilds",
    startTime: new Date("09/02/2020"),
    endTime: new Date("09/06/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 21,
    name: "Death Stranding",
    startTime: new Date("11/08/2019"),
    endTime: new Date("12/01/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 22,
    name: "Heaven's Vault",
    startTime: new Date("03/27/2021"),
    endTime: new Date("04/04/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 23,
    name: "Disco Elysium",
    startTime: new Date("01/07/2020"),
    endTime: new Date("02/24/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 24,
    name: "Way of Kings",
    startTime: new Date("12/29/2019"),
    endTime: new Date("03/12/2020"),
    type: mediaTypes.book,
  },
  {
    _id: 25,
    name: "Words of Radiance",
    startTime: new Date("03/12/2021"),
    endTime: new Date("03/24/2021"),
    type: mediaTypes.book,
  },
  {
    _id: 26,
    name: "Oathbringer",
    startTime: new Date("03/27/2021"),
    endTime: new Date("06/12/2021"),
    type: mediaTypes.book,
  },
  {
    _id: 27,
    name: "Schitt's Creek",
    startTime: new Date("09/26/2020"),
    endTime: new Date("11/19/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 28,
    name: "Fire Emblem: Three Houses",
    startTime: new Date("08/07/2019"),
    endTime: new Date("10/06/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 29,
    name: "The World Ends With You",
    nodes: [
      {
        startTime: new Date("01/01/2019"),
        endTime: new Date("01/08/2019"),
      },
      {
        startTime: new Date("07/23/2019"),
        endTime: new Date("08/06/2019"),
      },
    ],
    type: mediaTypes.videogame,
    // 10/8 to 10/13, 5/26 to 5/30
  },
  {
    _id: 30,
    name: "Rhythm of War",
    startTime: new Date("07/09/2021"),
    endTime: null,
    type: mediaTypes.book,
  },
  {
    _id: 31,
    name: "Edgedancer",
    startTime: new Date("03/25/2021"),
    endTime: new Date("03/26/2021"),
    type: mediaTypes.book,
  },
  {
    _id: 32,
    name: "Shadow of War",
    startTime: new Date("03/05/2020"),
    endTime: new Date("04/03/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 33,
    name: "Final Fantasy VII: Remake",
    startTime: new Date("04/10/2020"),
    endTime: new Date("04/24/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 34,
    name: "Suikoden 2",
    startTime: new Date("05/05/2020"),
    endTime: new Date("05/30/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 35,
    name: "Terraria with Lily",
    startTime: new Date("04/03/2020"),
    endTime: new Date("05/17/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 36,
    name: "Stardew Valley with Lily",
    startTime: new Date("02/16/2019"),
    endTime: new Date("05/06/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 37,
    name: "Control + Foundation DLC",
    startTime: new Date("04/24/2020"),
    endTime: new Date("05/24/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 38,
    name: "Link's Awakening",
    nodes: [
      {
        startTime: new Date("05/26/2020"),
        endTime: new Date("05/30/2020"),
      },
      {
        startTime: new Date("10/08/2019"),
        endTime: new Date("10/13/2019"),
      },
    ],
    type: mediaTypes.videogame,
    // 10/8 to 10/13, 5/26 to 5/30
  },
  {
    _id: 39,
    name: "The Sinking City",
    startTime: new Date("06/25/2019"),
    endTime: new Date("07/17/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 40,
    name: "Moss",
    startTime: new Date("03/09/2019"),
    endTime: new Date("03/10/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 41,
    name: "Super Smash Brothers Ultimate",
    startTime: new Date("12/07/2018"),
    endTime: new Date("01/12/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 42,
    name: "Danganronpa 1 Trigger Happy Havoc",
    startTime: new Date("06/24/2018"),
    endTime: new Date("06/29/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 43,
    name: "Danganronpa 2: Goodbye Despair",
    startTime: new Date("06/30/2018"),
    endTime: new Date("08/26/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 44,
    name: "Danganronpa 3: The End of Hope's Peak High School",
    startTime: new Date("12/21/2019"),
    endTime: new Date("01/05/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 45,
    name: "Zombieland Saga S1",
    startTime: new Date("10/20/2018"),
    endTime: new Date("12/26/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 46,
    name: "Zombieland Saga S2",
    startTime: new Date("04/23/2021"),
    endTime: new Date("06/24/2021"),
    type: mediaTypes.tv,
  },
  {
    _id: 47,
    name: "Yakuza 0",
    startTime: new Date("04/04/2021"),
    endTime: new Date("04/24/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 48,
    name: "Nier Replicant",
    startTime: new Date("04/25/2021"),
    endTime: new Date("05/08/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 49,
    name: "Yakuza Kiwami Playthrough",
    startTime: new Date("05/08/2021"),
    endTime: new Date("05/09/2021"),
    type: mediaTypes.playthrough,
  },
  {
    _id: 50,
    name: "Yakuza Kiwami 2 Playthrough",
    startTime: new Date("05/10/2021"),
    endTime: new Date("05/11/2021"),
    type: mediaTypes.playthrough,
  },
  {
    _id: 51,
    name: "Civilization VI",
    startTime: new Date("04/28/2021"),
    endTime: new Date("05/12/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 52,
    name: "Golf Story",
    startTime: new Date("04/26/2019"),
    endTime: new Date("06/07/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 53,
    name: "Celeste",
    nodes: [
      {
        startTime: new Date("04/15/2019"),
        endTime: new Date("05/06/2019"),
      },
      {
        startTime: new Date("06/15/2019"),
        endTime: new Date("07/18/2019"),
      },
    ],
    type: mediaTypes.videogame,
  },
  {
    _id: 54,
    name: "Forgotton Anne",
    startTime: new Date("10/06/2019"),
    endTime: new Date("10/26/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 55,
    name: "The Witness",
    startTime: new Date("04/08/2019"),
    endTime: new Date("04/17/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 56,
    name: "Hellblade: Senua's Sacrifice",
    startTime: new Date("06/16/2019"),
    endTime: new Date("06/23/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 57,
    name: "The Name of the Wind",
    startTime: new Date("04/19/2019"),
    endTime: new Date("05/23/2019"),
    type: mediaTypes.book,
  },
  {
    _id: 58,
    name: "The Wise Man's Fear",
    startTime: new Date("05/23/2019"),
    endTime: new Date("08/27/2019"),
    type: mediaTypes.book,
  },
  {
    _id: 59,
    name: "MTGA",
    startTime: new Date("10/01/2018"),
    endTime: new Date("12/04/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 60,
    name: "CrossCode",
    startTime: new Date("09/30/2018"),
    endTime: new Date("10/19/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 61,
    name: "Chrono Trigger",
    startTime: new Date("09/19/2018"),
    endTime: new Date("09/26/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 62,
    name: "Chrono Trigger Playthrough",
    startTime: new Date("01/08/2019"),
    endTime: new Date("01/09/2019"),
    type: mediaTypes.playthrough,
  },
  {
    _id: 63,
    name: "Axiom Verge",
    startTime: new Date("03/27/2019"),
    endTime: new Date("04/25/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 64,
    name: "Another Eden: The Cat Beyond Time and Space",
    startTime: new Date("06/03/2019"),
    endTime: new Date("06/23/2019"),
    type: mediaTypes.videogame,
  },
  {
    _id: 65,
    name: "Dishonored: Death of the Outsider",
    startTime: new Date("07/18/2021"),
    endTime: new Date("07/29/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 66,
    name: "Nier Automata",
    startTime: new Date("08/28/2018"),
    endTime: new Date("09/09/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 67,
    name: "Marvel's Spider-Man",
    startTime: new Date("09/09/2018"),
    endTime: new Date("09/23/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 68,
    name: "Octopath Traveler",
    startTime: new Date("07/21/2018"),
    endTime: new Date("08/30/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 69,
    name: "Rise of the Tomb Raider",
    startTime: new Date("07/14/2018"),
    endTime: new Date("08/11/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 70,
    name: "Ghost of Tsushima",
    startTime: new Date("07/18/2020"),
    endTime: new Date("09/12/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 71,
    name: "Resident Evil 4",
    startTime: new Date("09/12/2020"),
    endTime: new Date("10/11/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 72,
    name: "Paper Mario: The Origami King",
    startTime: new Date("07/23/2020"),
    endTime: new Date("08/23/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 73,
    name: "Resident Evil Village",
    startTime: new Date("06/05/2021"),
    endTime: new Date("06/13/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 74,
    name: "Titanfall 2",
    startTime: new Date("09/20/2020"),
    endTime: new Date("09/22/2020"),
    type: mediaTypes.videogame,
  },
  // NEED TO POPULATE IN DB
  {
    _id: 75,
    name: "Famicom Detective Club: The Missing Heir",
    startTime: new Date("07/16/2021"),
    endTime: new Date("07/25/2021"),
    type: mediaTypes.playthrough,
  },
  {
    _id: 76,
    name: "Divinity Original Sin Playthrough",
    startTime: new Date("03/19/2020"),
    endTime: new Date("04/11/2020"),
    type: mediaTypes.playthrough,
  },
  {
    _id: 77,
    name: "Uncharted 4 with Lily",
    startTime: new Date("05/23/2020"),
    endTime: new Date("06/24/2020"),
    type: mediaTypes.videogame,
  },
  {
    _id: 78,
    name: "Grace and Frankie",
    startTime: new Date("03/07/2021"),
    endTime: new Date("04/14/2021"),
    type: mediaTypes.tv,
  },
  {
    _id: 79,
    name: "Castlevania S2",
    startTime: new Date("11/08/2018"),
    endTime: new Date("11/09/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 80,
    name: "Castlevania S3",
    startTime: new Date("02/16/2021"),
    endTime: new Date("03/01/2021"),
    type: mediaTypes.tv,
  },
  {
    _id: 81,
    name: "Never Have I Ever S1",
    startTime: new Date("05/10/2020"),
    endTime: new Date("05/12/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 82,
    name: "The Expanse S1",
    startTime: new Date("01/26/2020"),
    endTime: new Date("01/30/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 83,
    name: "The Expanse S2",
    startTime: new Date("01/31/2020"),
    endTime: new Date("02/15/2020"),
    type: mediaTypes.tv,
  },

  {
    _id: 84,
    name: "Dark S2",
    startTime: new Date("07/11/2019"),
    endTime: new Date("07/28/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 85,
    name: "The Boys S1",
    startTime: new Date("06/07/2020"),
    endTime: new Date("06/10/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 86,
    name: "The Boys S2",
    startTime: new Date("10/07/2020"),
    endTime: new Date("10/31/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 87,
    name: "Umbrella Academy S1",
    startTime: new Date("06/11/2020"),
    endTime: new Date("06/23/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 88,
    name: "Umbrella Academy S2",
    // startTime: new Date("08/10/2020"),
    // endTime: new Date("12/05/2020"),
    nodes: [
      {
        startTime: new Date("08/10/2020"),
        endTime: new Date("09/06/2020"),
      },
      {
        startTime: new Date("11/25/2020"),
        endTime: new Date("12/05/2020"),
      },
    ],
    type: mediaTypes.tv,
  },
  {
    _id: 89,
    name: "Invincible",
    startTime: new Date("07/12/2021"),
    endTime: new Date("07/25/2021"),
    type: mediaTypes.tv,
  },
  // NEW ENTRIES
  {
    _id: 90,
    name: "Frostpunk",
    startTime: new Date("07/10/2021"),
    endTime: new Date("07/29/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 91,
    name: "The Great Ace Attorney Chronicles",
    startTime: new Date("07/29/2021"),
    endTime: null,
    type: mediaTypes.videogame,
  },
  {
    _id: 92,
    name: "Voltron Legendary Defender",
    nodes: [
      {
        startTime: new Date("06/16/2018"),
        endTime: new Date("06/17/2018"),
      },
      {
        startTime: new Date("08/07/2018"),
        endTime: new Date("08/09/2018"),
      },
    ],
    type: mediaTypes.tv,
  },
  {
    _id: 93,
    name: "DOOM 2016",
    startTime: new Date("06/17/2018"),
    endTime: new Date("06/20/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 94,
    name: "Drifters",
    startTime: new Date("06/17/2018"),
    endTime: new Date("06/18/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 95,
    name: "Megalo Box S1",
    startTime: new Date("06/19/2018"),
    endTime: new Date("07/01/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 96,
    name: "SAO Gun Gale Online",
    startTime: new Date("06/20/2018"),
    endTime: new Date("07/21/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 97,
    name: "Adventure Time",
    nodes: [
      {
        startTime: new Date("06/21/2018"),
        endTime: new Date("06/22/2018"),
      },
      {
        startTime: new Date("09/06/2018"),
        endTime: addHoursToDate(new Date("09/06/2018"), 4),
      },
    ],
    type: mediaTypes.tv,
  },
  {
    _id: 98,
    name: "Dirk Gently's Holistic Detective Agency",
    startTime: new Date("07/06/2018"),
    endTime: new Date("07/07/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 99,
    name: "Marvelous Ms. Maisel S1",
    startTime: new Date("07/10/2018"),
    endTime: new Date("07/13/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 100,
    name: "Overwatch",
    startTime: new Date("06/28/2018"),
    endTime: new Date("09/14/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 101,
    name: "The Blood Mirror",
    startTime: new Date("08/07/2018"),
    endTime: new Date("08/22/2018"),
    type: mediaTypes.book,
  },
  {
    _id: 102,
    name: "Disenchantment",
    startTime: new Date("08/19/2018"),
    endTime: new Date("08/20/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 103,
    name: "Bojack Horseman S4",
    startTime: new Date("10/18/2018"),
    endTime: new Date("10/19/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 104,
    name: "Shoukugeki No Souma S3",
    startTime: new Date("10/19/2018"),
    endTime: new Date("10/22/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 104,
    name: "Bojack Horseman S5",
    startTime: new Date("10/19/2018"),
    endTime: new Date("10/23/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 105,
    name: "Adventure Zone",
    startTime: new Date("10/31/2018"),
    endTime: new Date("11/14/2019"),
    type: mediaTypes.podcast,
  },
  {
    _id: 106,
    name: "That Time I was Reincarnated as A Slime",
    startTime: new Date("10/24/2018"),
    endTime: new Date("01/15/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 107,
    name: "The Rising of Shield Hero",
    startTime: new Date("01/15/2019"),
    endTime: new Date("06/03/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 108,
    name: "Blame!",
    nodes: [
      {
        startTime: new Date("11/11/2018"),
        endTime: new Date("11/25/2018"),
      },
      {
        startTime: new Date("01/20/2019"),
        endTime: new Date("01/21/2019"),
      },
    ],
    type: mediaTypes.book,
  },
  {
    _id: 109,
    name: "Dr. Who S11",
    startTime: new Date("10/08/2018"),
    endTime: new Date("01/03/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 110,
    name: "Scarlet Nexus",
    startTime: new Date("07/10/2021"),
    endTime: new Date("07/12/2021"),
    type: mediaTypes.videogame,
  },
  {
    _id: 111,
    name: "Chainsaw Man",
    nodes: [
      {
        startTime: new Date("07/12/2020"),
        endTime: new Date("07/13/2020"),
      },
      {
        startTime: new Date("01/16/2021"),
        endTime: addHoursToDate(new Date("01/16/2021"), 4),
      },
      {
        startTime: new Date("08/02/2021"),
        eendTime: addHoursToDate(new Date("08/02/2021"), 4),
      },
    ],
    type: mediaTypes.book,
  },
  {
    _id: 112,
    name: "Tokyo Revengers",
    startTime: new Date("07/14/2021"),
    endTime: null,
    type: mediaTypes.tv,
  },
  {
    _id: 113,
    name: "Vivy: Fluorite Eye's Song",
    startTime: new Date("07/07/2021"),
    endTime: new Date("07/14/2021"),
    type: mediaTypes.tv,
  },
  {
    _id: 114,
    name: "Never Have I Ever S2",
    startTime: new Date("08/03/2021"),
    endTime: null,
    type: mediaTypes.tv,
  },
  {
    _id: 115,
    name: "Pillars of Eternity 2: Deadfire",
    startTime: new Date("08/04/2021"),
    endTime: null,
    type: mediaTypes.videogame,
  },
  {
    _id: 116,
    name: "GORN",
    startTime: new Date("11/25/2018"),
    endTime: new Date("11/27/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 117,
    name: "Enter the Gungeon",
    startTime: new Date("11/30/2018"),
    endTime: new Date("12/02/2018"),
    type: mediaTypes.videogame,
  },
  {
    _id: 118,
    name: "Hinamatsuri",
    startTime: new Date("12/02/2018"),
    endTime: new Date("12/05/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 119,
    name: "Marvelous Ms. Maisel S2",
    startTime: new Date("12/05/2018"),
    endTime: new Date("12/12/2018"),
    type: mediaTypes.tv,
  },
  {
    _id: 120,
    name: "Marvelous Ms. Maisel S3",
    startTime: new Date("01/03/2020"),
    endTime: new Date("01/10/2020"),
    type: mediaTypes.tv,
  },
  {
    _id: 121,
    name: "Kaiji",
    startTime: new Date("12/10/2018"),
    endTime: new Date("01/31/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 122,
    name: "KOTOR",
    nodes: [
      {
        startTime: new Date("01/16/2019"),
        endTime: new Date("01/22/2019"),
      },
      {
        startTime: new Date("02/26/2019"),
        endTime: addHoursToDate(new Date("02/26/2019"), 4),
      },
    ],
    type: mediaTypes.videogame,
  },
  {
    _id: 123,
    name: "KOTOR",
    startTime: new Date("10/30/2019"),
    endTime: new Date("11/07/2019"),
    type: mediaTypes.playthrough,
  },
  {
    _id: 124,
    name: "Mistborn: The Bands of Mourning",
    startTime: new Date("01/24/2019"),
    endTime: new Date("02/18/2019"),
    type: mediaTypes.book,
  },
  {
    _id: 125,
    name: "The Promised Neverland S1",
    startTime: new Date("01/15/2019"),
    endTime: new Date("03/28/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 126,
    name: "JoJo's Bizarre Adventure S1 Part 1 and 2",
    startTime: new Date("01/31/2019"),
    endTime: new Date("03/07/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 127,
    name: "Dororo",
    startTime: new Date("01/26/2019"),
    endTime: new Date("06/25/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 128,
    name: "Loki",
    startTime: new Date("06/11/2021"),
    endTime: new Date("07/15/2021"),
    type: mediaTypes.tv,
  },
  {
    _id: 129,
    name: "Moriarty The Patriot",
    startTime: new Date("08/15/2021"),
    endTime: null,
    type: mediaTypes.tv,
  },
  {
    _id: 130,
    name: "Naruto Shippuden",
    startTime: new Date("01/24/2019"),
    endTime: new Date("01/28/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 131,
    name: "The Good Place S3",
    startTime: new Date("01/28/2019"),
    endTime: new Date("01/30/2019"),
    type: mediaTypes.tv,
  },
  {
    _id: 132,
    name: "The Good Place S4",
    nodes: [
      {
        startTime: new Date("09/27/2019"),
        endTime: new Date("11/11/2019"),
      },
      {
        startTime: new Date("12/22/2019"),
        endTime: addHoursToDate(new Date("12/22/2019"), 4),
      },
      {
        startTime: new Date("01/21/2020"),
        endTime: addHoursToDate(new Date("01/21/2020"), 4),
      },
      {
        startTime: new Date("02/02/2020"),
        endTime: new Date("02/03/2020"),
      },
    ],
    type: mediaTypes.tv,
  },
  {
    _id: 133,
    name: "The Fifth Season",
    startTime: new Date("02/18/2019"),
    endTime: new Date("02/26/2019"),
    type: mediaTypes.book,
  },
  {
    _id: 134,
    name: "The Obelisk Gate",
    startTime: new Date("02/28/2019"),
    endTime: new Date("03/09/2019"),
    type: mediaTypes.book,
  },
  {
    _id: 135,
    name: "The Stone Sky",
    startTime: new Date("03/10/2019"),
    endTime: new Date("04/11/2019"),
    type: mediaTypes.book,
  },

  // {
  //   _id: 10052,
  //   name: "1234567890 6 arg 7g argrg are grg arg r gr 54324567687",
  //   startTime: new Date("07/08/2021"),
  //   endTime: new Date("07/21/2021"),
  //   type: mediaTypes.book,
  // },
];

export default mockMediaData;

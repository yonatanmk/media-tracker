import nc from "next-connect";
// import { folder } from "../../../db";
// import middleware from '../../../middleware/all'
import onError from "../../../middleware/error";
import { mediaTypes } from "../../../utils/media";

const handler = nc({
  onError,
});

// handler.use(middleware);
// handler.post(async (req, res) => {
//   const newFolder = await folder.createFolder(req.db, {
//     createdBy: req.user.id,
//     name: req.body.name,
//   });
//   res.send({ data: newFolder });
// });

handler.get((req, res) => {
  const mockData = [
    {
      id: 1,
      name: "Dishonored 2",
      startTime: new Date("04/20/2019"),
      endTime: new Date("6/14/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 2,
      name: "Red Dead Redemption 2",
      startTime: new Date("10/26/2018"),
      endTime: new Date("3/18/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 3,
      name: "Cyberpunk 2077",
      startTime: new Date("12/09/2020"),
      endTime: new Date("12/30/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 4,
      name: "Yakuza 6",
      startTime: new Date("12/7/2020"),
      endTime: new Date("1/7/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 5,
      name: "Divinity Original Sin 2",
      startTime: new Date("05/31/2020"),
      endTime: new Date("10/26/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 6,
      name: "Persona 4 Golden",
      startTime: new Date("06/15/2021"),
      endTime: null,
      type: mediaTypes.videogame,
    },
    {
      id: 7,
      name: "13 Sentinels",
      startTime: new Date("02/25/2021"),
      endTime: new Date("03/10/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 8,
      name: "Ori and the Will of the Wisps",
      startTime: new Date("05/30/2021"),
      endTime: new Date("06/20/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 9,
      name: "Immortals Fenyx Rising",
      startTime: new Date("01/23/2021"),
      endTime: new Date("02/23/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 10,
      name: "Last of Us Part 2",
      startTime: new Date("01/09/2021"),
      endTime: new Date("01/23/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 11,
      name: "Greedfall",
      startTime: new Date("05/14/2021"),
      endTime: new Date("05/28/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 12,
      name: "SubNautica",
      startTime: new Date("12/16/2018"),
      endTime: new Date("12/25/2018"),
      type: mediaTypes.videogame,
    },
    {
      id: 13,
      name: "Slime Rancher",
      startTime: new Date("03/21/2019"),
      endTime: new Date("03/23/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 14,
      name: "The Painscreek Killings",
      startTime: new Date("12/25/2018"),
      endTime: new Date("12/30/2018"),
      type: mediaTypes.videogame,
    },
    {
      id: 15,
      name: "Return of the Obra Dinn",
      startTime: new Date("04/06/2019"),
      endTime: new Date("04/08/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 16,
      name: "AI: The Somnium Files",
      startTime: new Date("09/18/2019"),
      endTime: new Date("10/04/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 17,
      name: "Bugsnax",
      startTime: new Date("11/14/2020"),
      endTime: new Date("12/06/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 18,
      name: "Borderlands 3",
      startTime: new Date("09/27/2019"),
      endTime: new Date("10/29/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 19,
      name: "Outer Worlds",
      startTime: new Date("12/02/2019"),
      endTime: new Date("12/20/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 20,
      name: "Outer Wilds",
      startTime: new Date("09/02/2020"),
      endTime: new Date("09/06/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 21,
      name: "Death Stranding",
      startTime: new Date("11/08/2019"),
      endTime: new Date("12/01/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 22,
      name: "Heaven's Vault",
      startTime: new Date("03/27/2021"),
      endTime: new Date("04/04/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 23,
      name: "Disco Elysium",
      startTime: new Date("01/07/2020"),
      endTime: new Date("02/24/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 24,
      name: "Way of Kings",
      startTime: new Date("12/29/2019"),
      endTime: new Date("03/12/2020"),
      type: mediaTypes.book,
    },
    {
      id: 25,
      name: "Words of Radiance",
      startTime: new Date("03/12/2021"),
      endTime: new Date("03/24/2021"),
      type: mediaTypes.book,
    },
    {
      id: 26,
      name: "Oathbringer",
      startTime: new Date("03/27/2021"),
      endTime: new Date("06/12/2021"),
      type: mediaTypes.book,
    },
    {
      id: 27,
      name: "Schitt's Creek",
      startTime: new Date("09/26/2020"),
      endTime: new Date("11/19/2020"),
      type: mediaTypes.tv,
    },
    {
      id: 28,
      name: "Fire Emblem: Three Houses",
      startTime: new Date("08/07/2019"),
      endTime: new Date("10/06/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 29,
      name: "The World Ends With You",
      startTime: new Date("07/23/2019"),
      endTime: new Date("08/06/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 30,
      name: "Rhythm of War",
      startTime: new Date("07/09/2021"),
      endTime: null,
      type: mediaTypes.book,
    },
    {
      id: 31,
      name: "Edgedancer",
      startTime: new Date("03/25/2021"),
      endTime: new Date("03/26/2021"),
      type: mediaTypes.book,
    },
    {
      id: 32,
      name: "Shadow of War",
      startTime: new Date("03/05/2020"),
      endTime: new Date("04/03/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 33,
      name: "Final Fantasy VII: Remake",
      startTime: new Date("04/10/2020"),
      endTime: new Date("04/24/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 34,
      name: "Suikoden 2",
      startTime: new Date("05/05/2020"),
      endTime: new Date("05/30/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 35,
      name: "Terraria with Lily",
      startTime: new Date("04/03/2020"),
      endTime: new Date("05/17/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 36,
      name: "Stardew Valley with Lily",
      startTime: new Date("02/16/2019"),
      endTime: new Date("05/06/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 37,
      name: "Control + Foundation DLC",
      startTime: new Date("04/24/2020"),
      endTime: new Date("05/24/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 38,
      name: "Link's Awakening",
      // startTime: new Date("05/26/2020"),
      // endTime: new Date("05/30/2020"),
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
      id: 39,
      name: "The Sinking City",
      startTime: new Date("06/25/2019"),
      endTime: new Date("07/17/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 40,
      name: "Moss",
      startTime: new Date("03/09/2019"),
      endTime: new Date("03/10/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 41,
      name: "Super Smash Brothers Ultimate",
      startTime: new Date("12/07/2018"),
      endTime: new Date("01/12/2019"),
      type: mediaTypes.videogame,
    },
    {
      id: 42,
      name: "Danganronpa 1 Trigger Happy Havoc",
      startTime: new Date("06/24/2018"),
      endTime: new Date("06/29/2018"),
      type: mediaTypes.videogame,
    },
    {
      id: 43,
      name: "Danganronpa 2: Goodbye Despair",
      startTime: new Date("06/30/2018"),
      endTime: new Date("08/26/2018"),
      type: mediaTypes.videogame,
    },
    {
      id: 44,
      name: "Danganronpa 3: The End of Hope's Peak High School",
      startTime: new Date("12/21/2019"),
      endTime: new Date("01/05/2020"),
      type: mediaTypes.videogame,
    },
    {
      id: 45,
      name: "Zombieland Saga S1",
      startTime: new Date("10/20/2018"),
      endTime: new Date("12/26/2018"),
      type: mediaTypes.tv,
    },
    {
      id: 46,
      name: "Zombieland Saga S2",
      startTime: new Date("04/23/2021"),
      endTime: new Date("06/24/2021"),
      type: mediaTypes.tv,
    },
    {
      id: 47,
      name: "Yakuza 0",
      startTime: new Date("04/04/2021"),
      endTime: new Date("04/24/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 48,
      name: "Nier Replicant",
      startTime: new Date("04/25/2021"),
      endTime: new Date("05/08/2021"),
      type: mediaTypes.videogame,
    },
    {
      id: 49,
      name: "Yakuza Kiwami Playthrough",
      startTime: new Date("05/08/2021"),
      endTime: new Date("05/09/2021"),
      type: mediaTypes.playthrough,
    },
    {
      id: 50,
      name: "Yakuza Kiwami 2 Playthrough",
      startTime: new Date("05/10/2021"),
      endTime: new Date("05/11/2021"),
      type: mediaTypes.playthrough,
    },
    {
      id: 51,
      name: "Civilization VI",
      startTime: new Date("04/28/2021"),
      endTime: new Date("05/12/2021"),
      type: mediaTypes.videogame,
    },
    // {
    //   id: 52,
    //   name: "1234567890 6 arg 7g argrg are grg arg r gr 54324567687",
    //   startTime: new Date("07/08/2021"),
    //   endTime: new Date("07/21/2021"),
    //   type: mediaTypes.book,
    // },
  ];
  // return mockData;
  res.send(mockData);
});

export default handler;

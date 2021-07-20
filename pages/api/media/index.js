import nc from "next-connect";
// import { folder } from "../../../db";
// import middleware from '../../../middleware/all'
import onError from "../../../middleware/error";

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
    },
    {
      id: 2,
      name: "Red Dead Redemption 2",
      startTime: new Date("10/26/2018"),
      endTime: new Date("3/18/2019"),
    },
    {
      id: 3,
      name: "Cyberpunk 2077",
      startTime: new Date("12/09/2020"),
      endTime: new Date("12/30/2020"),
    },
    {
      id: 4,
      name: "Yakuza 6",
      startTime: new Date("12/7/2020"),
      endTime: new Date("1/7/2021"),
    },
    {
      id: 5,
      name: "Divinity Original Sin 2",
      startTime: new Date("05/31/2020"),
      endTime: new Date("10/26/2020"),
    },
    {
      id: 6,
      name: "Persona 4 Golden",
      startTime: new Date("06/15/2021"),
      endTime: null,
    },
    {
      id: 7,
      name: "13 Sentinels",
      startTime: new Date("02/25/2021"),
      endTime: new Date("03/10/2021"),
    },
    {
      id: 8,
      name: "Ori and the Will of the Wisps",
      startTime: new Date("05/30/2021"),
      endTime: new Date("06/20/2021"),
    },
    {
      id: 9,
      name: "Immortals Fenyx Rising",
      startTime: new Date("01/23/2021"),
      endTime: new Date("02/23/2021"),
    },
    {
      id: 10,
      name: "Last of Us Part 2",
      startTime: new Date("01/09/2021"),
      endTime: new Date("01/23/2021"),
    },
    {
      id: 11,
      name: "Greedfall",
      startTime: new Date("05/14/2021"),
      endTime: new Date("05/28/2021"),
    },
    {
      id: 12,
      name: "SubNautica",
      startTime: new Date("12/16/2018"),
      endTime: new Date("12/25/2018"),
    },
    {
      id: 13,
      name: "Slime Rancher",
      startTime: new Date("03/21/2019"),
      endTime: new Date("03/23/2019"),
    },
    {
      id: 14,
      name: "The Painscreek Killings",
      startTime: new Date("12/25/2018"),
      endTime: new Date("12/30/2018"),
    },
    {
      id: 15,
      name: "Return of the Obra Dinn",
      startTime: new Date("04/06/2019"),
      endTime: new Date("04/08/2019"),
    },
    {
      id: 16,
      name: "AI: The Somnium Files",
      startTime: new Date("09/18/2019"),
      endTime: new Date("10/04/2019"),
    },
    {
      id: 17,
      name: "Bugsnax",
      startTime: new Date("11/14/2020"),
      endTime: new Date("12/06/2020"),
    },
    {
      id: 18,
      name: "Borderlands 3",
      startTime: new Date("09/27/2019"),
      endTime: new Date("10/29/2019"),
    },
    {
      id: 19,
      name: "Outer Worlds",
      startTime: new Date("12/02/2019"),
      endTime: new Date("12/20/2019"),
    },
    {
      id: 20,
      name: "Outer Wilds",
      startTime: new Date("09/02/2020"),
      endTime: new Date("09/06/2020"),
    },
    {
      id: 21,
      name: "Death Stranding",
      startTime: new Date("11/08/2019"),
      endTime: new Date("12/01/2019"),
    },
    {
      id: 22,
      name: "Heaven's Vault",
      startTime: new Date("03/27/2021"),
      endTime: new Date("04/04/2021"),
    },
    {
      id: 23,
      name: "Disco Elysium",
      startTime: new Date("01/07/2020"),
      endTime: new Date("02/24/2020"),
    },
  ];
  // return mockData;
  res.send(mockData);
});

export default handler;

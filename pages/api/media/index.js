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
  ];
  // return mockData;
  res.send(mockData);
});

export default handler;

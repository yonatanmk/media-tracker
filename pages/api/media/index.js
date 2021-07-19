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
    },
    {
      id: 2,
      name: "Horizon Zero Dawn",
    },
    {
      id: 3,
      name: "God of War",
    },
    {
      id: 4,
      name: "Yakuza 6",
    },
    {
      id: 5,
      name: "Divinity Original Sin 2",
    },
  ];
  // return mockData;
  res.send(mockData);
});

export default handler;

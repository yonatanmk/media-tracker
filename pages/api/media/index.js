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
      name: "Dishonored 2",
    },
    {
      name: "Horizon Zero Dawn",
    },
    {
      name: "God of War",
    },
    {
      name: "Yakuza 6",
    },
    {
      name: "Divinity Original Sin 2",
    },
  ];
  // return mockData;
  res.send({ data: mockData });
});

export default handler;

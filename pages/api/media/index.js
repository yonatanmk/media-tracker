import nc from "next-connect";
// import { folder } from "../../../db";
// import middleware from '../../../middleware/all'
import onError from "../../../middleware/error";
import mockMediaData from "../../../utils/mocks/media";

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
  res.send(mockMediaData);
});

export default handler;

import nc from "next-connect";
import { media } from "../../../db";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import mockMediaData from "../../../utils/mocks/media";
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
handler.use(middleware);
handler.get(async (req, res) => {
  // DO NOT UNCOMMENT, populating MONGODB collection
  // // for (let i = 0; i < mockMediaData.length; i++) {
  // //   const { id, ...newMedia } = mockMediaData[i];
  // //   const resp = await media.createMedia(req.db, newMedia);
  // //   console.log(`${newMedia.name} UPLOADED!`);
  // // }
  const mediaData = await media.getMedia(req.db);
  // console.log(mediaData);
  // res.send(mockMediaData);
  res.send(mediaData);
});

export default handler;

// {"filter":"example"}

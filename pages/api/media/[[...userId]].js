import nc from "next-connect";
import { media } from "../../../db";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import mockMediaData from "../../../utils/mocks/media";
// import { mediaTypes } from "../../../utils/media";

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
  // console.log('POPULATE DB')
  // for (let i = 0; i < mockMediaData.length; i++) {
  //   const { _id, ...newMedia } = mockMediaData[i];
  //   const resp = await media.createMedia(req.db, {...newMedia, userId: '60fecae2b9ef572c8c0dd971'});
  //   console.log(`${newMedia.name} UPLOADED!`);
  // }
  const userId = req.query.userId[0];

  const mediaData = await media.getMedia(req.db, userId);
  // res.send(mockMediaData);
  res.send(mediaData);
});

export default handler;

// {"filter":"example"}

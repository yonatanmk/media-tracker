import { Db } from 'mongodb'
import { nanoid } from 'nanoid'

export const getMedia = async (db: Db) => {
  return db
    .collection('media')
    // .find({
    //   createdBy: userId,
    // })
    .find()
    .toArray()

}

// export const getFolders = async (db: Db, userId: string) => {
//   return db
//     .collection('folders')
//     .find({
//       createdBy: userId,
//     })
//     .toArray()
// }

export const createMedia = async (db: Db, media: { createdBy: string; name: string }) => {
  return db
    .collection('media')
    .insertOne({
      // _id: nanoid(12),
      ...media,
      // cant return a date object as a prop in Next.js, must convert to string
      createdAt: new Date()
    })
    // .then((resp) => {
    //   console.log(resp)
    //   return resp
    // })
}
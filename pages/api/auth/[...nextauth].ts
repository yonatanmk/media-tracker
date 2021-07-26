import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
// import { connectToDB, folder, doc } from '../../../db'

export default (req, res) =>
  NextAuth(req, res, {
    session: {
        // use JWTs instead
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],

    database: process.env.DATABASE_URL,
    pages: {
      signIn: '/signin',
    },
    callbacks: {
      async session(session, user) {
        if (user) {
          session.user.id = user.sub
        }
        return session
      },
      // async jwt(tokenPayload, user, account, profile, isNewUser) {
      //   if (tokenPayload && user) {
      //     console.log('JWT USER')
      //     console.log(user)
      //     return { ...tokenPayload, id: `${user.id}` }
      //   }
      //   return tokenPayload
      // },
    },
  })
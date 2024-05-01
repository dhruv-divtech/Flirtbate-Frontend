import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        userName: { name: 'userName', label: 'Username', type: 'text', placeholder: 'Enter Username' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          // const user = await authServices.loginUser({
          //   userName: credentials?.userName ?? '',
          //   password: credentials?.password ?? ''
          // });

          // if (user && user.data) {
          //   user.data.accessToken = user.data.token;

          //   return {
          //     id: user.data.currentUserDetails.entityID.toString(),
          //     name: user.data.currentUserDetails.eventCompanyName,
          //     email: user.data.currentUserDetails.username,
          //     image: JSON.stringify(user.data)
          //   } as User;
          // }
          return null;
        } catch (e: any) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        // @ts-ignore
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      // if (token) {
      //   session.id = token.id;
      //   session.provider = token.provider;
      //   session.token = token;
      // }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_APP_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.NEXT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/'
  }
};

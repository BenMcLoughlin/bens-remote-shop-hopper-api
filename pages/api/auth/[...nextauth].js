import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'backend/prisma/prisma';
import Auth0Provider from 'next-auth/providers/auth0';
import bcrypt from 'bcryptjs';

// if (process.env.NODE_ENV !== 'development') {
//     process.env.DATABASE_URL =
//         'postgres://ecbkgjykhvnpsr:476026aa4ca7a07040c4f754d8c903907efd3d8a81825169429a55a9bc9e1525@ec2-54-145-188-92.compute-1.amazonaws.com:5432/dads1efmqn8d0h';
// }

const options = {
    providers: [
        CredentialsProvider({
            async authorize(payload) {
                if (payload.id) return payload;

                const { email, password } = payload;

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (user && passwordMatch) {
                    return user;
                } else {
                    throw new Error('invalid credentials');
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/onboard',
    },
    session: {
        jwt: true,
    },
    callbacks: {
        async signIn(user, account, profile) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return url.includes('signup') ? 'http://localhost:3000/onboard' : baseUrl;
        },
        // async session(session, user) { return session },
        // async jwt(token, user, account, profile, isNewUser) { return token }
    },
};

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'prisma/prisma';

import bcrypt from 'bcryptjs';

const options = {
    providers: [
        CredentialsProvider({
            async authorize(payload) {
                if (payload.id) {
                    return payload;
                }

                const { email, password } = payload;

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                });

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (user && passwordMatch) {
                    return user;
                }

                throw new Error('invalid credentials');
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        })
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/shopper/onboard'
    },
    session: {
        jwt: true
    },
    callbacks: {
        signIn(user, account, profile) {
            return true;
        },
        signOut() {
            return true;
        },
        redirect({ url, baseUrl }) {
            return url.includes('signup') ? '/shopper/onboard' : baseUrl;
        }
        // async session(session, user) { return session; },
        // async jwt(token, user, account, profile, isNewUser) { return token; }
    }
};

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

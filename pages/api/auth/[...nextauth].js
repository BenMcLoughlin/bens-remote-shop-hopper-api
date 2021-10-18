/* eslint-disable no-undef */
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../prisma/prisma';

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

console.log('DATABASE_URL from Server:', process.env.DATABASE_URL);

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET
    // debug: true
};
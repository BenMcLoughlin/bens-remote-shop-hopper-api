import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../prisma/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

// if (process.env.NODE_ENV !== 'development') {
//     process.env.DATABASE_URL =
//         'postgres://ecbkgjykhvnpsr:476026aa4ca7a07040c4f754d8c903907efd3d8a81825169429a55a9bc9e1525@ec2-54-145-188-92.compute-1.amazonaws.com:5432/dads1efmqn8d0h';
// } else {
//     process.env.DATABASE_URL = 'postgresql://ncmoseley:password@localhost:5432/template1';
// }

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
};
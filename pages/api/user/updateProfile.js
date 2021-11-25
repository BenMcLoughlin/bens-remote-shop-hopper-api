import prisma from 'prisma/prisma.js';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

async function updateProfile(req, res) {
    const { body } = req;

    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    console.log('userExists: ', userExists);

    if (!userExists) {
        await prisma.user.create({
            data: {
                email: body.email
            }
        });
    } else {
        await prisma.user.update({
            data: {
                name: body.name,
                birthdate: body.birthdate,
                role: body.role,
                gender: body.gender,
                size: body.size,
                buckets: body.buckets,
                location: body.location,
                favourite: body.favourite
            }
        });
    }

    // res.json(newUser);
}

export default withApiAuthRequired(updateProfile);

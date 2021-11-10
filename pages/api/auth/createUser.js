import prisma from 'prisma/prisma.js';
import bcrypt from 'bcryptjs';

export default async function createUser({ body }, res) {
    console.log('body:', body);
    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    JSON.stringify(userExists, null, 4);
    if (userExists) { res.json({ error: 'Looks like you have an account! Try logging in. ' }); }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: hashedPassword,
            birthdate: body.birthdate,
            role: body.role,
            gender: body.gender,
            size: body.size,
            buckets: body.buckets,
            location: body.location,
            favourite: body.favourite
        }
    });

    res.json(newUser);
}

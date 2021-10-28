import { hash } from 'bcrypt';
import prisma from 'backend/prisma/prisma.js';
import bcrypt from 'bcryptjs';

export default async function signup({ body }, res) {
    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    JSON.stringify(userExists, null, 4);
    if (userExists) res.json({ error: 'Looks like you have an account! Try logging in. ' });

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            role: body.role,
            password: hashedPassword,
        },
    });


    res.json(newUser);
}


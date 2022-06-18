import express from 'express';
import { prisma } from './prisma';

const routes = express.Router()



export default routes.post('/draws', async (req, res) => {
    const { date, number, country } = req.body

    const postDraw = await prisma.draws.create({
        data: {
            date,
            number,
            country
        }
    })

    return res.status(201).json(
        { data: postDraw }
    )
})

routes.get('/draws', async (req, res) => {
    const { date, number, country } = req.body

    prisma.draws.findMany({
        where: {
            date,
            country
        },
        orderBy: {
            id: 'desc',
        },
        take: 5,
    });
})
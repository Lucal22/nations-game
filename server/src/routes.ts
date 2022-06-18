import express from 'express';
import { prisma } from './prisma';

export const routes = express.Router()

routes.post('/postDraw', async (req, res) => {
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

routes.get('/getDraw', async (req, res) => {
    const { date, number, country } = req.body

    const getDraw = await prisma.draws.findMany({
        where: {
            date,
            country
        }, orderBy: {
            id: 'desc'
        },
        take: 5,
    });
    return res.status(200).json({
        getDraw
    })
})
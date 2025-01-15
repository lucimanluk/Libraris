import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient().$extends(withAccelerate());
const app = express();
app.use(cors());
const PORT = 3000;

app.get('/product/:productId', async (req, res) => {
    console.log(req.params['productId']);
    const books = await prisma.product.findUnique({
        where: {
            id: req.params['productId']
        },
    });
    res.send(books);
})

app.get('/items/type/:type', async (req, res) => {
    if (req.params['type'] === 'All products') {
        const products = await prisma.product.findMany();
        res.send(products);
    } else {
        console.log(req.params['type']);
        const products = await prisma.product.findMany({
            where: {
                type: req.params['type']
            },
        })
        res.send(products);
    }
})

app.get('/sales', async (req, res) => {
    const onSale = await prisma.product.findMany({
        relationLoadStrategy: 'join',
        where: {
            saleId: {
                not: null
            },
            available: {
                not: 0
            }
        },
        include: {
            sale: {
                select: {
                    percent: true
                }
            },
            author: true,
        },
        take: 7
    });
    res.send(onSale);
})

app.get('/best_selling', async (req, res) => {
    const best_selling = await prisma.product.findMany({
        relationLoadStrategy: 'join',
        where: {
            available: {
                not: 0
            }
        },
        include: {
            sale: {
                select: {
                    percent: true,
                }
            },
            author: true,
        },
        orderBy: {
            sold_pieces: 'desc'
        },
        take: 7
    })
    res.send(best_selling);
})

app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
})
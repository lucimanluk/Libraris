import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient().$extends(withAccelerate());
const app = express();
app.use(cors());
const PORT = 3000;

app.get('/', async (req, res) => {
    const books = await prisma.product.findFirst();
    res.send(books.price);
})


app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
})
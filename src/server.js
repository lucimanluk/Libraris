import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT=3000;

app.get('/', (req, res) => {
    res.send({users:"this shit is retarded"})
})


app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})
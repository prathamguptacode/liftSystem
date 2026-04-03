import 'dotenv/config'
import express, { type Request, type Response } from 'express'
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req:Request, res:Response) => {
    res.json({ message: 'hello world welcome to hostel management' });
});


app.listen(process.env.PORT, () => console.log(`server on port ${process.env.PORT}`))


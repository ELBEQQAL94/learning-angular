import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import {json} from "body-parser";

const app: Express = express();
const PORT = 5050;

app.use(cors());
app.use(json());

app.get('/', (req: Request, res: Response) => {
    
    res.json({
        "message": "hello"
    });
});

console.log(`Server run at: http://localhost:${PORT}`);
app.listen(PORT);
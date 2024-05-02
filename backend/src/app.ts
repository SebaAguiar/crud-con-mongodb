import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import routes from './routes';


const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
  }),
);
app.use(express.json());
app.use('/api', routes);


export default app;

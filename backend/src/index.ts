import app from './app';
import { PORT } from './constants';
import { connectToDb, productsToDb } from './utils/functions';

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
connectToDb();
productsToDb();

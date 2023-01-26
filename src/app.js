import express from 'express'
import indexRoutes from './routes/index.routes.js'



const app = express();
const port = 3000;

app.use(indexRoutes);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

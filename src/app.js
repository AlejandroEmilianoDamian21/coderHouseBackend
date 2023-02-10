import express from 'express'
import indexRoutes from './routes/index.routes.js'
import viewsRoutes from './routes/views.routes.js'
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import register from './routes/register.routes.js';



const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json())


app.engine('handlebars', handlebars.engine());
/*Indicamos en que parte del proyecto estaran las vistas*/
app.set('views', __dirname+'/views');



app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'))


app.use(indexRoutes);

app.use(viewsRoutes);

app.use(register)




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

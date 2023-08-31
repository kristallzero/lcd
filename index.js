import path from "path";
import express from "express"
import exphbs from "express-handlebars";

import mainRoutes from "./routes/main.js";
import lcdRoutes from "./routes/lcd.js";
import abyssRoutes from "./routes/abyss.js";

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.resolve('public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoutes);
app.use('/lcd', lcdRoutes);
app.use('/abyss', abyssRoutes);


app.listen(PORT, () => console.log(`localhost:${PORT}`));


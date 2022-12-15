const session = require('express-session')
const express = require("express");
const app = express()

const PORT = 4000;
const indexRouter= require('./routes/index');

const sess = {
    secret: 'ausazko hitz multzoa',
    cookie: {maxAge:20000}
}
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session(sess))
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

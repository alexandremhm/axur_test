require('dotenv').config();
const { app } = require('./app');

const PORT = process.env.PORT || 4000;

process.env.LISTNAME = 'aleluia';
process.env.LISTID = '123';

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server open on ${PORT} PORT`));

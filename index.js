const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

require('./services/passport.js')
require('./routes/authRoutes.js')(app)

app.listen(port);

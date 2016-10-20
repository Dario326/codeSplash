const express = require("express");
const app = express();
const port = Number(process.env.PORT || 8080);

app.use(express.static(`${__dirname}/public`));

app.listen(port, ()=> {
    console.log(`app is listening on ${ port }`);
})
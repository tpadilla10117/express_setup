/* Startup a Web Server with Express */

    /* 
        - 2a) We have to Declare a variable to reference the port we wish to host our server on
        - 2b) We have to import the express module using the 'require' keyword **HINT: It may be a good idea to save it in a variable...**

        - 2c) Invoke the express server once it is imported (require)
    
    */

        const express = require('express');

        const app = express();
        const port = 3000;

        app.get('/', (req, res) => {
            res.send("Hello World!  I setup my first endpoint!")
        });

        app.listen(port, () => {
            console.log(`Example app listening on port: ${3000}!!!`)
        });
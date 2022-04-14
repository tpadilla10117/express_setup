/* Startup a Web Server with Express */

    /* 
        - 2a) We have to Declare a variable to reference the port we wish to host our server on
        - 2b) We have to import the express module using the 'require' keyword **HINT: It may be a good idea to save it in a variable...**

        - 2c) Invoke the express server once it is imported (require)
    
    */

    /* TODO: File imports and variable referencing: */
        const express = require('express');

        const app = express();
        const port = 3000;

    /* TODO: Setting up basic middleware: */
        app.use(function (req, res, next) {
            console.log('<____Body Logger START___>')
            console.log(req.body);
            console.log("<____Body Logger END___>")
            next();
        });

        app.use('/api', (req, res, next) => {
            console.log("A request was made to the /api endpoint!")
            next();
        });

        app.get('/api', (req, res, next) => {
            console.log("A get request was made to the /api endpoint!");
            res.send({ message: 'Successfully reached the /api endpoint!'})
        })

    /* TODO: Setting up basic routing with a GET request: */
        app.get('/', (req, res) => {
            res.send("Hello World!  I setup my first endpoint!")
        });

    /* TODO: Using Node.js server.listen() method to connect our server to a specified port: */
        app.listen(port, () => {
            console.log(`Example app listening on port: ${3000}!!!`)
        });
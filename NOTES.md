<!-- Git repository and NPM Project Setup: -->
<!-- **TODO: Assumes git already installed {https://git-scm.com/book/en/v2/Getting-Started-Installing-Git}
 & github account already created-->

    1) Setup a new npm package with: `npm init -y`
       Reference: {https://docs.npmjs.com/cli/v8/commands/npm-init}

    2) Create an empty Git repository by entering the following command on the CLI:
        `git init`

    3) Add your file contents and stage for a commit (captures a snapshot of the project's currently staged changes):
        `git commit -m "Write a descriptive, short note of your file changes here" `

    4) Assuming your GitHub repo has been established, navigate to your GitHub account and create a remote repository called 'express_setup'

    5) Return to the CLI and attach your remote repository (repo) by entering the following command :
        `git remote add origin https://github.com/YOUR_USER_NAME/express_setup.git `

    6) Push your local changes to the remote repo :
        ` git push -u origin main `


<!-- Setting Up Express: -->
<!-- TODO: **Assumes Node.js already installed** {https://expressjs.com/en/starter/installing.html} -->

    <!-- 1) Install nodemon {https://www.npmjs.com/package/nodemon} for your application with the following command in the CLI:  -->
        ` npm i nodemon ` 

    <!-- 2) Install express, our web-server with the following command in the CLI:  -->
        ` npm install express `

    <!-- 3) Startup a Web Server with Express -->
            -  create a new file called index.js
        /* 
            - 3a) We have to Declare a variable to reference the port we wish to host our server on
            - 3b) We have to import the express module using the 'require' keyword **HINT: It may be a good idea to save it in a variable...**

            - 3c) Invoke the express server once it is imported (require).  Reference the invocation in a variable called 'app'

    <!-- 4) Middleware -->
        - Reference: {https://expressjs.com/en/guide/writing-middleware.html#:~:text=Middleware%20functions%20are%20functions%20that,middleware%20succeeding%20the%20current%20middleware.}

        - The 'server.use' method tells our server to always call this function
        - It passes in:
            - a 'request' (req) object built from the client's request
            - a 'response' (res) object
            - the 'next' function, which moves forward to the next middleware
            
     <!-- 5) Routing -->

    <!-- 6) Opening for Business (server.listen() ) -->
            - 6a) We have to tell our new server to listen on the path (port) that we specified.  We can accomplish this with the method below:

                    EG. 
                        server.listen(PORT, () => {
                            console.log('The server is up on port: ', PORT)
                        });

                - 6b) Use the above abstraction to listen for the variable you created to reference your port.
                    - The listener should output a console.log() with a message such as: " The server is up on port: ', PORT "

                - 6c) We're going to write a new script in our package.json file to run in the CLI.  This command will allow us to start up our express server.  A successful start-up will output the message you typed in the previous step via nodemon in the terminal / cli that you enter it in

                    - 1) Navigate to package.json
                    - 2) Under "Scripts", add the following script and save your file:
                        //TODO: Example below:

                        "scripts": {
        
                            "start:dev": "nodemon index.js"
                        },

                    - 3) Run the command 'npm run start:dev' in a new terminal / CLI.  What do you see!?

        
        */
<!--  -->

1) `npm init -y`


<!-- Git repository and NPM Project Setup: -->
<!-- **TODO: Assumes git already installed {https://git-scm.com/book/en/v2/Getting-Started-Installing-Git}
 & github account already created-->

    1) Setup a new npm package with: `npm init -y`
       Reference: {https://docs.npmjs.com/cli/v8/commands/npm-init}

    2) Create an empty Git repository by entering the following command on the CLI:
        `git init`

    3) Add your file contents and stage for a commit (captures a snapshot of the project's currently staged changes):
        `git commit -m "Write a descriptive, short note of your file changes here" `

    4) Assuming your GitHub repo has been established, navigate to your GitHun account and create a remote repository called 'express_setup'

    5) Return to the CLI and attach your remote repository (repo) by entering the following command :
        `git remote add origin https://github.com/YOUR_USER_NAME/express_setup.git `

    6) Push your local changes to the remote repo :
        ` git push -u origin main `


<!-- Setting Up Express: -->

    <!-- 1) Install express, our web-server with the following command:  -->
        npm install express

    <!-- 2) Startup a Web Server with Express -->

        /* 
            - 2a) We have to Declare a variable to reference the port we wish to host our server on
            - 2b) We have to import the express module using the 'require' keyword **HINT: It may be a good idea to save it in a variable...**

            - 2c) Invoke the express server once it is imported (require)
        
        */
## Description

This will start up a sample vendor app written in java on port 4040.

## How to use

To use make sure you have `mvn` installed on your local machine and that the `run` bash script has executable permission.

Then simply run `./run` and this should install dependencies, run tests and run the project if the tests pass.

Any errors will be printed and the project will not run if tests fail.

After this command succeeds simply go to localhost:4040 and the java vendor app should be up and running


### Setting up local posgres server for vendor apps
1. download the PG admin software from https://www.pgadmin.org/ an exe is not included in this repo in order to keep the versions up to date.
2. Add the PostgreSQL bin directory path to the PATH environmental variable.
3. Open the psql command-line tool:
   In the Windows Command Prompt, run the command:
   psql -U userName
   Enter your password when prompted (set up with pg admin).
4. connect to the database structure in repo \c databasename
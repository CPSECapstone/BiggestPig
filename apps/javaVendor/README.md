## Description

This will start up a sample vendor app written in java on port 4040.

## How to use

To use make sure you have `mvn` installed on your local machine and that the `run` bash script has executable permission.

Then simply run `./run` and this should install dependencies, run tests and run the project if the tests pass.

Any errors will be printed and the project will not run if tests fail.

After this command succeeds simply go to localhost:4040 and the java vendor app should be up and running

### Debugging
If compilation fails via the run script, make sure the are no carriage ruturns in the run script and make sure you're using Java 9 or above

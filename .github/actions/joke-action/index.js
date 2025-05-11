const core = require('@actions/core');
const request = require('request-promise');

async function run() {
    try {
        // Get the input parameter
        const nameToGreet = core.getInput('who-to-greet');
        console.log(`Hello ${nameToGreet}!`);

        // Get a random joke
        const joke = await request({
            uri: 'https://official-joke-api.appspot.com/random_joke',
            json: true
        });

        // Set the joke as an output
        core.setOutput('joke', joke.setup + ' ' + joke.punchline);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run(); 
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        for (const mainDetail of ['number', 'url', 'diff_url', 'state', 'title', 'body']) {
            core.setOutput(`pr_${mainDetail}`, github.context.payload.pull_request[mainDetail]);
        }
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();

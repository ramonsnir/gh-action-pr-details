const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        for (const mainDetail of ['number', 'url', 'diff_url', 'state', 'title', 'body']) {
            core.setOutput(`pr_${mainDetail}`, github.context.payload.pull_request[mainDetail]);
        }

        // Can the code below be replaced with `github.context.payload.pull_request.head.ref`?
        const token = core.getInput('repo-token');
        const { owner, repo } = github.context.repo;
        const octokit = new github.GitHub(token);
        const response = await octokit.pulls.get({
            owner: owner,
            repo: repo,
            pull_number: github.context.payload.pull_request.number
        });
        core.setOutput('branch', response.data.head.ref);
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();

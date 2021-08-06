# Pull Request Details

A github action that retrieves the pull request details and sets them in the output for other actions to use.

# Usage

```yaml
- uses: ramonsnir/gh-action-pr-details@1.0.3
  id: vars
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.vars.outputs.pr_title }}
- run: echo ${{ steps.vars.outputs.pr_url }}
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

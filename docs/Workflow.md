<!-- TOC -->

- [Contribution Workflow 🏭](#contribution-workflow-)
  - [Branches in our project](#branches-in-our-project)
  - [How we merge PRs](#how-we-merge-prs)
  - [How we publish releases](#how-we-publish-releases)

<!-- /TOC -->

# Contribution Workflow 🏭

We at Milan believe in industry standards and super organized and clean workflow. Here's how your contributions will be handled.

## Branches in our project 

We have 2 important branches in our repository - `main` and `beta`.

- **`main`** is the production branch. It is the branch that is deployed to production. It is protected and only maintainers are allowed to push to it.
- **`beta`** is the development branch. It is the branch that is deployed to staging. The PRs are merged into this branch first.

- Pull requests must be made to the **`beta`** branch. A label of https://github.com/MilanCommunity/Milan/labels/Beta%20Release will be added to the PR automatically.

- It is important to understand that it might take 1-3 days for a PR to be merged to main. This is because we have to test the changes, and make sure that everything is working fine.


## How we merge PRs

1. Follow  [PR Guidelines](https://github.com/MilanCommunity/Milan/blob/main/CONTRIBUTING.md#creating-a-pull-request-) to raise a PR. We wait upto a month before considering it inactive/ready for review. Maintainers and contributors both have other works to do too. 

2. Maintainers will review, request changes, and approve the PR accordingly. If changes are requested do click on the `Resolve Conversation` button to let the maintainers know that you have made the changes. Be paitent at all times.

3. Once the PR is approved, it will be merged into the **`beta`** branch. A label of https://github.com/MilanCommunity/Milan/labels/%F0%9F%A5%97%20status%3A%20ready%20for%20merge will be added & merged in due time. 


## How we publish releases

- Once the changes are merged to `beta` branch, a new `draft release` will be created. 
- The release will be published in due time depending upon how important they are. 
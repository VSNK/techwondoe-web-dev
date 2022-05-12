# [Techwondoe Web Developer Intern Assignment](https://fluffy-boba-70c97a.netlify.app/)

## Deployed Site Link: https://fluffy-boba-70c97a.netlify.app/

## Steps to setup and run the app in local machine

1. Clone the repo to your local machine using `git clone repo-url`
2. Install repositories required using `yarn install`
3. Start the development server using `yarn start`
4. Open this link to view the output - http://localhost:3000

## Steps to deploy in Netlify

1. After cloning the repo, push the code to your own repository.
2. Create a Netlify account.
3. Goto the Sites > Add new site > Import an existing project.
4. Connect to respective Git provider.
5. Choose the repository.
6. In the settings change the build command from `yarn build` to `CI=false yarn build`.
7. Click on Advanced settings and add the environment variables `REACT_APP_SPACE_ID="your-contentful-space-id"` and `REACT_APP_ACCESS_TOKEN="your-contentful-access-token"`.
8. Click on deploy site to deploy it online.

## Steps to use Storybook

-   Run `yarn storybook` and open this link http://localhost:6006 in any browser.

## Non Functional Requirements

-   [x] Each section of the homepage must be a separate react component.
-   [x] No hardcoding of text in react app. All the content (text and images) must be coming from a Headless CMS through its API (Example API reference).
-   [x] Enable theming with just 2 colors i.e primary and secondary and font family.
-   [x] Create Typography components for H1, H2, Paragraph
-   [x] Use Storybook for 3 UI components
    -   Button - Primary and secondary
    -   Typography - H1, H2, Paragraph
    -   Sub component of the Why Choose us section with icon, title and paragraph.
-   [x] Prettier and Linter configuration
-   [x] Host the page on Netlify, Vercel or another provider.
-   [x] Readme file on how to deploy and run the service.
-   [x] Add a checklist of the above items on ReadMe and check all the items before submitting the assignment.

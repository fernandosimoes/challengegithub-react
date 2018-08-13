To run this project just execute the following commands:

1. `yarn` or `npm install`
2. `yarn start` or `npm run start`

if the credentials give problem, follow the intructions in the application  =)


## What is expected
An app that connect to the Github API, and list all public repositories from an user, and the last commits for the repositories. [ x ] 

## Tasks

### 1. Connect to github API [ x ] 
Connect to Github API, and list all public repositories from your user. Alternatively use the `reactjs` user.
Create a page that list the public repositories.

### 2. Load commits [ x ] 
After a repository is clicked, the user must be shown a page with the last 20 commits on that repository, also a search field for filtering the commits by the term inserted into the field.

```
Feel free to choose if you are going to use the Rest API or the GraphQL API, and what subset of information you gonna show into each page.
```

## Bonus Tasks
- Use some modern css solution (CSS Modules, Styled-components, etc); [ x ] 
- Endless scrolling for the commits page; [ ] 
- Make it possible to change the order the repositories are shown (By stars, name, etc) [x];
- Component Library (Storybook.js, Styleguidist, etc);[ ] started but not finished
- Server side rendering.[ ] 

# Solution
- Use `reactjs`, you can start with a simple `create-react-app` structure and work from there;
- Use ES6+ features and write down in the readme why you used and for what, for at least 2 of them;
- Write unit tests and any other test you may find helpful or important to have;
- Be creative.

# Solutions Used:
  1. Map to render an array of items because map needs a return.
  2. fecth api - native javascript calls to get items from web, like a call to an ajax
  3. spred - to keep original state
  4. redux - to center state changes
  5. scss and a flexbox framework [Bulma](https://bulma.io/) yes like Dragon ball =)
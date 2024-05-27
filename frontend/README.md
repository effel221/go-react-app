# Simple Card game React frontend app

To run app first needed to have, or install <strong>Nodejs</strong> (20 + version)

Command to run in root of applications to install dependencies:

```sh
npm install
```
or
```sh
yarn install
```

### Run project in development mode
then to run server:
```sh
npm run dev
```
or
```sh
yarn dev
```
Link to application in browser:

<h6>http://localhost:5173/</h6>

### Run project in production mode
runs next build to build the application for production usage:
```sh
npm run build
```
or
```sh
yarn build
```

## Running Tests
```sh
npm run test
```
or
```sh
yarn test
```

## Project folder structure

- In root of frontend folder located mostly settings/configurations files for node, typescript, gitignore etc..
- <strong>Public folder</strong> collects public files, such as favicon, apple icons, manifest..
- <strong>Src folder</strong> is main folder, which contain React components structure, styles and common used js functions
- - <strong>Assets folder</strong> was created to collect fonts, images, styles, files for page decoration and styling
- - <strong>Base folder</strong> folder for "atomic", small components, which  will be used and reused in bigger components and pages.
- - <strong>CardsOverview, Controls, Details folders</strong> biggest, most important React components 
- - <strong>Lib folder</strong> contains important and reusable functions and settings for libraries and components
- - <strong>Stores folder</strong> redux stores for different properties
- App/main/index - main React files to set up for all pages.

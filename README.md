# Exercise ASTRO Channel

This project exercise to build a front end based on https://content.astro.com.my/ \
Created this using ReactJS as Astro using React in their front end.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `docker build -t astro:dev . `

This will build the image for the docker

### `docker run -d -p 80:3000 astro:dev`
This will run the docker images in your localhost
Open [http://localhost](http://localhost) to view it in the browser.

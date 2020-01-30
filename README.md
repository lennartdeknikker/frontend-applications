# Indonesian Ancestor Statues Application
[![Netlify Status](https://api.netlify.com/api/v1/badges/c4d10ccf-41ae-4b4f-8b1b-8bc978f6786d/deploy-status)](https://app.netlify.com/sites/frosty-bardeen-0cc821/deploys)

This application is made as an assignment for the course Frontend Applications for [Communication & Multimedia Design](https://www.cmd-amsterdam.nl/english/) at the University of Applied Sciences in Amsterdam. In cooperation with the [Museum of Volkenkunde](https://www.volkenkunde.nl/en), the assignment entails building an application that makes use of their newly published collection database using [Angular](https://angular.io/) as a framework. 

The application will show all their Indonesian Ancestor Statues and information about those. Check out the [wiki](https://github.com/lennartdeknikker/frontend-applications/wiki/Application-design) for more pictures of the initial product design and additional information on the building process and featured components.

![preview](https://github.com/lennartdeknikker/frontend-applications/blob/master/wiki-resources/design/ontwerp4.png)

## Table of contents
* [Framework](#framework)
* [features](#features)
* [installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Screenshots](#screenshots)
* [References](#references)
* [Wiki](#wiki)
* [Used data](#data)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

## Framework
- [Angular framework](https://angular.io/)

## Features
* [x] Obtain collection data from the Volkenkunde Museum
* [ ] Use localstorage to store the collection data

## Installation
First, clone the repository into a folder with `git clone https://github.com/lennartdeknikker/frontend-applications.git`
Then, run `npm install -g @angular/cli` to install the Angular CLI
lastly, run `npm install` to install the required NPM Packages

## Usage
1. clone this repo using `git clone https://github.com/lennartdeknikker/frontend-data.git`
2. Use `npm install` to install dependencies.
3. You can get the application running using `npm run dev`. or build the application using `npm run build`.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Tests

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Screenshots
Users can browse the map of Indonesia, search for ancestor statues and see those projected on the map.
![screenshot1](https://github.com/lennartdeknikker/frontend-applications/blob/master/wiki-resources/design/ontwerp.png)
To get more detail on certain objects, users can click the different aresas to see what specific objects are found there.

![screenshot7](https://github.com/lennartdeknikker/frontend-applications/blob/master/wiki-resources/design/ontwerp4.png)

To see more screenshots showing all functionalities in depth, check out [this page](https://github.com/lennartdeknikker/frontend-applications/wiki/Screenshots) in the wiki.

## References
- This application makes use of [SPARQL Queries](https://en.wikipedia.org/wiki/SPARQL) to get it's data.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [scss](https://sass-lang.com/)
- [Angular framework](https://angular.io/)

## Wiki
The whole process of building the application and more in depth information on the queries that obtain the used data is found in [the wiki](https://github.com/lennartdeknikker/frontend-applications/wiki).

## Data
The data used in this application is provided by the [Museum Volkenkunde](https://www.volkenkunde.nl/). They recently published their collection data. The data is obtained using [SPARQL](https://en.wikipedia.org/wiki/SPARQL) queries. The query used in this example is part of the code and can easily be changed to obtain different data to plot on the map. More information on the used data and queries can be found in the [wiki](https://github.com/lennartdeknikker/frontend-applications/wiki/)

## Contributing
Please, feel free to contribute or open new issues.

## Credits
Credits to our teachers [Laurens](https://github.com/Razpudding) and [Danny](https://github.com/dandevri) for helping out when needed and credits to all the help provided by the [Museum of Volkenkunde](https://www.volkenkunde.nl/en)

Special thanks to our Angular team members
- [Marc Kunst](https://github.com/MarcKunst)
- [Mohamad Al Ghorani](https://github.com/MohamadAlGhorani)
- [Patrick van Everdingen](https://github.com/patrick-ve)
- [Marissa Verdonck](https://github.com/marissaverdonck)

## License
Unless stated otherwise, code is [MIT](https://github.com/lennartdeknikker/frontend-applications/blob/master/LICENSE) © [lenn4RT](http://www.lenn4rt.com).



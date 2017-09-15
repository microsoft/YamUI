# YamUI [![Travis](https://img.shields.io/travis/Microsoft/YamUI.svg)](https://travis-ci.org/Microsoft/YamUI)
UI Component Framework for Yammer.com. This is built with React on top of [Fabric](https://dev.office.com/fabric#/components/) components. Unit tests with [Jest](https://facebook.github.io/jest/), isolated development environment + documentation with [ReactStorybook](https://github.com/storybooks/storybook), visual diff regression with [BackstopJS](https://garris.github.io/BackstopJS/). Visual diff tasks run within a [Docker](https://www.docker.com/) container to ensure consistency between local dev environments and CI.

## Installation
* Clone this repo
* `cd YamUI`
* `yarn install`

To run visual diff regression tests:
* Install docker from https://docs.docker.com/docker-for-mac/install/
* Create an alias `y` in your `~/.zshrc` or `~/.bashrc` file for the `yarn-docker` executable, like this: `alias y="./yarn-docker"`. Visual-diff tasks `test` and `test:visual` need to run in Docker via the `y` alias -- `y test` and `y test:visual`.

A note about Docker images: they grow until your hard drive fills up, stopping you from working. Ideally you have a very large hard drive -- like 500GB. If you have only 250GB you can expect to have to clear images every week or so.

To view your Docker container size on Mac OS: `ls -lha ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2`

You can clear space with commands like `docker rmi $(docker images -a -q)` (remove all images) or `docker rm $(docker ps -a -f status=exited -q)` (remove all exited containers), or you can remove the container from disk, directly (on Mac OS): `rm ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2`

## Development
### Start up the dev server:
* `yarn start:dev` and visit [localhost:5555](http://localhost:5555/)

### Build some components
* Develop components in the `/src/components` directory.
* Create "stories" for the Storybook app in `/stories`. These stories are important because they document how components should be used and what options/configurations they accept. These stories will also be used in visual diff regression tests to ensure new changes are deliberate and approved before PRs are merged.
* Include a README.md file in your component's directory, and include it in the stories.
* The dev tasks will copy and compile individual files into the `/dist` directory, then Storybook will pick up those changes and automatically update the app in your browser using Hot Module Replacement.

### Focus on unit tests
* `yarn start:test` will start Jest in watch mode, showing passing status and a covereage report. The CLI task remains active and will re-test automatically as you make changes.
* `yarn report:unit` will open the latest test coverage report in your browser. The reports let you browse into specific tests and get details about each line, which can be helpful when you're having trouble getting test coverage.

### Run visual diff regression tests with BackstopJS
* `y test:visual` will compile the components, build+export a static version of the Storybook app, start a dev server, take screenshots of each Storybook story, and fail if there are visual changes from the last approved screenshots. This will fail on brand new stories because they won't have reference images. Unless you're developing on a Linux computer, this task must run within the Docker container via the `y` shortcut. Running via `yarn` on Mac or Windows will use your OS version of PhantomJS Webkit and will fail with suble visual differences. Running in the Docker Linux container ensures consistent screenshots between all development evironments and CI.
* `yarn report:visual` will open the most recent visual test you've run in your browser. This is helpful if you have failing visual tests and want to see exactly what is wrong.
* `yarn visual:approve` will approve your latest test images and overwrite the previous reference images. Use this when you are deliberately changing a component or its story and you have manually verified that the new visual changes are correct.

### Test all the things
* `y test` will run all validations - linting, unit tests and visual diff regression tests. If this passes you should be all good to go.
* `yarn report` will open latest results from both Jest unit tests and Backstop visual diff regression tests.

### Adding icons
1. Prepare source SVG and React SVG following [these instructions](https://github.com/Microsoft/YamUI/tree/master/assets/Icons)
2. Export new React SVG from src/components/Icon/icons/index.ts using the filename as the label
3. Use the icon via it's label `<Icon icon="plus" />`


## Using YamUI in your own app
### Importing the baseline CSS
Import `yamui/dist/yamui-base.css` into your app. You could link to it directly before your own CSS, or import it through JS/CSS and include it at the top of your CSS bundle. This file is currently about 4kb minified+gzipped. This is a requirement as YamUI expects to own the baseline styles of the page.

### Using components
Each component is compiled from its TypeScript source into `yamui/dist/components`. This allows you to import the individual components you need and keep your bundle size smaller. Note that each component may import its own CSS and other JS dependencies so you may need to adjust your build process to accommodate.

Example importing a Button component:
```
import Button, { ButtonSize, ButtonColor } from 'yamui/dist/components/Button';
```

Example using a Button component:
```
<Button size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} text="Click me!" />
```


## Roadmap

The YamUI project is currently in a pre-release state. We are building out the components and features we need for Yammer.com to meet our specific UX Design guidelines.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Licenses

All files on the YamUI GitHub repository are subject to the MIT license. Please read the LICENSE file at the root of the project.

Note that we depend on [Fabric](https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react) for fonts. Usage of the fonts and icons referenced in YamUI is subject to the terms of the [assets license agreement](https://static2.sharepointonline.com/files/fabric/assets/license.txt).

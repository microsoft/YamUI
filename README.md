# YamUI [![Travis](https://img.shields.io/travis/Microsoft/YamUI.svg)](https://travis-ci.org/Microsoft/YamUI)

This is the UI component framework for [Yammer.com](https://www.yammer.com/).

It is built with [React](https://reactjs.org/) on top of [Office UI Fabric](https://dev.office.com/fabric#/components/) components. Unit tests are run through [Jest](https://facebook.github.io/jest/), isolated development environment and documentation is provided by [Storybook](https://github.com/storybooks/storybook), and visual diff regression is done with [BackstopJS](https://garris.github.io/BackstopJS/). Visual diff tasks run within a [Docker](https://www.docker.com/) container to ensure consistency between local development environments and CI.

## Using YamUI in your own app

If necessary, add YamUI to your project.

```
npm install --save yamui
```

### Importing the baseline CSS

Import `yamui/dist/yamui-base.css` into your app. You could link to it directly before your own CSS, or import it through JS/CSS and include it at the top of your CSS bundle. This file is currently about 4kb minified+gzipped. This is a requirement as YamUI expects to own the baseline styles of the page.

### Using components

Each component's source folder has a README which documents the API and provides example use. For example, Button's README is here: [/src/components/Button](https://github.com/Microsoft/YamUI/tree/master/src/components/Button)

You can also view component READMEs through the [Storybook app](https://microsoft.github.io/YamUI/) in the component view bottom pane.

Each component is compiled from its TypeScript source into `yamui/dist/components`. This allows you to import the individual components you need and keep your bundle size smaller. Note that each component may import its own CSS and other JS dependencies so you may need to adjust your build process to accommodate.

Example importing a `Button` component:

```js
import Button, { ButtonSize, ButtonColor } from 'yamui/dist/components/Button';
```

Example using a `Button` component:

```js
<Button size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} text="Click me!" />
```

## Installation

```sh
git clone https://github.com/Microsoft/YamUI.git
cd YamUI
yarn install
```

To run visual diff regression tests:

* Install Docker ([Docker for macOS](https://docs.docker.com/docker-for-mac/install/) / [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)).
* Create an alias `y` in your `~/.zshrc` or `~/.bashrc` file for the `yarn-docker` executable that looks like `alias y="./yarn-docker"`. Visual diff tasks need to run in Docker via the `y` alias, e.g. `y test` and `y test:visual`.

It's best to have at least 30GB of free space for Docker containers and images. If you find that Docker is taking up too much space, try the following:

* View your Docker container size (on macOS): `ls -lha ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2`
* Clear space:
  * Remove all images: `docker rmi $(docker images -a -q)`
  * Remove all exited containers: `docker rm $(docker ps -a -f status=exited -q)`
  * Remove everything from disk, directly (on macOS): `rm ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2`

## Development

### Starting up the dev server

* `yarn start:dev` and visit [localhost:5555](http://localhost:5555/)

### Building some components

* Develop components in the `/src/components` directory.
* Create "stories" for the Storybook app in `/stories`. These stories are important because they document how components should be used and what options/configurations they accept. These stories will also be used in visual diff regression tests to ensure new changes are deliberate and approved before PRs are merged.
* Include a `README.md` file in your component's directory, and include it in the stories.
* The dev tasks will copy and compile individual files into the `/dist` directory, then Storybook will pick up those changes and automatically update the app in your browser using Hot Module Replacement.

### Writing unit tests

* `yarn start:test` will start Jest in watch mode, showing passing status and a coverage report. The CLI task remains active and will re-test automatically as you make changes.
* `yarn report:unit` will open the latest test coverage report in your browser. The reports let you browse into specific tests and get details about each line, which can be helpful when you're having trouble getting test coverage.

### Runing visual diff regression tests

* `y test:visual` will compile the components, build+export a static version of the Storybook app, start a dev server, take screenshots of each Storybook story, and fail if there are visual changes from the last approved screenshots. This will fail on brand new stories because they won't have reference images. Unless you're developing on a Linux computer, this task must run within the Docker container via the `y` shortcut. Running via `yarn` on Mac or Windows will use your OS version of PhantomJS Webkit and will fail with subtle visual differences. Running in the Docker Linux container ensures consistent screenshots between all development environments and CI.
* `yarn report:visual` will open the most recent visual test you've run in your browser. This is helpful if you have failing visual tests and want to see exactly what is wrong.
* `yarn visual:approve` will approve your latest test images and overwrite the previous reference images. Use this when you are deliberately changing a component or its story and you have manually verified that the new visual changes are correct.

### Testing all the things

* `y test` will run all validations - linting, unit tests and visual diff regression tests. If this passes you should be all good to go.
* `yarn report` will open latest results from both Jest unit tests and Backstop visual diff regression tests.

### Adding icons

* Prepare source SVG and React SVG following [these instructions](https://github.com/Microsoft/YamUI/tree/master/assets/Icons).
* Export new React SVG from `src/components/Icon/icons/index.ts` using the filename as the label.
* Use the icon via its label `<Icon icon="plus" />`.

## Releasing a new version

Travis is setup to automatically publish tagged releases to the npm registry. So if you want to release a new version of YamUI, just do the following:

```sh
git checkout -b awesome-release-branch
npm version patch "Release version %s!"
git push
```

Then create a pull request, and once that gets reviewed and merged into master, Travis will publish your new version to npm!

## Roadmap

The YamUI project is currently in a pre-release state. We are building out the components and features we need for [Yammer.com](https://www.yammer.com/) to meet our specific UX Design guidelines.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit <https://cla.microsoft.com>.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Licenses

All files on the YamUI GitHub repository are subject to the MIT license. Please read the LICENSE file at the root of the project.

Note that we depend on [Fabric](https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react) for fonts. Usage of the fonts and icons referenced in YamUI is subject to the terms of the [assets license agreement](https://static2.sharepointonline.com/files/fabric/assets/license.txt).

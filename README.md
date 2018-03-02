# YamUI [![Travis](https://img.shields.io/travis/Microsoft/YamUI.svg)](https://travis-ci.org/Microsoft/YamUI)

This is the UI component framework for [Yammer.com](https://www.yammer.com/).

It is built with [React](https://reactjs.org/) on top of [Office UI Fabric](https://dev.office.com/fabric#/components/) components. Unit tests are run through [Jest](https://facebook.github.io/jest/), isolated development environment and documentation is provided by [Styleguidist](https://react-styleguidist.js.org/), and visual diff regression is done with [Puppeteer](https://github.com/GoogleChrome/puppeteer) and [pixelmatch](https://github.com/mapbox/pixelmatch). Visual diff tasks run within a [Docker](https://www.docker.com/) container to ensure consistency between local development environments and CI.

## Using YamUI in your own app

If necessary, add YamUI to your project.

```sh
npm install --save yamui
```

### Importing the baseline CSS

Import `yamui/dist/yamui-base.css` into your app. You could link to it directly before your own CSS, or import it through JS/CSS and include it at the top of your CSS bundle. This file is currently about 4kb minified+gzipped. This is a requirement as YamUI expects to own the baseline styles of the page.

### Using components

You can read all documentation for our components in our [living styleguide](https://microsoft.github.io/YamUI/).

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
npm install
```

To run visual diff regression tests:

* Install Docker ([Docker for macOS](https://docs.docker.com/docker-for-mac/install/) / [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)).
* Create an alias `y` in your `~/.zshrc` or `~/.bashrc` file for the `yamui-docker` executable that looks like `alias y="./yamui-docker"`. Visual diff tasks need to run in Docker via the `y` alias, e.g. `y run test` and `y run test:visual`.

It's best to have at least 30GB of free space for Docker containers and images. If you find that Docker is taking up too much space, try the following:

* View your Docker container size (on macOS): `ls -lha ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2`
* Clear space:
  * Remove all images: `docker rmi $(docker images -a -q)`
  * Remove all exited containers: `docker rm $(docker ps -a -f status=exited -q)`
  * Remove everything from disk, directly (on macOS): `rm ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2`

## Development

### Starting up the dev server

* `npm run start` and visit [localhost:5555](http://localhost:5555/)

### Building some components

* `npm run create:component` and provide the necessary information.
* Tweak `<ComponentName>.md` file in your component's directory with usage examples. These examples are important because they document how components should be used and what options/configurations they accept. These examples will also be used in visual diff regression tests to ensure new changes are deliberate and approved before PRs are merged.
* The dev server will pick up any changes you make to components, and automatically update the app in your browser using Hot Module Replacement.

### Writing unit tests

* `npm run watch:jest` will start Jest in watch mode, showing passing status and a coverage report. The CLI task remains active and will re-test automatically as you make changes.

### Running visual diff regression tests

* `y run test:visual` will compile the components, build+export a static version of the styleguide, start a dev server, take screenshots of each example, and fail if there are visual changes from the last approved screenshots. Unless you're developing on a Linux computer, this task must run within the Docker container via the `y` shortcut. Running via `npm run` on Mac or Windows will use your OS version of PhantomJS Webkit and will fail with subtle visual differences. Running in the Docker Linux container ensures consistent screenshots between all development environments and CI.
* `npm run test:visual:approve` will approve your latest test images and overwrite the previous reference images. Use this when you are deliberately changing a component or its examples and you have manually verified that the new visual changes are correct.

### Testing all the things

* `y run test` will run all validations - linting, unit tests and visual diff regression tests. If this passes you should be all good to go.

### Adding icons

* Prepare source SVG and React SVG following [these instructions](https://github.com/Microsoft/YamUI/tree/master/assets/icons).

## Releasing a new version

If you want to release a new version of YamUI, do the following to create a release branch. Replace version_type with `major`, `minor`
or `patch` as appropriate, based on [SemVer](https://semver.org):-

```sh
git checkout -b awesome-release-branch
npm version version_type -m "Release version %s"
git push
git push --tags
```

This will add a commit that updates `package.json` and `package-lock.json` with the updated version number.

Once this branch's PR is merged to master, do the following to publish the release so it can be consumed from npm:-

```sh
# requires an npm user with permissions to release
git checkout master
git pull
npm install
npm publish
```

## Roadmap

The YamUI project is currently in a pre-release state. We are building out the components and features we need for [Yammer.com](https://www.yammer.com/) to meet our specific UX Design guidelines.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit <https://cla.microsoft.com>.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Licenses

All files on the YamUI GitHub repository are subject to the MIT license. Please read the LICENSE file at the root of the project.

Note that we depend on [Fabric](https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react) for fonts. Usage of the fonts and icons referenced in YamUI is subject to the terms of the [assets license agreement](https://static2.sharepointonline.com/files/fabric/assets/license.txt).

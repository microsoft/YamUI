/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const rename = require('gulp-rename');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  paths() {
    this.destinationRoot('./src/components/');
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s the name of your new component? (e.g. MyNewComponent)',
      },
    ];

    return this.prompt(prompts).then(props => {
      const { name } = props;
      const className = `y-${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
      this.props = { name, className };
    });
  }

  writing() {
    const { name } = this.props;

    this.registerTransformStream(
      rename(file => {
        // eslint-disable-next-line no-param-reassign
        file.basename = file.basename.replace('Component', name);
        return file;
      }),
    );

    this.fs.copyTpl(this.templatePath('*'), this.destinationPath(`${name}/`), this.props);
  }
};

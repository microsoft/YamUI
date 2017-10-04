/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Dropdown, { DropdownOptionKey } from '../components/Dropdown';
import Block from '../components/Block';
import { FixedGridRow, FixedGridColumn } from '../components/FixedGrid';

const readme = require('../components/Dropdown/README');

const options = [
  { key: 'A', text: 'Option a' },
  { key: 'B', text: 'Option b' },
  { key: 'C', text: 'Option c' },
];

interface ControlledDropdownState {
  selectedKey?: DropdownOptionKey;
}

class ControlledDropdown extends React.PureComponent<{}, ControlledDropdownState> {
  constructor() {
    super();
    this.state = {};

    // TODO: Use @autobind decorator
    this.onChanged = this.onChanged.bind(this);
  }

  public render() {
    const { selectedKey } = this.state;

    return (
      <Dropdown
        options={options}
        placeHolder="Please Select"
        selectedKey={selectedKey}
        onChanged={this.onChanged}
      />
    );
  }

  private onChanged(key: DropdownOptionKey) {
    action('dropdown changed')(key);
    this.setState({ selectedKey: key });
  }
}

storiesOf('Dropdown', module)
  .addDecorator(withReadme(readme))
  .add('basic uncontrolled', () => (
    <div>
      <Block bottomSpacing="large">
        In this example, the state of the Dropdown is maintained within the component, rather than
        being set using `selectedKey`.
      </Block>
      <Dropdown
        placeHolder="Please Select"
        options={options}
        onChanged={action('dropdown changed')}
      />
    </div>
  ))
  .add('basic controlled', () => (
    <div>
      <Block bottomSpacing="large">
        In this example, the state of the dropdown is controlled by the parent component using the
        `selectedKey` and `onChanged` props.
      </Block>
      <ControlledDropdown />
    </div>
  ))
  .add('with label', () => (
    <div>
      <Block bottomSpacing="large">This dropdown renders its own label text.</Block>
      <Dropdown
        placeHolder="Please Select"
        options={options}
        onChanged={action('dropdown changed')}
        label="Please choose from the following options"
      />
    </div>
  ))
  .add('within grid', () => (
    <div>
      <Block bottomSpacing="large">
        To manage the dropdown's width, use a container; it will expand to fill the entire width.
      </Block>
      <FixedGridRow>
        <FixedGridColumn fixed={true} width={100}>
          <ControlledDropdown />
        </FixedGridColumn>
        <FixedGridColumn>
          <ControlledDropdown />
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ));

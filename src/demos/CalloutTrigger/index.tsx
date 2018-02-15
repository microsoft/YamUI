/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';

module.exports = class WithTarget extends React.PureComponent<{}, { showing: boolean }> {
  private target: HTMLElement | null;

  constructor() {
    super();
    this.state = {
      showing: true,
    };
  }

  public componentDidMount() {
    this.forceUpdate();
  }

  public render() {
    const content = this.state.showing
      ? React.cloneElement(React.Children.only(this.props.children), { target: this.target })
      : null;
    return (
      <span>
        <button ref={this.saveRef} onClick={this.onClick}>
          {this.state.showing ? 'Hide' : 'Show'}
        </button>
        {content}
      </span>
    );
  }

  private saveRef(ref: HTMLElement | null) {
    this.target = ref;
  }

  private onClick = () => {
    this.setState(({ showing }) => ({ showing: !showing }));
  }
};

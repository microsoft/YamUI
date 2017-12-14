/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';

module.exports = class WithTarget extends React.PureComponent<{}, { showing: boolean }> {
  private target: HTMLElement | null;

  constructor () {
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
    ? React.cloneElement(this.props.children as any, { target: this.target }) : null;
    return (
      <span>
        <button
          ref={ref => this.saveRef(ref)}
          onClick={this.onClick}
        >
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

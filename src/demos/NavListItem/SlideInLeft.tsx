/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Slide, { SlideProps } from './Slide';

export interface SlideInLeftProps extends SlideProps {}

export default class SlideInLeft extends React.PureComponent<SlideInLeftProps, {}> {
  render() {
    const { translateX = '100' } = this.props;
    return (
      <Slide {...this.props} translateX={translateX}>
        <div>{this.props.children}</div>
      </Slide>
    );
  }
}

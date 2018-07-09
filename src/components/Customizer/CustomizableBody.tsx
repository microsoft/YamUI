/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from './Customizer.types';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { getClassNames } from './Customizer.styles';

export class Body extends React.Component<CustomizableComponentProps & NestableBaseComponentProps> {
  public render() {
    const { children, className, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });
    const rootClassNames = join(['y-customizable-body', classNames.root, className]);

    return <div className={rootClassNames}>{children}</div>;
  }
}

@customizable('Body', ['theme'])
export default class CustomizableBody extends Body {}

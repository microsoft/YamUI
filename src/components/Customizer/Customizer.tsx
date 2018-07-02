/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from './Customizer.types';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { Customizer as FabricCustomizer, ICustomizerProps } from 'office-ui-fabric-react/lib/Utilities';
import { getClassNames } from './Customizer.styles';

@customizable('CustomizableBody', ['theme'])
class CustomizableBody extends React.Component<CustomizableComponentProps & NestableBaseComponentProps> {
  public render() {
    const { children, className, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });
    const rootClassNames = join(['y-customizable-body', classNames.root, className]);

    return <div className={rootClassNames}>{children}</div>;
  }
}

/**
 * Used to inject a custom theme object into customizable components, overriding the global theme.
 */
export default class Customizer extends React.Component<ICustomizerProps & NestableBaseComponentProps> {
  public render() {
    const { children, className, ...customizerProps } = this.props;

    return (
      <FabricCustomizer {...customizerProps}>
        <CustomizableBody {...{ children, className }} />
      </FabricCustomizer>
    );
  }
}

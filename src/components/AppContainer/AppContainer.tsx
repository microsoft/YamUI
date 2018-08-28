/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Customizer, { CustomizableComponentProps, defaultTheme } from '../Customizer';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { getClassNames } from './AppContainer.styles';

/**
 * AppContainer sets some baseline visual and accessibility styling.
 */
export default class AppContainer extends React.Component<NestableBaseComponentProps & CustomizableComponentProps> {
  public render() {
    const { children, className, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });
    return (
      <Fabric theme={theme}>
        <Customizer settings={{ theme }}>
          <div className={join(['y-appContainer', classNames.root, className])}>{children}</div>
        </Customizer>
      </Fabric>
    );
  }
}

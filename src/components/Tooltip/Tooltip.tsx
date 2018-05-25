/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import { DirectionalHint, TooltipDelay, TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { getTooltipStyles, getCalloutStyles } from './Tooltip.styles';
import './Tooltip.css';

export { DirectionalHint };

export interface TooltipProps extends NestableBaseComponentProps {
  /**
   * Text content to display in the tooltip.
   */
  text: string;

  /**
   * Preferred direction to show the tooltip in.
   */
  directionalHint?: DirectionalHint;
}

/**
 * Tooltip wraps other content and provides additional context on hover or keyboard selection.
 */
export default class Tooltip extends React.Component<TooltipProps> {
  public render() {
    const { className, children, directionalHint, text } = this.props;

    return (
      <TooltipHost
        content={text}
        directionalHint={directionalHint}
        delay={TooltipDelay.medium}
        hostClassName={join(['y-tooltip', className])}
        calloutProps={{ styles: getCalloutStyles(this.props), beakWidth: 8 }}
        tooltipProps={{ styles: getTooltipStyles(this.props) }}
      >
        {children}
      </TooltipHost>
    );
  }
}

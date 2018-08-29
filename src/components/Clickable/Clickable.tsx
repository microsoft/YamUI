/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import FakeLink from '../FakeLink';
import { join } from '../../util/classNames';
import { getClassNames } from './Clickable.styles';
import { ClickableProps } from './Clickable.types';

export class Clickable extends React.Component<ClickableProps & CustomizableComponentProps> {
  private buttonRef = React.createRef<HTMLButtonElement>();

  public constructor(props: ClickableProps) {
    super(props);
    if (this.props.focusableRef) {
      this.props.focusableRef(this);
    }
  }

  public render() {
    const { ariaLabel, title, unstyled, onClick, children, block, className, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ block, theme });

    return (
      <button
        className={join(['y-clickable', classNames.root, className])}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        type="button"
        ref={this.buttonRef}
      >
        {unstyled ? children : <FakeLink>{children}</FakeLink>}
      </button>
    );
  }

  public focus() {
    const button = this.buttonRef.current;
    if (button) {
      button.focus();
    }
  }
}

/**
 * A `Clickable` is an accessible, clickable area that accepts arbitrary children. It is styled
 * like a link by default, but can also be unstyled. Under the hood `Clickable` simply wraps
 * content in a `button` element.
 */
@customizable('Clickable', ['theme'])
export default class CustomizableClickable extends Clickable {}

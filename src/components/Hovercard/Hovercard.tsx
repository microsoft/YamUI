/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import Callout, { DirectionalHint } from '../Callout';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { KeyCodes } from '../../util/keyCodes';
import ScreenreaderText from '../ScreenreaderText';
import { getClassNames } from './Hovercard.styles';

const hideDelay = 500;
const showDelay = 750;

export enum TriggerType {
  CLICK = 'click',
  HOVER = 'hover',
}

export interface HovercardProps extends NestableBaseComponentProps {
  /**
   * The content to populate the Hovercard's popup area.
   */
  content: React.ReactNode;

  /**
   * Direction to place the Hovercard in relationship to its visible trigger content. Note that this
   * is a hint, and the popup position will adjust to available screen real estate.
   * @default DirectionalHint.bottomCenter
   */
  directionalHint?: DirectionalHint;

  /**
   * Whether to display the Hovercard's arrow/beak.
   * @default true
   */
  isBeakVisible?: boolean;

  /**
   * A hidden title to be rendered in an `h1` tag.
   */
  screenreaderTitle?: string;

  /**
   * Whether a mouse click or hover should trigger the Hovercard.
   * @default TriggerType.HOVER
   */
  triggerType?: TriggerType;

  /**
   * Callback to be fired when the Hovercard content is removed.
   */
  onContentDismiss?: (() => void);

  /**
   * Callback to be fired when the Hovercard content is displayed.
   */
  onContentDisplay?: (() => void);

  /**
   * Callback to be fired on trigger hover. Can be used to preload content early before the
   * Hovercard content is actually displayed.
   */
  onTriggerHover?: (() => void);
}

export interface HovercardState {
  visible: boolean;
}

export { DirectionalHint };

/**
 * A `Hovercard` is a small popover overlay. It opens on click or
 * mouse enter, and closes on mouse out and `ESC`. It should be used with `HovercardHeader` and
 * `HovercardBody` components for consistent internal padding.
 */
export default class Hovercard extends React.Component<HovercardProps, HovercardState> {
  public static defaultProps: Partial<HovercardProps> = {
    directionalHint: DirectionalHint.bottomCenter,
    isBeakVisible: true,
    triggerType: TriggerType.HOVER,
  };

  private triggerElement: HTMLSpanElement | null;
  private showTimeout: number | undefined;
  private hideTimeout: number | undefined;

  constructor(props: HovercardProps) {
    super(props);

    this.triggerElement = null;

    this.state = {
      visible: false,
    };
  }

  public render() {
    const { className, content, directionalHint, isBeakVisible, screenreaderTitle, children } = this.props;
    const classNames = getClassNames();

    return (
      <span className={join(['y-hovercard', className])}>
        <span
          className="y-hovercard--trigger"
          ref={this.setRef}
          onClick={this.handleTriggerClick}
          onMouseEnter={this.handleTriggerHover}
          onMouseLeave={this.handleTriggerHoverLeave}
        >
          {children}
        </span>
        {this.state.visible && (
          <Callout
            isBeakVisible={isBeakVisible}
            directionalHint={directionalHint}
            target={this.triggerElement}
            onDismiss={this.hide}
            preventDismissOnScroll={false}
          >
            <div
              className={`y-hovercard--modal-container ${classNames.modalContainer}`}
              onMouseEnter={this.handleBodyHover}
              onMouseLeave={this.beginHide}
            >
              {screenreaderTitle && (
                <ScreenreaderText>
                  <h1>{screenreaderTitle}</h1>
                </ScreenreaderText>
              )}
              {content}
            </div>
          </Callout>
        )}
      </span>
    );
  }

  public componentWillUnmount() {
    if (this.showTimeout) {
      window.clearTimeout(this.showTimeout);
    }

    if (this.hideTimeout) {
      window.clearTimeout(this.hideTimeout);
    }

    this.stopKeyListener();
  }

  private setRef = (node: HTMLSpanElement | null) => (this.triggerElement = node);

  private handleTriggerClick = () => {
    const { triggerType } = this.props;

    if (triggerType === TriggerType.CLICK) {
      this.show();
    }
  };

  private handleTriggerHover = () => {
    const { triggerType, onTriggerHover } = this.props;

    if (onTriggerHover) {
      onTriggerHover();
    }

    this.cancelHide();

    if (triggerType === TriggerType.HOVER) {
      this.beginShow();
    }
  };

  private handleTriggerHoverLeave = () => {
    this.cancelShow();
    this.beginHide();
  };

  private handleBodyHover = () => {
    this.cancelHide();
  };

  private beginShow = () => {
    this.showTimeout = window.setTimeout(() => {
      this.show();
    }, showDelay);
  };

  private cancelShow = () => {
    if (this.showTimeout) {
      window.clearTimeout(this.showTimeout);
    }
  };

  private beginHide = () => {
    this.hideTimeout = window.setTimeout(() => {
      this.hide();
    }, hideDelay);
  };

  private cancelHide = () => {
    if (this.hideTimeout) {
      window.clearTimeout(this.hideTimeout);
    }
  };

  private show = () => {
    const { onContentDisplay } = this.props;
    const { visible } = this.state;
    if (visible) {
      return;
    }

    if (onContentDisplay) {
      onContentDisplay();
    }

    //this.setState({ visible: true });
    this.setState(() => ({ visible: true }));
    this.startKeyListener();
  };

  private hide = () => {
    const { onContentDismiss } = this.props;
    const { visible } = this.state;

    if (!visible) {
      return;
    }

    if (onContentDismiss) {
      onContentDismiss();
    }

    this.setState({ visible: false });
    this.stopKeyListener();
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === KeyCodes.escape) {
      this.hide();
    }
  };

  private startKeyListener = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  };

  private stopKeyListener = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
  };
}

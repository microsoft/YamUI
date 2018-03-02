/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import { join } from '../../util/classNames';
import Callout, { DirectionalHint } from '../Callout';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { KeyCodes } from '../../util/enums';
import ScreenreaderText from '../ScreenreaderText';
import './Hovercard.css';

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
   * Whether the Hovercard should start visible. Note that it will wait until `componentDidMount` to
   * ensure it can properly position itself in relation to the trigger. Only exposed for testing.
   * @default false
   */
  startVisible?: boolean;

  /**
   * Whether a mouse click or hover should trigger the Hovercard.
   * @default TriggerType.HOVER
   */
  triggerType?: TriggerType;

  /**
   * Callback to be fired when the Hovercard content is removed.
   */
  onContentDismiss?: () => void;

  /**
   * Callback to be fired when the Hovercard content is displayed.
   */
  onContentDisplay?: () => void;

  /**
   * Callback to be fired on trigger hover. Can be used to preload content early before the
   * Hovercard content is actually displayed.
   */
  onTriggerHover?: () => void;
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
  static defaultProps: Partial<HovercardProps> = {
    directionalHint: DirectionalHint.bottomCenter,
    isBeakVisible: true,
    startVisible: false,
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

  render() {
    const {
      className,
      content,
      directionalHint,
      isBeakVisible,
      screenreaderTitle,
      children,
    } = this.props;

    const screenreaderTitleChild = screenreaderTitle && (
      <ScreenreaderText>
        <h1>{screenreaderTitle}</h1>
      </ScreenreaderText>
    );
    const hovercard = this.state.visible && (
      <Callout
        isBeakVisible={isBeakVisible}
        directionalHint={directionalHint}
        target={this.triggerElement}
        onDismiss={this.hide}
        preventDismissOnScroll={false}
      >
        <div
          className="y-hovercard--modal-container"
          onMouseEnter={this.handleBodyHover}
          onMouseLeave={this.beginHide}
        >
          {screenreaderTitleChild}
          {content}
        </div>
      </Callout>
    );

    return (
      <span className={join(['y-hovercard', className])}>
        <span
          className="y-hovercard--trigger"
          ref={node => (this.triggerElement = node)}
          onClick={this.handleTriggerClick}
          onMouseEnter={this.handleTriggerHover}
          onMouseLeave={this.handleTriggerHoverLeave}
        >
          {children}
        </span>
        {hovercard}
      </span>
    );
  }

  // Set initial visible state after mount so the trigger ref exists for positioning
  componentDidMount() {
    const { startVisible } = this.props;

    if (startVisible) {
      this.show();
    }
  }

  componentWillUnmount() {
    if (this.showTimeout) {
      window.clearTimeout(this.showTimeout);
    }

    if (this.hideTimeout) {
      window.clearTimeout(this.hideTimeout);
    }

    this.stopKeyListener();
  }

  @autobind
  private handleTriggerClick() {
    const { triggerType } = this.props;

    if (triggerType === TriggerType.CLICK) {
      this.show();
    }
  }

  @autobind
  private handleTriggerHover() {
    const { triggerType, onTriggerHover } = this.props;

    onTriggerHover && onTriggerHover();

    this.cancelHide();

    if (triggerType === TriggerType.HOVER) {
      this.beginShow();
    }
  }

  @autobind
  private handleTriggerHoverLeave() {
    this.cancelShow();
    this.beginHide();
  }

  @autobind
  private handleBodyHover() {
    this.cancelHide();
  }

  @autobind
  private beginShow() {
    this.showTimeout = window.setTimeout(() => {
      this.show();
    }, showDelay);
  }

  @autobind
  private cancelShow() {
    if (this.showTimeout) {
      window.clearTimeout(this.showTimeout);
    }
  }

  @autobind
  private beginHide() {
    this.hideTimeout = window.setTimeout(() => {
      this.hide();
    }, hideDelay);
  }

  @autobind
  private cancelHide() {
    if (this.hideTimeout) {
      window.clearTimeout(this.hideTimeout);
    }
  }

  @autobind
  private show() {
    const { onContentDisplay } = this.props;
    const { visible } = this.state;

    if (visible) {
      return;
    }

    onContentDisplay && onContentDisplay();

    this.setState({ visible: true });
    this.startKeyListener();
  }

  @autobind
  private hide() {
    const { onContentDismiss } = this.props;
    const { visible } = this.state;

    if (!visible) {
      return;
    }

    onContentDismiss && onContentDismiss();

    this.setState({ visible: false });
    this.stopKeyListener();
  }

  @autobind
  private handleKeyDown(e: KeyboardEvent) {
    if (e.keyCode === KeyCodes.escape) {
      this.hide();
    }
  }

  @autobind
  private startKeyListener() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  @autobind
  private stopKeyListener() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

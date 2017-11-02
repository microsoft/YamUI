/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import classNames = require('classnames');
import { Callout as FabricCallout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { Key } from '../../util/enums';
import ScreenreaderText from '../ScreenreaderText';
import './Callout.css';

const hideDelay = 500;
const showDelay = 750;

export enum TriggerType {
  CLICK = 'click',
  HOVER = 'hover',
}

export interface CalloutProps extends NestableBaseComponentProps {
  /**
   * The content to populate the callout's popup area.
   */
  content: React.ReactNode;

  /**
   * Direction to place the callout in relationship to its visible trigger content. Note that this
   * is a hint, and the popup position will adjust to available screen real estate.
   * @default DirectionalHint.bottomCenter
   */
  directionalHint?: DirectionalHint;

  /**
   * Whether to display the callout's arrow/beak.
   * @default true
   */
  isBeakVisible?: boolean;

  /**
   * A hidden title to be rendered in an `h1` tag.
   */
  screenreaderTitle?: string;

  /**
   * Whether the callout should start visible. Note that it will wait until `componentDidMount` to
   * ensure it can properly position itself in relation to the trigger.
   * @default false
   */
  startVisible?: boolean;

  /**
   * Whether a mouse click or hover should trigger the callout.
   * @default TriggerType.HOVER
   */
  triggerType?: TriggerType;

  /**
   * Callback to be fired when the callout content is removed.
   */
  onContentDismiss?: () => void;

  /**
   * Callback to be fired when the callout content is displayed.
   */
  onContentDisplay?: () => void;

  /**
   * Callback to be fired on trigger hover. Can be used to preload content early before the callout
   * content is actually displayed.
   */
  onTriggerHover?: () => void;
}

export interface CalloutState {
  visible: boolean;
}

export { DirectionalHint };

/**
 * A `Callout` is a small popover overlay, to be used for hovercards. `Callout` opens on click or
 * mouse enter, and closes on mouse out and `ESC`. It should be used with `CalloutHeader` and
 * `CalloutBody` components for consistent layouts.
 */
export default class Callout extends React.PureComponent<CalloutProps, CalloutState> {
  static defaultProps: Partial<CalloutProps> = {
    directionalHint: DirectionalHint.bottomCenter,
    isBeakVisible: true,
    startVisible: false,
    triggerType: TriggerType.HOVER,
  };

  private triggerElement: HTMLSpanElement;
  private showTimeout: number;
  private hideTimeout: number;

  constructor(props: CalloutProps) {
    super(props);

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
    const callout = this.state.visible && (
      <FabricCallout
        isBeakVisible={isBeakVisible}
        directionalHint={directionalHint}
        target={this.triggerElement}
        onDismiss={this.hide}
        preventDismissOnScroll={false}
      >
        <div
          className="y-callout--modal-container"
          onMouseEnter={this.handleBodyHover}
          onMouseLeave={this.beginHide}
        >
          {screenreaderTitleChild}
          {content}
        </div>
      </FabricCallout>
    );

    return (
      <span className={classNames('y-callout', className)}>
        <span
          className="y-callout--trigger"
          ref={(node: HTMLSpanElement) => (this.triggerElement = node)}
          onClick={this.handleTriggerClick}
          onMouseEnter={this.handleTriggerHover}
          onMouseLeave={this.handleTriggerHoverLeave}
        >
          {children}
        </span>
        {callout}
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
    window.clearTimeout(this.showTimeout);
    window.clearTimeout(this.hideTimeout);
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
    this.showTimeout = window.setTimeout(
      () => { this.show(); },
      showDelay,
    );
  }

  @autobind
  private cancelShow() {
    window.clearTimeout(this.showTimeout);
  }

  @autobind
  private beginHide() {
    this.hideTimeout = window.setTimeout(
      () => { this.hide(); },
      hideDelay,
    );
  }

  @autobind
  private cancelHide() {
    window.clearTimeout(this.hideTimeout);
  }

  @autobind
  private show() {
    const { onContentDisplay } = this.props;
    const { visible } = this.state;

    if (this.state.visible) {
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

    if (!this.state.visible) {
      return;
    }

    onContentDismiss && onContentDismiss();

    this.setState({ visible: false });
    this.stopKeyListener();
  }

  @autobind
  private handleKeyDown(e: KeyboardEvent) {
    if (e.keyCode === Key.Escape) {
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

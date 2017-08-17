/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { Enum } from 'typescript-string-enums';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { Key } from '../../util/enums/key';
import { Callout as FabricCallout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import ScreenreaderText from '../ScreenreaderText';
import './callout.css';


const showDelay = 750;
const hideDelay = 500;

export interface VoidCallback {
  (): void;
}

export const TriggerType = Enum({
  CLICK: 'click',
  HOVER: 'hover',
});
export type TriggerType = Enum<typeof TriggerType>;

export interface CalloutProps extends NestableBaseComponentProps {
  /**
   * The React components or HTML to populate the Callout's popup area
   */
  content: JSX.Element;

  /**
   * A hidden title to be rendered in an h1 tag
   */
  screenreaderTitle?: string;

  /**
   * This side or corner to place the Callout in relationship to its visible trigger content.
   * Note that this is a hint and the popup position will adjust to available screen real estate.
   */
  directionalHint?: DirectionalHint;

  /**
   * Whether or not the arrow/beak should be displayed. Defaults to true.
   */
  isBeakVisible?: boolean;

  /**
   * If true, the component will manually set its displayed state to true. Note that it will wait
   * until componentDidMount to ensure it can properly position itself in relation to the trigger content.
   * Defaults to false.
   */
  startVisible?: boolean;

  /**
   * Callback to be fired on trigger hover. Can be used to preload Ajax content early before the
   * callout content is actually displayed.
   */
  onTriggerHover?: VoidCallback;

  /**
   * Callback to be fired when the callout content is displayed
   */
  onContentDisplay?: VoidCallback;

  /**
   * Callback to be fired when the callout content is removed
   */
  onContentDismiss?: VoidCallback;

  /**
   * Whether a click or hover should trigger the Callout to display. Defaults to hover.
   */
  triggerType?: TriggerType;
}
export interface CalloutState {
  visible: boolean;
}
export { DirectionalHint };

export class Callout extends React.Component<CalloutProps, CalloutState> {
  static defaultProps: Partial<CalloutProps> = {
    isBeakVisible: true,
    directionalHint: DirectionalHint.bottomCenter,
    triggerType: TriggerType.HOVER,
    startVisible: false,
  };

  private triggerElement: HTMLSpanElement;
  private showTimeout: number;
  private hideTimeout: number;

  constructor (props: CalloutProps) {
    super(props);
    this.state = {
      visible: false,
    };

    // TODO: Use @autobind decorator
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleTriggerHover = this.handleTriggerHover.bind(this);
    this.handleTriggerHoverLeave = this.handleTriggerHoverLeave.bind(this);
    this.handleBodyHover = this.handleBodyHover.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.hide = this.hide.bind(this);
    this.beginHide = this.beginHide.bind(this);
  }

  render () {
    return (
      <span className={classNames('y-callout', this.props.className)}>
        <span className="y-callout--trigger" ref={(node: HTMLSpanElement) => this.triggerElement = node}
              onClick={this.handleTriggerClick} onMouseEnter={this.handleTriggerHover}
              onMouseLeave={this.handleTriggerHoverLeave}>
          {this.props.children}
        </span>
        {this.state.visible && (
          <FabricCallout isBeakVisible={this.props.isBeakVisible}
                         directionalHint={this.props.directionalHint}
                         target={this.triggerElement}
                         onDismiss={this.hide}
                         preventDismissOnScroll={false}>
            <div className="y-callout--modal-container" onMouseEnter={this.handleBodyHover}
                 onMouseLeave={this.beginHide}>
              {this.props.screenreaderTitle && (
                <ScreenreaderText><h1>{this.props.screenreaderTitle}</h1></ScreenreaderText>
              )}
              {this.props.content}
            </div>
          </FabricCallout>
        )}
      </span>
    );
  }

  // Set initial visible state after mount so the trigger ref exists for positioning
  componentDidMount () {
    if (this.props.startVisible) {
      this.show();
    }
  }

  componentWillUnmount () {
    window.clearTimeout(this.showTimeout);
    window.clearTimeout(this.hideTimeout);
    this.stopKeyListener();
  }

  private handleTriggerClick () {
    if (this.props.triggerType === TriggerType.CLICK) {
      this.show();
    }
  }

  private handleTriggerHover () {
    this.props.onTriggerHover && this.props.onTriggerHover();

    this.cancelHide();

    if (this.props.triggerType === TriggerType.HOVER) {
      this.beginShow();
    }
  }
  private handleTriggerHoverLeave () {
    this.cancelShow();
    this.beginHide();
  }

  private handleBodyHover () {
    this.cancelHide();
  }

  private beginShow () {
    this.showTimeout = window.setTimeout(
      () => {
        this.show();
      },
      showDelay,
    );
  }
  private cancelShow () {
    window.clearTimeout(this.showTimeout);
  }

  private beginHide () {
    this.hideTimeout = window.setTimeout(
      () => {
        this.hide();
      },
      hideDelay,
    );
  }
  private cancelHide () {
    window.clearTimeout(this.hideTimeout);
  }

  private show () {
    if (this.state.visible) {
      return;
    }

    this.props.onContentDisplay && this.props.onContentDisplay();

    this.setState({ visible: true });
    this.startKeyListener();
  }
  private hide () {
    if (!this.state.visible) {
      return;
    }

    this.props.onContentDismiss && this.props.onContentDismiss();

    this.setState({ visible: false });
    this.stopKeyListener();
  }

  private handleKeyDown (e: KeyboardEvent) {
    if (e.keyCode === Key.Escape) {
      this.hide();
    }
  }

  private startKeyListener () {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  private stopKeyListener () {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

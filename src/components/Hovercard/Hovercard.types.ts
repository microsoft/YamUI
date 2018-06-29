/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { DirectionalHint } from '../Callout';

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

export {
  DirectionalHint,
  NestableBaseComponentProps as HovercardHeaderProps,
  NestableBaseComponentProps as HovercardBodyProps,
};

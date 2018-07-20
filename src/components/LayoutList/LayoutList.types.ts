/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid';
export { GutterSize };

export { NestableBaseComponentProps as LayoutListItemProps };

export interface HorizontalListProps extends NestableBaseComponentProps {
  direction: 'horizontal';

  /**
   * Amount of spacing between list items. Defaults to 4px.
   * @default GutterSize.XSMALL
   */
  gutterSize?: GutterSize;

  /**
   * Align the horizontal list items to the left or right of the list's container.
   * @default 'left'
   */
  align?: 'left' | 'right';
}

export interface VerticalListProps extends NestableBaseComponentProps {
  direction: 'vertical';

  /**
   * Amount of spacing between list items. Defaults to none.
   * @default GutterSize.NONE;
   */
  gutterSize?: GutterSize;
}

export type LayoutListProps = HorizontalListProps | VerticalListProps;

/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { concatStyleSets, IStyle, IRawStyle } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { BlockProps, TextColor, TextSize } from './Block';
import { gutterToRem, gutterToRemString, toRemString } from '../../util/css/units';
import { ellipsisStyles, fontStyles } from '../../util/css/fonts';
import { textColors } from '../../util/css/colors';

export { IStyle, IRawStyle };

export interface BlockStyles {
  /**
   * Styles applied to the root Block div.
   */
  root?: IStyle;

  /**
   * Styles applied to the nested padding wrapper div.
   */
  inner?: IStyle;
}

const getMarginStyles = (
  topSpacing: BlockProps['topSpacing'],
  bottomSpacing: BlockProps['bottomSpacing'],
  push: BlockProps['push'],
): IRawStyle => {
  const styles: IRawStyle = {};
  const topSpacingRems = gutterToRem(topSpacing || 0);
  const pushRems = gutterToRem(push || 0);
  const topMargin = topSpacingRems + pushRems;
  if (topMargin) {
    styles.marginTop = toRemString(topMargin);
  }
  if (bottomSpacing) {
    styles.marginBottom = gutterToRemString(bottomSpacing);
  }
  return styles;
};

const getPaddingStyles = (
  padding: BlockProps['padding'],
  horizontalPadding: BlockProps['horizontalPadding'],
  verticalPadding: BlockProps['verticalPadding'],
): IRawStyle => {
  const styles: IRawStyle = {};
  const hPadding = horizontalPadding || padding;
  const vPadding = verticalPadding || padding;
  if (hPadding) {
    styles.paddingLeft = styles.paddingRight = gutterToRem(hPadding);
  }
  if (vPadding) {
    styles.paddingTop = styles.paddingBottom = gutterToRem(vPadding);
  }
  return styles;
};

const getTextStyles = (
  textAlign: BlockProps['textAlign'],
  textColor: BlockProps['textColor'],
  textSize: BlockProps['textSize'],
  ellipsis: BlockProps['ellipsis'],
): IRawStyle => {
  let styles: IRawStyle = {};
  if (textAlign) {
    styles.textAlign = textAlign;
  }
  if (textColor) {
    styles.color = textColors[textColor];
  }
  if (textSize) {
    styles = {
      ...styles,
      ...fontStyles[textSize],
    };
  }
  if (ellipsis) {
    styles = {
      ...ellipsisStyles,
    };
  }
  return styles;
};

export const getStyles = memoizeFunction(
  (
    topSpacing: BlockProps['topSpacing'],
    bottomSpacing: BlockProps['bottomSpacing'],
    padding: BlockProps['padding'],
    horizontalPadding: BlockProps['horizontalPadding'],
    verticalPadding: BlockProps['verticalPadding'],
    push: BlockProps['push'],
    textAlign: BlockProps['textAlign'],
    textColor: BlockProps['textColor'],
    textSize: BlockProps['textSize'],
    ellipsis: BlockProps['ellipsis'],
  ): BlockStyles => {
    const styles = {
      root: [
        {
          width: '100%',
          ...getMarginStyles(topSpacing, bottomSpacing, push),
        },
      ],

      inner: {
        overflowWrap: 'break-word',
        ...getPaddingStyles(padding, horizontalPadding, verticalPadding),
        ...getTextStyles(textAlign, textColor, textSize, ellipsis),
      },
    };
    return concatStyleSets(styles);
  },
);

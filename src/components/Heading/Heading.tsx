/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import Block, { TextSize, GutterSize, BlockProps } from '../Block';
import { getClassNames } from './Heading.styles';
import { HeadingProps, HeadingLevel } from './Heading.types';

const blockPropsMap: Record<HeadingLevel, Partial<BlockProps>> = {
  1: {
    textSize: TextSize.XXLARGE,
    bottomSpacing: GutterSize.SMALL,
  },
  2: {
    textSize: TextSize.XLARGE,
    bottomSpacing: GutterSize.SMALL,
  },
  3: {
    textSize: TextSize.LARGE,
    bottomSpacing: GutterSize.MEDIUM,
  },
  4: {
    textSize: TextSize.LARGE,
    bottomSpacing: GutterSize.MEDIUM,
  },
  5: {
    textSize: TextSize.MEDIUM,
    bottomSpacing: GutterSize.MEDIUM,
  },
  6: {
    textSize: TextSize.MEDIUM_SUB,
    bottomSpacing: GutterSize.SMALL,
  },
};

/**
 * A `Heading` component renders an h1-h6 tag depending on the given level. You can also
 * override its visual styling to match a different level with `size`. Set `size="none"`
 * to render the heading as unstyled inline text.
 */
export default class Heading extends React.Component<HeadingProps> {
  public render() {
    const { className, level, size, children } = this.props;
    const TagName = `h${level}`;
    const classNames = getClassNames({ size: size || level });

    return (
      <TagName className={join(['y-heading', className, classNames.root])}>
        {size === 'none' ? children : <Block {...blockPropsMap[size || level]}>{children}</Block>}
      </TagName>
    );
  }
}

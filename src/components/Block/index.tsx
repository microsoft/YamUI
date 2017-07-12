/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../../util/enums/gutter';
import { TextSize } from '../../util/enums/textSize';
import './block.css';


export interface BlockProps extends NestableBaseComponentProps {
  /**
   * Gutter spacing to be added below this Block
   */
  bottomSpacing?: GutterSize;

  /**
   * Padding to be added uniformly within this Block
   */
  padding?: GutterSize;

  /**
   * Number of pixels to finely adjust the gutter spacing above this Block. Positive pushes the component down,
   * negative pulls it up. Only use this to adjust for vertical rhythm in text.
   */
  push?: number;

  /**
   * Determines the font-size/line-height combination within this Block
   */
  textSize?: TextSize;

  /**
   * Convenience prop to align text left or right. Defaults to left.
   */
  textAlign?: 'left' | 'right';
}

export { GutterSize, TextSize };

const pixelsToRems = function (pixels: number) {
  return pixels / 10;
};

const getClasses = (props: BlockProps) => {
  const classes: string[] = [
    'y-block',
  ];
  if (props.bottomSpacing) {
    classes.push(`y-block__bottomSpacing-${props.bottomSpacing}`);
  }
  if (props.textSize) {
    classes.push(`y-block__textSize-${props.textSize}`);
  }
  if (props.textAlign === 'right') {
    classes.push('y-block__textAlign-right');
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

const getInnerClasses = (props: BlockProps) => {
  const classes: string[] = [
    'y-block--inner',
  ];
  if (props.padding) {
    classes.push(`y-block--inner__padding-${props.padding}`);
  }
  return classes.join(' ');
};

interface BlockStyles {
  marginTop?: string;
  paddingTop?: string;
}
const getStyle = (props: BlockProps) => {
  const styles: BlockStyles = {};
  if (!props.push) {
    return styles;
  }

  // If push is negative, set negative top margin to "pull" it up.
  // If positive, "push" it down with top padding (because margins can collapse)
  const rems = pixelsToRems(props.push);
  const value = `${rems}rem`;
  if (rems < 0) {
    styles.marginTop = value;
  } else {
    styles.paddingTop = value;
  }
  return styles;
};

const Block: React.StatelessComponent<BlockProps> = (props) => {
  return (
    <div className={getClasses(props)} style={getStyle(props)}>
      <div className={getInnerClasses(props)}>
        {props.children}
      </div>
    </div>
  );
};

export default Block;

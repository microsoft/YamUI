/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { ResizeGroup } from 'office-ui-fabric-react/lib/ResizeGroup';
import { GutterSize, LayoutList, LayoutListItem, LayoutListProps } from '../LayoutList';

export { GutterSize };

interface ResizeListData {
  count: number;
  cacheKey: string;
}

export interface ResizeListProps extends BaseComponentProps {
  /**
   * A list of child elements to render. Items which don't fit the container width will not be rendered.
   */
  items: React.ReactNode[];

  /**
   * An additional item which will always be rendered at the end of th elist.
   */
  actionItem?: React.ReactNode;

  /**
   * Amount of spacing between list items. Defaults to 4px.
   * @default GutterSize.XSMALL
   */
  gutterSize?: LayoutListProps['gutterSize'];
}

/**
 * Describe what `ResizeList` does. This will also appear as part of this component's
 * documentation.
 */
export default class ResizeList extends React.Component<ResizeListProps> {
  public render() {
    const data: ResizeListData = {
      count: this.props.items.length,
      cacheKey: this.props.items.length.toString(),
    };

    return (
      <ResizeGroup
        data={data}
        onRenderData={this.onRenderData}
        onReduceData={this.onReduceData}
        onGrowData={this.onGrowData}
      />
    );
  }

  private onRenderData = (data: ResizeListData) => {
    const renderItems = this.props.items.slice(0, data.count);
    const actionItem = this.props.actionItem ? <LayoutListItem>{this.props.actionItem}</LayoutListItem> : null;

    return (
      <LayoutList
        className={join(['y-resizeList', this.props.className])}
        direction="horizontal"
        gutterSize={this.props.gutterSize}
      >
        {renderItems.map((item, index) => <LayoutListItem key={index}>{item}</LayoutListItem>)}
        {actionItem}
      </LayoutList>
    );
  };

  private onGrowData = (data: ResizeListData): ResizeListData | undefined => {
    // Prevent infinite loop when all items are rendered
    if (data.count >= this.props.items.length) {
      return undefined;
    }

    const count = data.count + 1;
    return {
      count,
      cacheKey: count.toString(),
    };
  };

  private onReduceData = (data: ResizeListData): ResizeListData | undefined => {
    // Prevent infinite loop when too small
    if (data.count === 0) {
      return undefined;
    }

    const count = data.count - 1;
    return {
      count,
      cacheKey: count.toString(),
    };
  };
}

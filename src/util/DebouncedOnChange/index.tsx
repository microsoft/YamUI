/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

export interface DebouncedOnChangeProps {
  /**
   * Callback for the onChange event.
   */
  onChange?: (newValue: any) => void;

  /**
   * Debounced callback for the onChange event.
   */
  debouncedOnChange?: (newValue: any) => void;

  /**
   * Component will trigger `onChange` after users stop typing for `debouncedOnChangeTime`
   * milliseconds.
   */
  debouncedOnChangeTime?: number;
}

export interface DebouncedOnChangePrivateProps {
  /**
   * Used to pass both onChange and debouncedOnChange to the contained component.
   */
  unifiedOnChange?: (newValue: any) => void;
}

export interface NestedComponentProps {
  component: any;
}

export default class DebouncedOnChangeComponent extends React.Component<
  DebouncedOnChangeProps & NestedComponentProps
> {
  private async: Async;
  private debouncedOnChange: (newValue: string) => void;

  static defaultProps = {
    debouncedOnChangeTime: 700,
  };

  constructor(props: DebouncedOnChangeProps) {
    super();
    if (props.debouncedOnChange) {
      this.async = new Async(this);
      this.debouncedOnChange = this.async.debounce(
        props.debouncedOnChange,
        props.debouncedOnChangeTime,
      );
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue: string) {
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    if (this.props.debouncedOnChange) {
      this.debouncedOnChange(newValue);
    }
  }

  render() {
    const { component: ComposedComponent } = this.props;
    return <ComposedComponent {...this.props} unifiedOnChange={this.handleChange} />;
  }

  componentWillUnmount() {
    if (this.async) {
      this.async.dispose();
    }
  }
}

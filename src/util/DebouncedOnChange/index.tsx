/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

export interface DebouncedOnChangeProps {
  /**
   * Callback for the onChange event.
   */
  onChange?: ((newValue: any) => void);

  /**
   * Debounced callback for the onChange event.
   */
  debouncedOnChange?: ((newValue: any) => void);

  /**
   * Component will trigger `onChange` after users stop typing for `debouncedOnChangeTime`
   * milliseconds.
   */
  debouncedOnChangeTime?: number;

  /**
   * Optional callback to access the component interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?(a: any): void;
}

export interface DebouncedOnChangePrivateProps {
  /**
   * Used to pass both onChange and debouncedOnChange to the contained component.
   */
  unifiedOnChange?: ((newValue: any) => void);

  /**
   * Optional callback to access the component.  Used to pass componentRef
   * to the contained component.
   */
  ref?(a: any): void;
}

export interface NestedComponentProps {
  component:
    | React.ComponentClass<DebouncedOnChangePrivateProps>
    | React.StatelessComponent<DebouncedOnChangePrivateProps>;
}

export default class DebouncedOnChangeComponent extends React.Component<
  DebouncedOnChangeProps & NestedComponentProps
> {
  public static defaultProps = {
    debouncedOnChangeTime: 700,
  };

  private async: Async | undefined;
  private debouncedOnChange: ((newValue: string) => void) | undefined;

  constructor(props: DebouncedOnChangeProps) {
    super();
    if (props.debouncedOnChange) {
      this.async = new Async(this);
      this.debouncedOnChange = this.async.debounce(props.debouncedOnChange, props.debouncedOnChangeTime);
    }
  }

  public render() {
    const { component: ComposedComponent, componentRef } = this.props;
    return <ComposedComponent {...this.props} unifiedOnChange={this.handleChange} ref={componentRef} />;
  }

  public componentWillUnmount() {
    if (this.async) {
      this.async.dispose();
    }
  }

  private handleChange = (newValue: string) => {
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    if (this.props.debouncedOnChange && this.debouncedOnChange) {
      this.debouncedOnChange(newValue);
    }
  };
}

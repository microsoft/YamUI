/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

export { Async };

export interface DebouncedOnChangeProps {
  /**
   * Callback for the onChanged event.
   */
  onChange?: (newValue: any) => void;

  /**
   * Callback for the onChanged event.
   */
  debouncedOnChange?: (newValue: any) => void;

  /**
   * Textfield will trigger `onChange` after users stop typing for `onChangeDebounceTime`
   * milliseconds.
   */
  debouncedOnChangeTime?: number;

  /**
   * Private: Used to pass both onChange and debouncedOnChange to the contained component.
   */
  unifiedOnChange?: (newValue: any) => void;
}

const DebouncedOnChange = <T extends DebouncedOnChangeProps>(
  ComposedComponent: React.ComponentClass | React.StatelessComponent<T>) =>
  class extends React.Component<T> {
    async: Async;
    debouncedOnChange: (newValue: string) => void;

    static defaultProps = {
      debouncedOnChangeTime: 700,
    };

    constructor(props: T) {
      super();
      if (props.debouncedOnChange) {
        this.async = new Async(this);
        this.debouncedOnChange = this.async.debounce(props.debouncedOnChange, props.debouncedOnChangeTime);
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
      return (
        <ComposedComponent
          {...this.props}
          unifiedOnChange={this.handleChange}
        />
      );
    }

    componentWillUnmount() {
      if (this.async) {
        this.async.dispose();
      }
    }
  };

export default DebouncedOnChange;

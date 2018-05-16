/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../../yamui';
import * as React from 'react';
import { join } from '../../../util/classNames';
import DebouncedOnChange, {
  DebouncedOnChangeProps,
  DebouncedOnChangePrivateProps,
} from '../../../util/DebouncedOnChange';
import { Focusable } from '../../../util/Focusable';
import { BaseComponentProps, FocusableComponentProps } from '../../../util/BaseComponent/props';
import { ITextField, TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import './TextField.css';

export interface BaseTextFieldProps
  extends BaseComponentProps,
    FocusableComponentProps,
    DebouncedOnChangeProps,
    DebouncedOnChangePrivateProps {
  /**
   * aria-label attribute
   */
  ariaLabel?: string;

  /**
   * Current value of the textfield.
   */
  value?: string;

  /**
   * Placeholder text. Displayed until a value is entered.
   */
  placeHolder?: string;

  /**
   * Error message string.
   */
  errorMessage?: string;

  /**
   * Disabled state of the textfield.
   */
  disabled?: boolean;

  /**
   * Label for the textfield.
   */
  label?: string;

  /**
   * The textfield input description
   */
  description?: string | JSX.Element;

  /**
   * Use to indicate that a value must be provided to allow the containing form to be submitted.
   */
  required?: boolean;

  /**
   * Use as the input's maxLength attribute.
   */
  maxLength?: number;

  /**
   * Callback for the onChanged event.
   */
  onChange?: ((newValue: any) => void);

  /**
   * Focus callback handler.
   */
  onFocus?: ((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void);

  /**
   * Blur callback handler.
   */
  onBlur?: ((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void);

  /**
   * Mouse enter callback handler.
   */
  onMouseEnter?: ((event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void);

  /**
   * Mouse leave callback handler.
   */
  onMouseLeave?: ((event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void);

  /**
   * Key press handler, cancelable before text is entered.
   */
  onKeyDown?: ((event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void);
}

export interface SingleLineTextFieldProps {
  multiline: false;

  /**
   * String for prefix.
   */
  prefix?: string;

  /**
   * String for suffix.
   */
  suffix?: string;

  /**
   * Whether or not the textfield is underlined.
   */
  underlined?: boolean;
}

export interface MultiLineTextFieldProps {
  multiline: true;

  /**
   * Height of the field, in number of rows.
   */
  rows?: number;

  /**
   * Whether or not to auto adjust textField height.
   */
  autoAdjustHeight?: boolean;
}

export type TextInputProps = BaseTextFieldProps & SingleLineTextFieldProps;
export type TextAreaProps = BaseTextFieldProps & MultiLineTextFieldProps;

export type TextFieldProps = TextInputProps | TextAreaProps;

/**
 * BaseTextField can render a text input or textarea. This is an internal component,
 * only YamUI's TextInput and TextArea components should be calling this directly.
 */
class TextField extends React.Component<TextFieldProps> implements Focusable {
  private fabricTextFieldRef: ITextField | null;

  public constructor(props: TextFieldProps) {
    super(props);
    this.fabricTextFieldRef = null;
    if (this.props.focusableRef) {
      this.props.focusableRef(this);
    }
  }

  public render() {
    const props = this.props;

    // Pass a truthy string value to force Fabric to use onRenderDescription for JSX
    const description = props.description === undefined ? undefined : 'true';

    const inputOrTextAreaProps: SingleLineTextFieldProps | MultiLineTextFieldProps = props.multiline
      ? {
          multiline: props.multiline,
          rows: props.rows,
          autoAdjustHeight: props.autoAdjustHeight,
        }
      : {
          multiline: props.multiline,
          prefix: props.prefix,
          suffix: props.suffix,
          underlined: props.underlined,
        };

    return (
      <FabricTextField
        value={props.value}
        label={props.label}
        description={description}
        onRenderDescription={this.getDescription}
        disabled={props.disabled}
        ariaLabel={props.ariaLabel}
        aria-required={props.required}
        errorMessage={props.errorMessage}
        placeholder={props.placeHolder}
        maxLength={props.maxLength}
        resizable={false}
        className={this.getClasses()}
        componentRef={this.setRef}
        // Event callbacks
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onKeyDown={props.onKeyDown}
        onChanged={props.unifiedOnChange}
        // Input or TextArea specific props
        {...inputOrTextAreaProps}
      />
    );
  }

  public focus() {
    const ref = this.fabricTextFieldRef;
    if (!ref) {
      return;
    }

    const valueLength = this.props.value ? this.props.value.length : 0;
    ref.focus();
    ref.setSelectionRange(valueLength, valueLength);
  }

  private getDescription = () => {
    const { description, errorMessage } = this.props;

    if (!description || errorMessage) {
      return null;
    }
    return <span className="y-textField--description">{description}</span>;
  };

  private setRef = (node: ITextField | null) => {
    this.fabricTextFieldRef = node;
  };

  private getClasses() {
    const classes = ['y-textField', this.props.className];

    if (!this.props.multiline && this.props.prefix) {
      classes.push('y-textField__with-prefix');
    }

    if (!this.props.multiline && this.props.suffix) {
      classes.push('y-textField__with-suffix');
    }

    return join(classes);
  }
}

export default (props: TextFieldProps) => {
  return <DebouncedOnChange {...props} component={TextField} />;
};

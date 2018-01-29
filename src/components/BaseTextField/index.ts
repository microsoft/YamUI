/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import {
  ITextFieldProps as FabricTextFieldProps,
  ITextField,
} from 'office-ui-fabric-react/lib/TextField';

export { ITextField };

export interface BaseTextFieldProps extends BaseComponentProps {
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
  description?: string;

  /**
   * Use to indicate that a value must be provided to allow the containing form to be submitted.
   */
  required?: boolean;

  /**
   * Use as the input's maxLength attribute.
   */
  maxLength?: number;

  /**
   * A render-time callback which receives the TextField component as a ref. Use this to save a ref
   * when you will need to set focus via _textFieldRef.focus().
   */
  componentRef?: ((component: ITextField) => void);

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

export function getBaseTextFieldProps<T extends BaseTextFieldProps>(
  props: T,
): FabricTextFieldProps {
  return {
    value: props.value,
    label: props.label,
    description: props.errorMessage ? undefined : props.description,
    disabled: props.disabled,
    required: props.required,
    errorMessage: props.errorMessage,
    placeholder: props.placeHolder,
    maxLength: props.maxLength,
    componentRef: props.componentRef,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onKeyDown: props.onKeyDown,
  };
}

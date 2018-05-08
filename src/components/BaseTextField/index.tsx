/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { ITextFieldProps as FabricTextFieldProps } from 'office-ui-fabric-react/lib/TextField';

export interface BaseTextFieldProps extends BaseComponentProps {
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

/**
 * This is a hack to allow us to accept jsx elements in the description prop.
 *
 * We depend on onRenderDescription to display the description. However, the fabric
 * textfield will only invoke it when it has a truthy description or errorMessage prop.
 * Therefore we pass an arbitrary truthy string. It's value is only used to invoke
 * onRenderDescription, and is otherwise ignored.
 */
const descriptionPresent = (props: BaseTextFieldProps) => {
  if (props.description === undefined) {
    return undefined;
  }
  return 'true';
};

const getOnRenderDescription = (description: string | JSX.Element | undefined, errorMessage: string | undefined) => {
  if (!description || errorMessage) {
    return () => null;
  }
  return () => <span className="y-base-text-field--description">{description}</span>;
};

export function getBaseTextFieldProps<T extends BaseTextFieldProps>(props: T): FabricTextFieldProps {
  return {
    value: props.value,
    label: props.label,
    description: descriptionPresent(props),
    onRenderDescription: getOnRenderDescription(props.description, props.errorMessage),
    disabled: props.disabled,
    ariaLabel: props.ariaLabel,
    'aria-required': props.required,
    errorMessage: props.errorMessage,
    placeholder: props.placeHolder,
    maxLength: props.maxLength,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onKeyDown: props.onKeyDown,
  };
}

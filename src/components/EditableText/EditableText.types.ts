/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface EditableTextProps extends BaseComponentProps {
  /**
   * Current text.
   */
  text?: string;

  /**
   * The text to display when text is empty.
   */
  promptText?: string;

  /**
   * The TextField placeHolder text.
   */
  placeHolder?: string;

  /**
   * An optional max length for the description field when editing.
   */
  maxLength?: number;

  /**
   * Returns the new text string when updated. Triggered by enter keypress or blur event to close the textfield.
   */
  onUpdate?: ((text: string) => void);

  /**
   * Triggered when the user enters edit mode.
   */
  onBeginEditing?: (() => void);

  /**
   * Triggered when the user exits edit mode.
   */
  onEndEditing?: (() => void);
}

export interface EditableTextState {
  isEditing: boolean;
  editedValue: string;
}

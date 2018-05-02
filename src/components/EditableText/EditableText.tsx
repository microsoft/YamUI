/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Clickable from '../Clickable';
import EditIcon from '../Icon/icons/Edit';
import TextField, { ITextField } from '../TextField';
import { KeyCodes } from '../../util/enums';
import './EditableText.css';

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

/**
 * Displays text which can be edited on click.
 */
export default class EditableText extends React.Component<EditableTextProps, EditableTextState> {
  private textFieldRef: ITextField | null;

  constructor(props: EditableTextProps) {
    super(props);
    this.textFieldRef = null;
    this.state = { isEditing: false, editedValue: '' };
  }

  public render() {
    const { editedValue, isEditing } = this.state;
    const { text, promptText, placeHolder, maxLength, className } = this.props;
    const classes = join(['y-editableText', className]);

    if (isEditing) {
      return (
        <div className={classes}>
          <TextField
            className="y-editableText--textfield"
            underlined={true}
            onChange={this.updateInternalEditedDescription}
            value={editedValue}
            placeHolder={placeHolder}
            maxLength={maxLength}
            componentRef={this.setTextFieldRef}
            onBlur={this.commitEdit}
            onKeyDown={this.onKeyDown}
          />
        </div>
      );
    }

    return (
      <span className={classes}>
        <Clickable
          onClick={this.handleEditClick}
          unstyled={true}
          className="y-editableText--clickable"
          ariaLabel={promptText}
        >
          <EditIcon /> <span className="y-editableText--clickableText">{text || promptText}</span>
        </Clickable>
      </span>
    );
  }

  public componentDidUpdate(_prevProps: EditableTextProps, prevState: EditableTextState) {
    // Set focus when we enter edit mode; better than depending on a hacky setTimeout()
    if (this.state.isEditing && !prevState.isEditing) {
      this.setTextFieldFocus();
    }
  }

  private onKeyDown = (event: any) => {
    switch (event.which) {
      case KeyCodes.escape:
        event.preventDefault();
        this.cancelEdit();
        break;
      case KeyCodes.enter:
        event.preventDefault();
        this.commitEdit();
        break;
      default:
    }
  };

  private setTextFieldRef = (component: ITextField | null) => {
    this.textFieldRef = component;
  };

  private updateInternalEditedDescription = (description: string) => {
    this.setState(() => ({ editedValue: description }));
  };

  private setTextFieldFocus() {
    if (this.textFieldRef) {
      this.textFieldRef.focus();
    }
  }

  private handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    this.setState(() => ({ isEditing: true, editedValue: this.props.text || '' }));
    if (this.props.onBeginEditing) {
      this.props.onBeginEditing();
    }
  };

  private cancelEdit = () => {
    this.setState(() => ({ isEditing: false, editedValue: '' }));
    if (this.props.onEndEditing) {
      this.props.onEndEditing();
    }
  };

  private commitEdit = () => {
    const { editedValue } = this.state;
    this.setState(() => ({ isEditing: false, editedValue: '' }));
    if (this.props.onUpdate) {
      this.props.onUpdate(editedValue);
    }
    if (this.props.onEndEditing) {
      this.props.onEndEditing();
    }
  };
}

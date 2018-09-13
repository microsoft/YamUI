/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface PreviewCardProps extends BaseComponentProps {
  /**
   * The name of the file or entity being represented. This will be displayed as the title.
   */
  name: string;

  /**
   * Description of the file.
   */
  description?: string;

  /**
   * Whether the description can be edited or not.
   */
  isDescriptionEditable?: boolean;

  /**
   * If provided, will display on the left of the PreviewCard.
   */
  imageUrl?: string;

  /**
   * The alt text to be displayed for the image.
   */
  imageDescription?: string;

  /**
   * If true will display a Spinner, or a ProgressIndicator if progress is also provided.
   * Note that the loading Spinner will be displayed in place of the description.
   */
  isLoading?: boolean;

  /**
   * A string to describe the loading state. If you've provided a progress value then
   * this string should also include that percentage.
   */
  loadingText?: string;

  /**
   * Percentage between 0 and 1. If provided, will replace the loading Spinner with
   * a ProgressIndicator to show the percentage.
   */
  progress?: number;

  /**
   * The text to display when the description is editable and currently empty.
   */
  emptyEditableDescriptionText?: string;

  /**
   * An optional max length for the description field when editing.
   */
  descriptionMaxLength?: number;

  /**
   * Triggered when the PreviewCard is clicked. This will not be triggered for clicks on the Remove icon
   * or to edit the description.
   */
  onClick?: (() => void);

  /**
   * AriaLabel value describing the onClick action.
   */
  clickAriaLabel?: string;

  /**
   * Triggered when the Remove icon is clicked.
   */
  onRemoveClick?: (() => void);

  /**
   * Alt text for the Remove button
   */
  removeAriaLabel?: string;

  /**
   * Returns the new description string when updated.
   */
  onDescriptionChange?: ((description: string) => void);
}

export interface PreviewCardState {
  isEditing: boolean;
}

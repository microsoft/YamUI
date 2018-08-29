/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import Block, { GutterSize, TextColor, TextSize } from '../Block';
import Box from '../Box';
import Clickable from '../Clickable';
import EditableText from '../EditableText';
import RemoveIcon from '../Icon/icons/Cancel';
import { IconSize } from '../Icon';
import Image from '../Image';
import MediaObject, { MediaObjectProps, MediaObjectSize } from '../MediaObject';
import ProgressIndicator from '../ProgressIndicator';
import Spinner, { SpinnerColor, SpinnerSize } from '../Spinner';
import { getClassNames } from './PreviewCard.styles';
import { PreviewCardProps, PreviewCardState } from './PreviewCard.types';

export class PreviewCard extends React.Component<PreviewCardProps & CustomizableComponentProps, PreviewCardState> {
  constructor(props: PreviewCardProps) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  public render() {
    const {
      className,
      removeAriaLabel,
      onRemoveClick,
      loadingText,
      progress,
      imageUrl,
      isLoading,
      imageDescription = '',
      theme = defaultTheme,
    } = this.props;
    const classNames = getClassNames({ allowOnClick: this.allowOnClick(), theme });

    const mediaObjectProps: MediaObjectProps = {
      size: MediaObjectSize.MEDIUM,
      className: classNames.media,
      imageContent: imageUrl && <Image source={imageUrl} fullWidth={true} description={imageDescription} />,
      titleContent: this.getNameContent(),
      metadataContent: this.getDescriptionContent(),
    };

    const onClick = this.allowOnClick() ? this.props.onClick : undefined;

    return (
      <Box className={join(['y-previewCard', className, classNames.root])} onClick={onClick}>
        <MediaObject {...mediaObjectProps} />
        {onRemoveClick && (
          <span className={classNames.remove}>
            <Clickable onClick={this.handleRemoveClick} unstyled={true} ariaLabel={removeAriaLabel} block={true}>
              <Block padding={GutterSize.SMALL}>
                <RemoveIcon size={IconSize.XSMALL} block={true} />
              </Block>
            </Clickable>
          </span>
        )}
        {isLoading &&
          this.hasProgress() && (
            <ProgressIndicator
              className={classNames.progress}
              ariaValueText={loadingText as string}
              percentComplete={progress as number}
            />
          )}
      </Box>
    );
  }

  // Allow onClick callback and hover styling if onClick prop was provided and we're not in edit mode
  private allowOnClick(): boolean {
    return !!this.props.onClick && !this.state.isEditing;
  }

  private getNameContent() {
    const { name, onClick, clickAriaLabel } = this.props;
    const size = this.state.isEditing ? TextSize.XSMALL : undefined;
    // Note that the actual onClick handler is on the outer Box wrapper,
    // while the clickAriaLabel is here on the keyboard-tabbable element.
    return (
      <Block textSize={size}>
        {onClick ? (
          <Clickable ariaLabel={clickAriaLabel} unstyled={true}>
            {name}
          </Clickable>
        ) : (
          name
        )}
      </Block>
    );
  }

  private getDescriptionContent(): React.ReactNode {
    const {
      isLoading,
      loadingText,
      description,
      descriptionMaxLength,
      emptyEditableDescriptionText,
      onDescriptionChange,
      isDescriptionEditable,
    } = this.props;
    const blockPush = this.state.isEditing ? -3 : 0;

    if (isLoading && !this.hasProgress()) {
      return (
        <Block textColor={TextColor.METADATA}>
          <Spinner text={loadingText as string} size={SpinnerSize.XSMALL} color={SpinnerColor.METADATA} />
        </Block>
      );
    }

    if (isDescriptionEditable) {
      return (
        <Block push={blockPush} textColor={TextColor.METADATA}>
          <EditableText
            text={description}
            promptText={emptyEditableDescriptionText}
            placeHolder={emptyEditableDescriptionText}
            maxLength={descriptionMaxLength}
            onUpdate={onDescriptionChange}
            onBeginEditing={this.enterEditMode}
            onEndEditing={this.exitEditMode}
          />
        </Block>
      );
    }

    return description;
  }

  private handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    (this.props.onRemoveClick as Function)();
  };

  private enterEditMode = () => {
    this.setState(() => ({ isEditing: true }));
  };

  private exitEditMode = () => {
    this.setState(() => ({ isEditing: false }));
  };

  private hasProgress() {
    return typeof this.props.progress === 'number';
  }
}

/**
 * PreviewCard is a compact representation of an uploaded file or other attachment. It supports an
 * editable description, and a loading experience (Spinner or percentage ProgressIndicator).
 */
@customizable('PreviewCard', ['theme'])
export default class CustomizablePreviewCard extends PreviewCard {}

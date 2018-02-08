/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { EventGroup } from 'office-ui-fabric-react/lib/Utilities';
import { directionalKeyCodes } from '../enums';

export type NavigationMode = 'mouse' | 'keyboard';

export type NavigationModeCallback = (mode: NavigationMode) => void;

/**
 * A class which listens to page-level mouse/keyboard events and manages callback subscriptions.
 * This should be exposed as a singleton via './keyboardNavigation.ts', do not import this class directly.
 */
export default class KeyboardNavigationEventListener {
  private element: HTMLElement;
  private eventGroup: EventGroup;
  private mode: NavigationMode;

  constructor(element: HTMLElement) {
    this.element = element;
    this.mode = 'mouse';
    this.eventGroup = new EventGroup(this);
    this.eventGroup.on(this.element, 'mousedown', this.onMouseDown, true);
    this.eventGroup.on(this.element, 'keydown', this.onKeyDown, true);
  }

  public getMode() {
    return this.mode;
  }

  public destroy() {
    this.eventGroup.off();
  }

  public subscribe(callback: NavigationModeCallback): void {
    this.eventGroup.on(this, 'modeChange', callback);
  }

  public unsubscribe(callback: NavigationModeCallback): void {
    this.eventGroup.off(this, 'modeChange', callback);
  }

  private onMouseDown = () => {
    if (this.mode !== 'mouse') {
      this.mode = 'mouse';
      this.eventGroup.raise('modeChange', this.mode);
    }
  };

  private onKeyDown = (event: KeyboardEvent) => {
    if (directionalKeyCodes.indexOf(event.which) > -1) {
      this.mode = 'keyboard';
      this.eventGroup.raise('modeChange', this.mode);
    }
  };
}

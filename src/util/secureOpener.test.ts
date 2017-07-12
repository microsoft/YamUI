/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { secureOpen } from './secureOpener';

describe('secureOpener', () => {
  describe('secureOpen()', () => {
    let spy: jest.SpyInstance<{}>;
    beforeEach(() => {
      spy = jest.spyOn(window, 'open');
    });

    it('opens a given URL in a new window', () => {
      secureOpen('/link.html');
      expect(spy).toHaveBeenCalledWith('/link.html', '_blank');
    });

    describe('when window.open returns a window instance', () => {
      const newWindow = {opener: 'opener'};
      window.open = function (): any {
        return newWindow;
      };

      it('removes the reference back to the original window', () => {
        secureOpen('/link.html');
        expect(newWindow.opener).toEqual(null);
      });
    });
  });
});

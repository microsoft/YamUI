/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

import Image, { ImageProps, ImageFit, ImageLoadState } from './index';
import { Image as FabricImage } from 'office-ui-fabric-react/lib/Image';


describe('<Image />', () => {
  let component: ShallowWrapper<ImageProps, {}>;
  let fullComponent: ReactWrapper<ImageProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <Image source="image.png" description="description" />,
      );
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-image')).toBe(true);
    });

    it('uses the source as img src', () => {
      expect(component.find(FabricImage).props().src).toEqual('image.png');
    });

    it('uses the description as img alt text', () => {
      expect(component.find(FabricImage).props().alt).toEqual('description');
    });

    it('does not set a height', () => {
      expect(component.find(FabricImage).props().height).toEqual(undefined);
    });

    it('does not set a width', () => {
      expect(component.find(FabricImage).props().width).toEqual(undefined);
    });

    it('does not set an imageFit', () => {
      expect(component.find(FabricImage).props().imageFit).toEqual(undefined);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Image source="image.png" description="description" className="TEST_CLASSNAME" />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with height and width', () => {
    beforeEach(() => {
      component = shallow(
        <Image source="image.png" description="description" height={50} width={100} />,
      );
    });

    it('uses the given height', () => {
      expect(component.find(FabricImage).props().height).toEqual(50);
    });

    it('uses the given width', () => {
      expect(component.find(FabricImage).props().width).toEqual(100);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with imageFit', () => {
    beforeEach(() => {
      component = shallow(
        <Image source="image.png" description="description" imageFit={ImageFit.cover} />,
      );
    });

    it('uses the given imageFit', () => {
      expect(component.find(FabricImage).props().imageFit).toEqual(ImageFit.cover);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with fullWidth', () => {
    beforeEach(() => {
      component = shallow(
        <Image source="image.png" description="description" fullWidth />,
      );
    });

    it('renders the fullWidth class', () => {
      expect(component.hasClass('y-image__fullWidth')).toBe(true);
    });

    it('uses width 100%', () => {
      expect(component.find(FabricImage).props().width).toEqual('100%');
    });

    it('does not pass an image height', () => {
      expect(component.find(FabricImage).props().height).toEqual(undefined);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when provided a loading state callback', () => {
    let loadState: ImageLoadState | undefined;
    function setLoadState(newLoadState: ImageLoadState) {
      loadState = newLoadState;
    }
    jest.useFakeTimers();

    beforeEach(() => {
      loadState = undefined;
      fullComponent = mount(
        <Image source="image.png" description="description" onLoadingStateChange={setLoadState} />,
      );
    });

    it('triggers a callback with loaded status on load', () => {
      fullComponent.find('img').simulate('load');
      setTimeout(() => {}, 1);
      
      jest.runAllTimers();
      expect(loadState).toEqual(ImageLoadState.loaded);
    });

    it('triggers a callback with error status on error', () => {
      fullComponent.find('img').simulate('error');
      setTimeout(() => {}, 1);
      
      jest.runAllTimers();
      expect(loadState).toEqual(ImageLoadState.error);
    });
  });

});

/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Image, { BorderType, ImageProps, ImageFit, ImageLoadState } from '.';

describe('<Image />', () => {
  let component: ShallowWrapper<ImageProps>;
  let fullComponent: ReactWrapper<ImageProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with height 50 and width 100', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" height={50} width={100} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with imageFit cover', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" imageFit={ImageFit.cover} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with border type', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" borderType={BorderType.ROUND} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with fullWidth', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" fullWidth={true} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with shouldFadeIn', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" shouldFadeIn={true} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with block', () => {
    beforeEach(() => {
      component = shallow(<Image source="image.png" description="description" block={true} />);
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

    beforeEach(() => {
      jest.useFakeTimers();
      loadState = undefined;
      fullComponent = mount(<Image source="image.png" description="description" onLoadingStateChange={setLoadState} />);
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

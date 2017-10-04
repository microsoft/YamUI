/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MediaObject, { MediaObjectSize, MediaObjectProps } from './index';

const image = <img src="404.jpg" alt="" />;
const title = <div className="TITLE">TITLE CONTENT</div>;
const metadata = <div className="METADATA">METADATA CONTENT</div>;
const extra = <div className="EXTRA">EXTRA CONTENT</div>;
const children = <div className="CHILDREN">CHILDREN CONTENT</div>;

describe('<MediaObject />', () => {
  let component: ShallowWrapper<MediaObjectProps, {}>;

  describe('with minimal options', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} />);
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-media-object')).toBe(true);
    });

    it('contains its size className', () => {
      expect(component.hasClass('y-media-object__size-medium')).toBe(true);
    });

    it('image column contains its size className', () => {
      expect(component.find('.y-media-object__size-medium--image').length).toBe(1);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-media-object')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with image content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} imageContent={image} />);
    });

    it('renders the image content', () => {
      expect(
        component
          .render()
          .find('img')
          .attr('src'),
      ).toEqual('404.jpg');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with title content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} titleContent={title} />);
    });

    it('renders the title content', () => {
      expect(
        component
          .render()
          .find('.TITLE')
          .text(),
      ).toEqual('TITLE CONTENT');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with metadata content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} metadataContent={metadata} />);
    });

    it('renders the metadata content', () => {
      expect(
        component
          .render()
          .find('.METADATA')
          .text(),
      ).toEqual('METADATA CONTENT');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('at extra small size', () => {
      beforeEach(() => {
        component = shallow(
          <MediaObject size={MediaObjectSize.XSMALL} metadataContent={metadata} />,
        );
      });

      it('does not render the metadata content', () => {
        expect(component.render().find('.METADATA').length).toEqual(0);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with extra content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} extraContent={extra} />);
    });

    it('does not render the extra content by default', () => {
      expect(component.render().find('.EXTRA').length).toEqual(0);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('at extra large size', () => {
      beforeEach(() => {
        component = shallow(<MediaObject size={MediaObjectSize.XLARGE} extraContent={extra} />);
      });

      it('does render the extra content', () => {
        expect(
          component
            .render()
            .find('.EXTRA')
            .text(),
        ).toEqual('EXTRA CONTENT');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with arbitrary children', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM}>{children}</MediaObject>);
    });

    it('renders them', () => {
      expect(
        component
          .render()
          .find('.CHILDREN')
          .text(),
      ).toEqual('CHILDREN CONTENT');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ActionLink, { ActionLinkProps } from './index';
import Down from '../Icon/icons/Down';

describe('<ActionLink />', () => {
  let component: ShallowWrapper<ActionLinkProps>;

  describe('with href', () => {
    beforeEach(() => {
      component = shallow(<ActionLink text="Download" icon={Down} href="https://yammer.com" newWindow={true} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with href and ariaLabel', () => {
    beforeEach(() => {
      component = shallow(
        <ActionLink text="Download" icon={Down} ariaLabel="Download file" href="https://yammer.com" newWindow={true} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with onClick', () => {
    let onClick: jest.Mock;

    beforeEach(() => {
      onClick = jest.fn();
      component = shallow(<ActionLink text="Download" icon={Down} onClick={onClick} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.simulate('click');
      });

      it('calls props.onClick', () => {
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('with onClick and ariaLabel', () => {
    let onClick: jest.Mock;

    beforeEach(() => {
      onClick = jest.fn();
      component = shallow(<ActionLink text="Download" ariaLabel="Download file" icon={Down} onClick={onClick} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <ActionLink
          className="TEST_CLASSNAME"
          text="Download"
          icon={Down}
          ariaLabel="Download the file"
          href="https://yammer.com"
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with compact set to true', () => {
    beforeEach(() => {
      component = shallow(
        <ActionLink
          className="TEST_CLASSNAME"
          text="Download"
          icon={Down}
          ariaLabel="Download the file"
          href="https://yammer.com"
          compact={true}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

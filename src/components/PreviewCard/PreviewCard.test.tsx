/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Clickable from '../Clickable';
import EditableText from '../EditableText';
import MediaObject from '../MediaObject';
import PreviewCard, { PreviewCardProps } from './index';

describe('<PreviewCard />', () => {
  let component: ShallowWrapper<PreviewCardProps>;
  let onClick: jest.Mock;
  let onChange: jest.Mock;

  describe('with minimal options', () => {
    beforeEach(() => {
      component = shallow(<PreviewCard name="Filename.gif" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with description', () => {
    beforeEach(() => {
      component = shallow(<PreviewCard name="Filename.gif" description="file description" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when description is edible', () => {
    describe('with onDescriptionChange callback', () => {
      beforeEach(() => {
        onChange = jest.fn();
        component = shallow(
          <PreviewCard
            name="Filename.gif"
            description="file description"
            isDescriptionEditable={true}
            descriptionMaxLength={120}
            emptyEditableDescriptionText="empty placeholder text"
            onDescriptionChange={onChange}
          />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      describe('when entering edit mode', () => {
        beforeEach(() => {
          const editableText = shallow(component.find(MediaObject).prop('metadataContent') as any).find(EditableText);
          const beginEditingCallback = editableText.prop('onBeginEditing') as Function;
          beginEditingCallback();
          component.update();
        });

        it('matches its snapshot', () => {
          expect(component).toMatchSnapshot();
        });
      });

      describe('when exiting edit mode', () => {
        beforeEach(() => {
          const editableText = shallow(component.find(MediaObject).prop('metadataContent') as any).find(EditableText);
          const endEditingCallback = editableText.prop('onEndEditing') as Function;
          endEditingCallback();
          component.update();
        });

        it('matches its snapshot', () => {
          expect(component).toMatchSnapshot();
        });
      });
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<PreviewCard name="Filename.gif" className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with image', () => {
    beforeEach(() => {
      component = shallow(
        <PreviewCard name="Filename.gif" imageUrl="filename.png" imageDescription="file description" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      component = shallow(<PreviewCard name="Filename.gif" isLoading={true} loadingText="loading..." />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with loading progress', () => {
    beforeEach(() => {
      component = shallow(
        <PreviewCard name="Filename.gif" isLoading={true} loadingText="Uploading, currently at 50%" progress={0.5} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with onClick handler', () => {
    beforeEach(() => {
      onClick = jest.fn();
      component = shallow(<PreviewCard name="Filename.gif" onClick={onClick} clickAriaLabel="Show file preview" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.simulate('click');
      });

      it('triggers the onClick callback prop', () => {
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('with onRemoveClick handler', () => {
    beforeEach(() => {
      onClick = jest.fn();
      component = shallow(
        <PreviewCard name="Filename.gif" onRemoveClick={onClick} removeAriaLabel="Remove this attachment" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when the remove button is clicked', () => {
      beforeEach(() => {
        const onRemoveClick: (event: any) => void = component.find(Clickable).prop('onClick') as (event: any) => void;
        onRemoveClick({ stopPropagation: () => undefined });
      });

      it('triggers the onRemoveClick callback prop', () => {
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});

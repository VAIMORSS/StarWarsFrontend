import React from 'react'
import { shallow } from 'enzyme';
import People from '.';
import TestStoreWrapper from '../common/TestStoreWrapper';

describe('App', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<div debug>{TestStoreWrapper(
            <People />)}</div>
        );
        expect(component).toMatchSnapshot();
    })
});
import React from 'react'
import {shallow, mount} from 'enzyme';
import SinglePerson from './index';
import { PeopleList } from '../../assets/PeopleList';

describe('Single Person Test',()=>{
    it('should render correctly in "debug" mode',()=>{
        const component =shallow(<SinglePerson Person={PeopleList[0]} debug/>);
        expect(component).toMatchSnapshot();
    })

    it('should start loading on button press',()=>{
        const component = mount(<SinglePerson Person={PeopleList[0]} />)
        component.find('button').simulate('click');
        expect(component.find('SinglePerson').instance().state.loading).toBe(true);
    })
});

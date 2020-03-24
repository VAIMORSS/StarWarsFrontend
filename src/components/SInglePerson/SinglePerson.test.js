import React from 'react'
import {shallow} from 'enzyme';
import SinglePerson from './index';
import testPerson from './../../assets/testPerson.json'

describe('Single Person',()=>{
    it('should render correctly in "debug" mode',()=>{
        const component =shallow(<SinglePerson Person={testPerson} debug/>);
        expect(component).toMatchSnapshot();
    })
});

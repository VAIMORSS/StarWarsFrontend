import React from 'react'
import { shallow, mount } from 'enzyme';
import InfoModal from './index';
import testPerson from './../../assets/testPerson.json';

describe('InfoModal Test',()=>{
    it('should render correctly in "debug" mode',()=>{
        const component =shallow(<InfoModal  debug person={testPerson}/>);
        expect(component).toMatchSnapshot();
    })
});
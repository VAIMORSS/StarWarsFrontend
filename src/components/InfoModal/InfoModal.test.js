import React from 'react'
import {shallow} from 'enzyme';
import InfoModal from './index';
import testPerson from './../../assets/testPerson.json';

describe('App',()=>{
    it('should render correctly in "debug" mode',()=>{
        const component =shallow(<InfoModal  debug person={testPerson}/>);
        expect(component).toMatchSnapshot();
    })
});
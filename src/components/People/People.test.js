import React from 'react'
import { mount } from 'enzyme';
import People from '.';
import configureStore  from 'redux-mock-store';
import { PeopleList } from '../../assets/PeopleList';
import { Provider } from 'react-redux';

describe('People Test', () => {
     const test=()=>(dispatch)=>dispatch({
         type:'lala',
         value:{}
     })
    const initialStore = {
        people:{people:PeopleList},
        getPeopleList:test
    };
    const mockStore = configureStore()
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialStore);
        container = mount(
        <Provider store={store}> <People  /></Provider>
       )  
    })

    it('should render correctly in "debug" mode', () => {
        expect(container).toMatchSnapshot();
    })

    it('on text in the search bar changed the search string state should change', () => {
        
        const input = container.find('input#searchBar');
        input.simulate('focus');
        input.simulate('change', { target: { value: 'Changed' } });
        input.simulate('keyDown', {
            which: 27,
            target: {
                blur() {
                    // Needed since <EditableText /> calls target.blur()
                    input.simulate('blur');
                },
            },
        });
        
        expect(container.find('People').instance().state.search).toEqual('Changed');
    })
});
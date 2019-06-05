import { GET_ALL_PEOPLE } from './types';
import { PeopleList } from './../PeopleList';

export const getPeopleList = () => dispatch =>{
    dispatch({
        type:GET_ALL_PEOPLE,
        payload: PeopleList
    })
}
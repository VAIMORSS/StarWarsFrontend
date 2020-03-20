import { GET_ALL_PEOPLE } from './types';
import { PeopleList } from '../../assets/PeopleList';

export const getPeopleList = () => dispatch =>{
    dispatch({
        type:GET_ALL_PEOPLE,
        payload: PeopleList
    })
}
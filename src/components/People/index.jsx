import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SinglePerson from '../SInglePerson';
import { getPeopleList } from '../../store/actions/peopleActions';
import "./../../App/App.css";
import logo from './../../img/logo.png';


class People extends Component {


    constructor(props) {
        super(props);
        this.state={
            search:''
        }
    }

    async componentDidMount(){
        try{
            this.props.getPeopleList();
        }catch(e){

        }
    }

    handleChange(event){
        this.setState({
            search:event.target.value
        })
    }

    render() {
        const {people} = this.props.people; 
        
        let filteredPeople = people.filter(
            (person)=>{
                return person.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; 
            }
        );


        return (
            <div className="people container">
                <img className="logo" src={logo} alt="logo" />
                <input
                    type="text"
                    id="searchBar"
                    className="input-field col s12 searchBar"
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Search Here"
                />
                <div className="card-deck">
                    {filteredPeople.map(person=>
                            <div key={person.id}>
                                <SinglePerson key={person.id} Person={person} />
                            </div>
                    )}
                </div>
                
            </div>
        )
    }
}

People.defaultProps={
    getPeopleList:()=>{}
}

People.propTypes={
    people:PropTypes.object.isRequired,
    getPeopleList:PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    people:state.people
})

export default connect(
    mapStateToProps,
    {getPeopleList}
)(People);


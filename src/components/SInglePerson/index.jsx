import React, { Component } from "react";
import axios from "axios";
import InfoModal from "../InfoModal";

class SinglePerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: Object,
            buttonPresses: false,
            modalShow: false,
            homeworld: Object,
            species: Object,
            films: [Object],
            loading: false
        };


    }

    handleClick=()=> {
        this.setState({ loading: true });
        axios.get(`/${this.props.Person.id}`).then(res => {
            if(res.status!==200){
                this.setState({
                    loading:false
                })
                return;
            }
            this.setState({
                person: res.data,
                buttonPresses: true,
                modalShow: true,
                homeworld: res.data.homeworld,
                species: res.data.species,
                films: res.data.films,
                loading: false
            });
        });
    };

    isEmpty=()=> {
        for (var key in this.state.person) {
            if (this.state.person.hasOwnProperty(key)) return false;
        }
        return true;
    };


    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="card">
                <img
                    className="card-img-top avatar"
                    src="https://starwarsblog.starwars.com/wp-content/uploads/2017/01/sw-the-last-jedi-tall-1200x630.jpg"
                    alt="Card image cap"
                ></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.Person.name}</h5>
                </div>
                <div className="card-footer">
                    {this.state.loading ? (
                        <div className="lds-hourglass"></div>
                    ) : (
                            <button className={`btn btn-dark ${this.props.Person.id}`} onClick={this.handleClick}>
                                More Info
                            </button>
                        )}
                </div>

                {this.state.modalShow&&<InfoModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                    person={this.state.person}
                    homeworld={this.state.homeworld}
                    species={this.state.species}
                    films={this.state.films}
                />}
            </div>
        );
    }
}

export default SinglePerson;

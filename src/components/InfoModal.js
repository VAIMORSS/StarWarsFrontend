import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";
import "./../App.css";

class InfoModal extends React.Component {
  render() {
    const person = this.props.person;
    const planet = this.props.homeworld;
    const species = this.props.species;
    let i = 0;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {person.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="row">
          <div className="modal-card">
            <legend>Physic</legend>
            <hr />
            <p><b>Height:</b>{person.height}<br /><b>Mass:</b>{person.mass}<br /><b>Hair Color:</b>{person.hair_color}<br /><b>Skin Color:</b>{person.skin_color} </p>
          </div>
          <div className="modal-card">
            <legend>Personal Information</legend>
            <hr />
            <p><b>Gender:</b>{person.gender}<br /><b>Birth Year:</b>{person.birth_year}</p>
          </div>
          <div className="modal-card">
            <legend>Planet Information</legend>
            <hr />
            <p><b>Title:</b>{planet.name}<br /><b>Terrain:</b>{planet.terrain}<br /><b>Population:</b>{planet.population} </p>
          </div>
          <div className="modal-card">
            <legend>Species</legend>
            <hr />
            <p><b>Name:</b>{species.name}<br /><b>Average Lifespan:</b>{species.average_lifespan}<br /><b>Classification:</b>{species.classification}<br /><b>Language:</b>{species.language} </p>
          </div>
          </div>
          <legend>Films</legend>
          <div className="row">
            {this.props.films.map(film =>
              <div key={i++} className="modal-card col-lg-6">
                <p><b>Title:</b>{film.title} <br /><b>Director:</b>{film.director}<br /><b>Producers:</b>{film.producer}<br /><b>Release Date:</b>{film.release_date}</p>
              </div>
            )}
          </div>



        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfoModal;
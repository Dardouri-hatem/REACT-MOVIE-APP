import {Button,Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import Rating from "./Rating"



class AddModal extends Component {
    state={
        nameFilm:"",
        imgURL:"",
        Rate:""
    }
   

    render() {
        
        return (
            <div>
                <Modal show={this.props.showModal}>
                    <Modal.Header> Add Movie </Modal.Header>
                    <Modal.Body>
                        <label > Movie Name : </label><br/>
                        <input type="text" onChange={(e)=>this.setState({nameFilm:e.target.value})}></input><br/>
                        <label > Image URL : </label><br/>
                        <input type="text" onChange={(e)=>this.setState({imgURL:e.target.value})}></input><br/><br/>
                        <label>Movie Rating : </label>
                        <Rating
                         rate={this.state.Rate}
                         changeRate={(value) => this.setState({Rate:value})}
                         size={"40px"}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Close</Button>
                        <Button onClick={()=>this.props.AddMovie(this.state.imgURL,this.state.nameFilm,this.state.Rate)}>Add</Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        )
    }
}

export default AddModal

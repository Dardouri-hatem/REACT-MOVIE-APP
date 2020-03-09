import SpinnerIcon from "./SpinnerIcon"
import React, { Component } from 'react'
import './Spinner.css'

 class Spinner extends Component {
 
  
    render() {
        return (
            <div className="spinner">
            <SpinnerIcon/>
            </div>
        )
    }
 }


export default Spinner
import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {

    getStudentData = () => {
        axios.get("http://localhost:3000/api1/students").then(
            response => { console.log('success', response.data); },
            error => { console.log('failed', error); }
        )
    }

    getCarData = () => {
        axios.get("http://localhost:3000/api2/cars").then(
            response => { console.log('success', response.data); },
            error => { console.log('failed', error); }
        )
    }


    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>
                    click me
                </button>

                <button onClick={this.getCarData}>
                    Get Car
                </button>
            </div>
        )
    }
}

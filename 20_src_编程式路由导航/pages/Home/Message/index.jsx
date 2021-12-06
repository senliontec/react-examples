import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detaill from './Detail'

export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', title: "msg1" },
            { id: '02', title: "msg2" },
            { id: '03', title: "msg3" }
        ]
    }

    replaceShow = (id, title) => {
        this.props.history.replace(`/home/message/detail/${id}/${title}`);
    }

    pushShow = (id, title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`);
    }

    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}> {msgObj.title}</Link>
                                    &nbsp; <button onClick={() => { this.pushShow(msgObj.id, msgObj.title) }}>  Push </button>
                                    &nbsp; <button onClick={() => { this.replaceShow(msgObj.id, msgObj.title) }}> Replace </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <ul>
                    <Route path="/home/message/detail/:id/:title" component={Detaill} />
                </ul>
            </div >

        )
    }
}

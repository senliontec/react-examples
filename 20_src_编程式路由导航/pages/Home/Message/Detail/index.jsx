import React, { Component } from 'react'
import qs from 'querystring'



const DetailData = [
    { id: '01', content: 'Hello, China' },
    { id: '02', content: 'Hello, Me' },
    { id: '03', content: "I LOVE CHINA" }
]

export default class Detail extends Component {
    render() {

        console.log(this.props)

        const { id, title } = this.props.match.params;

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id;
        })

        return (
            <ul>
                <li> ID:{id}</li>
                <li> TITLE:{title}</li>
                <li> CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}

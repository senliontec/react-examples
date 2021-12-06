import React, { Component } from 'react'
import qs from 'querystring'



const DetailData = [
    { id: '01', content: 'Hello, China' },
    { id: '02', content: 'Hello, Me' },
    { id: '03', content: "I LOVE CHINA" }
]

export default class Detail extends Component {
    render() {

        const urlSp = new URLSearchParams(this.props.location.search)

        function getQueryString(key) {
            return urlSp.get(key);
        }

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === getQueryString('id');
        })

        return (
            <ul>
                <li> ID:{getQueryString('id')}</li>
                <li> TITLE:{getQueryString('title')}</li>
                <li> CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}

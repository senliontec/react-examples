import React, { Component } from 'react'
import { Button, DatePicker, Pagination } from 'antd'
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons'
import './App.less'
const { RangePicker } = DatePicker;


export default class App extends Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                APP...
                <Button type="link">Primary Button</Button>
                <WechatOutlined />
                <WeiboOutlined />


                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>


                <DatePicker onChange={this.onChange} />

                <RangePicker />

                <Pagination defaultCurrent={6} total={500}>sdfsdf</Pagination>

            </div>
        )
    }
}

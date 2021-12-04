import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component {

    search = async () => {
        const { keyWordElement: { value: keyWord } } = this
        PubSub.publish('atguigu', { isFirst: false, isLoading: true });

        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`);
            const data = await response.json();
            PubSub.publish('atguigu', { isLoading: false, users: data.items });

        } catch (error) {
            console.log(error);
            PubSub.publish('atguigu', { isLoading: false, err: error.message });
        }

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

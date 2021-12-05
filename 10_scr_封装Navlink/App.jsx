// yarn add react-router-dom@5.2.0
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-2 col-xs-offset-2">
                        <div class="list-group">
                            <MyNavLink to="/about"> About </MyNavLink >
                            <MyNavLink to="/home"> Home </MyNavLink >
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="panel">
                            <div class="panel-body">
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// yarn add react-router-dom@5.2.0
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
                            <MyNavLink to="/atguigu/about"> About </MyNavLink >
                            <MyNavLink to="/atguigu/home"> Home </MyNavLink >
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="panel">
                            <div class="panel-body">
                                <Switch>
                                    <Route path="/atguigu/about" component={About} />
                                    <Route path="/atguigu/home" component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * Created by Li on 2017/3/28.
 */
import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router'
import logo from './logo.svg';
class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><img alt="我的博客"/></li>
                    <li><a>CSS3</a></li>
                    <li>Mobile</li>
                    <li>Sass</li>
                    <li>JavaScript</li>
                    <li>译文</li>
                    <li>工具</li>
                    <li>标签云</li>
                </ul>
            </nav>
        )

    }
}

export default Nav

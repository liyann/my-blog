/**
 * Created by Li on 2017/3/28.
 */
import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router'
import logo from '../assets/logo.svg';
import './layout.css'
// import '../default.css'
class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        let nav = document.getElementsByTagName('nav');
        let height = nav[0].currentStyle ? nav[0].currentStyle.height : getComputedStyle(nav[0], null).height;
        height === "180px" ? nav[0].className = "slow-move-back" : nav[0].className = "slow-move";
        // console.log(nav[0].className,height);
    }

    render() {
        return (
            <nav className="top-nav">
                <div className="clearfloat">
                    <h1 className="pic"><a href="/"><img id="logo" alt="我的博客" src={logo}/></a></h1>
                    <div className="menu-mobile" onClick={() => this.handleMenuClick()}>
                        <a href="#"><span>MENU</span></a>
                        <div className="menu-icon"/>
                    </div>

                    <div className="tree-row-list">
                        <ul>
                            <li><a href="#">CSS3</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Sass</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">JS</a></li>
                            <li><a href="#">译文</a></li>
                            <li><a href="#">工具</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Vue</a></li>
                            <li><a href="#">Angular</a></li>
                        </ul>
                    </div>

                    <div className="label-list">
                        <ul>
                            <li><a href="#">CSS3</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Sass</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">译文</a></li>
                            <li><a href="#">工具</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Vue</a></li>
                            <li><a href="#">Angular</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default TopNav

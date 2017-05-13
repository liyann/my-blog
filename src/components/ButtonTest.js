/**
 * Created by Li on 2017/4/9.
 */
import React, {Component} from 'react';
import Link from 'react-router-dom'
import {Button} from 'antd';
import '../styles/App.css';

class ButtonTest extends Component {
    render() {
        return (
            <div style={{float:"right"}}>
                <div className="App">
                    <Button type="danger">登录</Button>
                </div>
            </div>
        );
    }

}

export default ButtonTest;
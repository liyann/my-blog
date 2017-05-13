/**
 * Created by Li on 2017/4/5.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BackTop} from 'antd'

export default class BackToTop extends Component {

    render() {
        return (
            <div>
                <BackTop>
                    <div className="ant-back-top-inner">UP</div>
                </BackTop>
                Scroll down to see the bottom-right
                <strong style={{ color: '#1088e9' }}> blue </strong>
                button.
            </div>
        )
    }
}
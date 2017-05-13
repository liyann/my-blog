/**
 * Created by Li on 2017/4/10.
 */
import React from 'react'
import LeftNav from './LeftNav'
import TopNav from './TopNav'
import Article from '../components/Article'
import ButtonTest from "../components/ButtonTest"
import {BackTop} from 'antd'

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <TopNav/>
                <LeftNav/>
                <Article/>
                <ButtonTest/>
                <div>
                    <BackTop />
                </div>

            </div>
        )
    }
}

export default Layout
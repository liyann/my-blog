/**
 * Created by Li on 2017/4/10.
 */
import React from 'react'
import LeftNav from '../components/LeftNav'
import TopNav from '../components/TopNav'
import Article from '../components/Article'

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <TopNav/>
                <LeftNav/>
            </div>
        )
    }
}

export default Layout
/**
 * Created by Li on 2017/4/10.
 */
import React, {Component} from 'react'
import FA from 'react-fontawesome'
import head from '../assets/head-portrait.jpg'
import './layout.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headIcon: '',
            username: '',
            description: 'this is my blog',
            totalArticle: -1,
            archive: -1,
            tag: -1
        }
    }

    componentDidMount() {
        console.log('开始发送请求')

        function getTotalArticle() {
            return axios.get(`http://www.maijinta.top:8888/p/count`)
        }

        function getHeadIcon() {
            return axios.get('')
        }

        function getUserName() {

        }

        function getDescription() {

        }

        function getTotalArchive() {
            return axios.get('http://www.maijinta.top:8888/p/tag/count')
        }

        function getTotalTag() {
            return axios.get('http://www.maijinta.top:8888/p/archive/count')
        }

        axios.all([getTotalArticle(), getTotalArchive(), getTotalTag()])
            .then(axios.spread((article, archive, tag) => {
                this.setState({
                    totalArticle: article.data.data,
                    archive: archive.data.data,
                    tag: tag.data.data
                })
            })).catch((error) => console.log(error, '请求失败'))

    }


    showSearchInput() {
        console.log('鼠标移入', this)
    }

    hideSearchInput() {
        console.log('鼠标移出', this)
    }

    render() {
        return (
            <div className="left-nav">
                <div className="head-icon">
                    <img src={head} alt="头像"/>
                </div>
                <em>liyann</em>
                <div className="blog-intro">
                    <p>前端博客</p>
                </div>
                <div className="statistics clearfloat">
                    <div className="st-article">
                        <p>{this.state.totalArticle}</p>
                        <a href="/article"><FA name="file" size="lg"/></a>
                    </div>
                    <div className="st-classfy">
                        <p>{this.state.archive}</p>
                        <a href=""><FA name="folder" size="lg"/></a>
                    </div>
                    <div className="st-tag">
                        <p>{this.state.tag}</p>
                        <a href=""><FA name="tags" size="lg"/></a>
                    </div>
                </div>
                <div className="item-list">
                    <Router>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/archive">archive</Link></li>
                            <li><Link to="/tag">tags</Link></li>

                            <div className="searech" onMouseOver={() => this.showSearchInput()}
                                 onMouseOut={() => this.hideSearchInput()}>
                                <li>Search</li>
                                <input type="text" placeholder="请输入搜索内容"/>

                            </div>
                        </ul>
                    </Router>
                </div>
            </div>
        )
    }
}

export  default LeftNav
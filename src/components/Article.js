/**
 * Created by Li on 2017/4/9.
 */
import React, {Component} from 'react'
import Icon from 'react-fontawesome'
import axios from 'axios'

class Article extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            title: '默认标题',
            publishTime: '',
            browseCount: -1,
            tags: [],
            content: ''
        }
    }

    componentWillMount() {
        axios.get(`http://www.maijinta.top:8888/p/${1}`)
            .then(res => {
                let {title, publishTime, browseCount, tags, content} = res.data.data
                this.setState({
                    title: title,
                    publishTime: '2017-1-01',//todo
                    browseCount: browseCount,
                    tags: tags || ['无'],
                    content: content
                })
            }).catch(error => console.log(error, '获取文章失败'))
    }


    render() {
        return (
            <section className="index-article">
                <div className="article-header">
                    <h2><a href="">{this.state.title}</a></h2>
                </div>
                <div className="article-info clearfloat">
                    <div className="submitted">
                        作者:<span>liyann</span>
                        时间:<span>{this.state.publishTime}</span>
                        阅读:<span>{this.state.browseCount}</span>
                    </div>
                    <div className="article-tag">
                        <Icon name="tags"/>
                        {this.state.tags.map(item =>
                            <em key={item}><a href="">{item}</a></em>
                        )}
                    </div>
                </div>

                <div className="article-body">
                    <p>{this.state.content}</p>
                </div>
                <div className="article-more">
                    <a href="./fullArticle">阅读全文</a>
                </div>
            </section>
        )
    }
}

export default Article
/**
 * Created by Li on 2017/4/9.
 */
import React, {Component} from 'react'
import Icon from 'react-fontawesome'

class FullArticle extends Component {
    render() {
        return (
            <section className="full-article">
                <div className="article-header">
                    <a href="">HTML5的section标签</a>
                </div>
                <div className="article-info clearfloat">
                    <div className="submitted">
                        作者:<span>liyann</span>
                        时间:<span>2017-03-27</span>
                        点击:<span>223</span>
                    </div>
                    <div className="article-tag">
                        <Icon name="tags"/>
                        <em><a href="">CSS</a></em>
                        <em><a href="">CSS学习</a></em>
                    </div>
                </div>
                <div className="article-body">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;section元素表示文档或应用的一个部分。所谓“部分”，这里是指按照主题分组的内容区域，通常会带有标题。也就是每个section对应不同的主题。注意是内容本身的主题，而不是其他人为设定的划分标准。section的例子包括书的章节回目、多tab对话框的每个tab页、论文以数字编号的小节。网站的主页可能分成介绍、最新内容、联系信息等section
                        section元素表示文档或应用的一个部分。所谓“部分”，这里是指按照主题分组的内容区域，通常会带有标题。也就是每个section对应不同的主题。注意是内容本身的主题，而不是其他人为设定的划分标准。section的例子包括书的章节回目、多tab对话框的每个tab页、论文以数字编号的小节。网站的主页可能分成介绍、最新内容、联系信息等section
                        section元素表示文档或应用的一个部分。所谓“部分”，这里是指按照主题分组的内容区域，通常会带有标题。也就是每个section对应不同的主题。注意是内容本身的主题，而不是其他人为设定的划分标准。section的例子包括书的章节回目、多tab对话框的每个tab页、论文以数字编号的小节。网站的主页可能分成介绍、最新内容、联系信息等section </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;section元素表示文档或应用的一个部分。所谓“部分”，这里是指按照主题分组的内容区域，通常会带有标题。也就是每个section对应不同的主题。注意是内容本身的主题，而不是其他人为设定的划分标准。section的例子包括书的章节回目、多tab对话框的每个tab页、论文以数字编号的小节。网站的主页可能分成介绍、最新内容、联系信息等section
                        section元素表示文档或应用的一个部分。所谓“部分”，这里是指按照主题分组的内容区域，通常会带有标题。也就是每个section对应不同的主题。注意是内容本身的主题，而不是其他人为设定的划分标准。section的例子包括书的章节回目、多tab对话框的每个tab页、论文以数字编号的小节。网站的主页可能分成介绍、最新内容、联系信息等section</p>
                </div>

            </section>
        )
    }
}

export default FullArticle
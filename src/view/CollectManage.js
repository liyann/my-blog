/**
 * Created by Li on 2017/5/1.
 */
import React, {Component} from 'react'
import Icon from 'react-fontawesome'
import classNames from 'classnames'

function CollectList(props) {

    const collects = props.CollectData

    return (
        <ul>
            {collects.map((number, index) =>
                <li key={index}>
                    <a href="javascript:void(0)">
                        <span>{number.cname}<Icon name="gear"/></span>
                    </a>
                </li>
            )}
        </ul>
    )
}

class NewItemsInput extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="请输入新建文集名..."/>
                    <div>
                        <input type="submit" value="提交"/>
                        <a href="javascript:void(0)" onClick={()=>this.props.cancleAdd()}>取消</a>
                    </div>
                </form>

            </div>
        )
    }
}
function NewItems(props) {
    console.log(props.isShowInput)
    return (
        <div className="new-collect">
            <a onClick={() => props.addCollect()} href="javascript:void(0)">
                <Icon name="plus" size="2x"/>新建文集</a>
            {props.isShowInput ? <NewItemsInput cancleAdd={props.cancelAdd}/> : ''}
        </div>
    )
}

class CollectManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collectIsToggleOn: false,
            ArticleisToggleOn: false,
            checked: false
        }
    }

    addCollect() {
        console.log(this.state);
        this.setState(prevState => ({
            collectIsToggleOn: !prevState.collectIsToggleOn
        }))

    }

    cancelAdd(){
        this.setState({
            collectIsToggleOn:false
        })
    }


    render() {


        let CollectData = [
            {
                cname: "笔记", Artilist: [{title: 'html', content: '2333333333'},
                {title: 'CSS', content: 'CSS技术是样式相关的'},
                {title: 'CSS', content: 'CSS技术是样式相关的'},
                {title: 'CSS', content: 'CSS技术是样式相关的'}]
            },
            {
                cname: "web前端", Artilist: [{title: 'html', content: '2333333333'},
                {title: 'CSS', content: 'CSS技术是样式相关的'},
                {title: 'CSS', content: 'CSS技术是样式相关的'},
                {title: 'CSS', content: 'CSS技术是样式相关的'}]
            },
            {
                cname: "日记", Artilist: [{title: 'html', content: '2333333333'},
                {title: 'CSS', content: 'CSS技术是样式相关的'},
                {title: 'CSS', content: 'CSS技术是样式相关的'},
                {title: 'CSS', content: 'CSS技术是样式相关的'}]
            }

        ]
        console.log("render")

        return (
            <div className="art-collect-manage">
                <div className="back-index">
                    <a>回首页</a>
                </div>

                <NewItems
                    addCollect={() => this.addCollect()}
                    cancelAdd={()=>this.cancelAdd()}
                    isShowInput={this.state.collectIsToggleOn}
                />
                <CollectList CollectData={CollectData}/>
                <div className="trash">
                    <Icon name="trash-o" size="2x"/>
                    <a href="javascript:void(0)">回收站</a>
                </div>
            </div>
        )
    }
}


export default CollectManage
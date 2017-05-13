/**
 * Created by Li on 2017/5/2.
 */
import Icon from 'react-fontawesome'
import React from 'react'
 class ArtiList extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }

    }
    render(){
        console.log(style)
        return(
            <div>

            </div>
        )
    }
}
class BeArticleListManage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div>
                    <a href="javascript:void(0)"><Icon name="plus-circle" size="2x"/></a>
                </div>
                <ul className="arti-list">
                    <ArtiList/>
                </ul>
                <div>

                </div>
            </div>
        )
    }
}
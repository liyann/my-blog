/**
 * Created by Li on 2017/4/9.
 */
import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'

class FetchDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`http://www.maijinta.top:8888/p/u/1`)
            .then(res => {
                console.log(res.data)
            });

    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

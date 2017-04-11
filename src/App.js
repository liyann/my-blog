import React, { Component } from 'react';
import BackToTop from'./components/BackToTop'
import Layout from './containers/Layout'
import './App.css';
import FullArticle from './components/FullArticle'
import BasicExample from './components/BasicExample'
import Article from './components/Article'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
            <Router>
                <div>
                    <Layout/>
                    <Route path="/article" component={Article}/>
                    <Route path="/fullArticle" component={FullArticle}/>
                    {/*<Route path = "/BasicExample" component={BasicExample}/>*/}
                </div>

            </Router>


    );
  }
}

export default App;

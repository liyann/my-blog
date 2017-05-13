import React, {Component} from 'react';
import BackToTop from'./components/BackToTop'
import Layout from './layouts/Layout'
import './styles/App.css';
import FullArticle from './components/FullArticle'
import BasicExample from './components/BasicExample'
import Article from './components/Article'
import ArticleEditer from './components/ArticleEditer'
import MyEditor from './components/Editor/MyEditor'
import ArtCollectMAnage from './view/CollectManage'
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
import ThemedInlineToolbarEditor from "./components/Editor/ThemedInlineToolbarEditor";

const Gist = ({match}) => (
    <div>
        <h1>
            sorry this url:{match.params.gistId} is a blank url
        </h1>
    </div>
)

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact={true} path="/" component={Layout}/>
                        <Route path="/article" component={Article}/>
                        <Route path="/fullArticle" component={FullArticle}/>
                        <Route path="/ArticleEditer" component={ArticleEditer}/>
                        {/*<Route path="/:gistId" component={Gist}/>*/}
                        <Route path="/myEditer" component={MyEditor}/>
                        {/*<Route path="/myPlainEditer" component={PlainTextEditorExample}/>*/}
                        <Route path="/ThemedInlineToolbarEditor" component={ThemedInlineToolbarEditor}/>
                        <Route path="/writer" component={ArtCollectMAnage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

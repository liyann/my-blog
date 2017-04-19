/**
 * Created by Li on 2017/4/18.
 */
import React,{Component} from 'react';
import {EditorState} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createUndoPlugin from 'draft-js-undo-plugin'
import editorStyles from './editorStyle.css'

const undoPlugin=createUndoPlugin()
const {UndoButton,RedoButton} =undoPlugin
const plugins=[undoPlugin]

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.focus=()=>this.editor.focus()
    }
    render() {
        return (
            <div>
                <div className={editorStyles.editor} onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />
                </div>
                <div className={editorStyles.options}>
                    <UndoButton />
                    <RedoButton />
                </div>
            </div>
        );
    }
}

export default MyEditor
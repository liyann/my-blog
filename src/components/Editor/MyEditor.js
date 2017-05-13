/**
 * Created by Li on 2017/4/18.
 */
import React, {Component} from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import createUndoPlugin from 'draft-js-undo-plugin'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import editorStyles from './editorStyles.css'
import buttonStyles from './buttonStyles.css'
import toolbarStyles from './toolbarStyles.css'

const theme = {
    undo: buttonStyles.button,
    redo: buttonStyles.button
}
const inlineToolbarPlugin=createInlineToolbarPlugin({
    theme:{buttonStyles,toolbarStyles}
})
const {InlineToolbar}=inlineToolbarPlugin
const undoPlugin = createUndoPlugin({
    undoContent: 'Undo',
    redoContent: 'Redo',
    theme,
})
const {UndoButton, RedoButton} = undoPlugin
const plugins = [inlineToolbarPlugin,undoPlugin]
const text = 'In this editor a toolbar shows up once you select part of the text …'

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: createEditorStateWithText(text),
        }
        this.onChange = (editorState) => {
            this.setState({
                editorState,
            });
        };
        this.focus = () => {
            this.editor.focus();
        };
    }
    render() {
        return (
            <div >

                <div className={editorStyles.editor} onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => {this.editor = element}}
                    />
                    <InlineToolbar />
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

/*
* 工具与Editor同级,在onClick里面
* */
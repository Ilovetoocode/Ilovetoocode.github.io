import React, {Component} from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
export default class RTE extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        }
        this.onrtchange=this.onrtchange.bind(this)
    }
    onrtchange(editorState){
     this.setState({editorState}, this.props.rtechange(
         draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
         )
         )
    }
    uploadFile(file){
        console.log("file",file)
    }
    render(){
    return (
        <div>
            <Editor
            editorState={this.state.editorState}
            wrapperClassName="demo"
            editorClassName="editor"
            onEditorStateChange={this.onrtchange}
            toolbar= {{
               inline:{inDropdown: true},
               list:{inDropdown:true},
               textAlign:{inDropdown:true},
               Link:{inDropdown:true},
               history:{inDropdown:true},
               image:{
                   uploadCallback:this.uploadFile,
                alt:{present: true, mandatory: false},
                 previewImage:true,
                 inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"
                  }

               }
            }
            />
        </div>
    )
    }
}
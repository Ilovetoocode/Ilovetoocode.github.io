import React, {Component} from "react";
import { EditorState, convertToRaw, ContentState} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
export default class RTE extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        }
        this.onrtchange=this.onrtchange.bind(this);
        this.B64=this.B64.bind(this);
        this.uploadFile=this.uploadFile.bind(this);
    }
    componentDidMount(){
        if(this.props.editmode && this.props.contentToEdit){
            const blocksFromHtml=htmlToDraft(this.props.contentToEdit);
            const{
                contentBlocks,
                entityMap,}=blocksFromHtml;
                const contentState=ContentState.createFromBlockArray(contentBlocks, entityMap);
                const editorState=EditorState.createWithContent(contentState);
                this.setState({editorState})
        }
    }
    onrtchange(editorState){
     this.setState({editorState}, this.props.rtechange(
         draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
         )
         )
    }
    B64(file, callback){
    let reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>callback(reader.result);
    reader.onerror=error=>{};
    }
    uploadFile(file){
        return new Promise((resolve, reject) =>{
            this.B64(file, data=>resolve( { data:{link:data } } ) )
        })
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
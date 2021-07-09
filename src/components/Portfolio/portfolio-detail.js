
import React, {Component} from "react";
import axios from "axios";
export default class Details extends Component{
    constructor(props){
        super(props);
        this.state={
        portfolioitem : {},
        }
    }
    componentDidMount(){
        this.getportitem();
    }
    getportitem(){
        axios.get(`https://whoami.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`).then(response =>{
            this.setState({
                portfolioitem:response.data.portfolio_item
            })
        }).catch(error=>{
            console.log("error", error)
        })
    }
    render(){
        const{
            description,
             name,
             banner_image_url,
            category,
             logo_url,
             thumb_image_url,
             url,
             } =this.state.portfolioitem;
             const stylebanner={
                 backgroundImage:"url("+banner_image_url +")",
                 backgroundSize:"cover",
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center center",
             }
             const logostyle={
                 width:"100px",
                 height:"100px"
             }
    return (
        <div className="Portfoliocontent">
            <div className="portbanner" style={stylebanner}>
                <img src={logo_url} style={logostyle}/>
            </div>
            <div className="describe">
                <div className="description">
                <p>{description}</p>
                </div>
            </div>
            <div className="bottom-content">
                    <a href="url" className="urllink" target="_blank">
                    The details of:{name}
                    </a>
            <div className="Category">
                {category}
            </div>
            </div>
        </div>
    )
    }
}
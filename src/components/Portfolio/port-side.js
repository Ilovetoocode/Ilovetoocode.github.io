import React from "react";
const Portside=(props)=>{
    const Portlist= props.data.map(items =>{
return(
    <div>
        <div key={items.id} className="sidebar_thumbnail">
            <div className="sidebar_img">
                <img src={items.thumb_image_url}/>
            </div>
        <h1 className="title">{items.name}</h1>
        </div>
    </div>
)
    })
return <div className="sidebar-list">
    {Portlist}
</div>;
}
export default Portside;
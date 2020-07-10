import React from "react"
import { Link } from "react-router-dom";
import noImageSRC from "../assets/no_menu_image.jpg";

let ItemsList = (props:any) => (
        <div>
            <h3 className="headerForItemList">
                Items To Be Displayed
            </h3>
            <div className="flex-container">
                <button onClick={()=>{props.updatePageNumber('prev')}} disabled={props.data.pageNumber <= 1}>Previous Page</button>
                <button onClick={()=>{props.updatePageNumber('next')}} disabled={props.data.pageNumber >= props.data.totalPages}>Next Page</button>
            </div>
            <div className="flex-container">
                {
                    Object.entries(props.data.menuData).map(([key, value] : any) => {
                        let imgSrc = value.imageUrl == '/no_menu_image.jpg' ? noImageSRC : value.imageUrl;
                        return (
                            <Link to={{pathname : '/itemDetails', state: { value : value }}} key={value['itemId']}> 
                                <div>
                                    <img className="img" src={imgSrc}/>
                                    <p><b>Name :</b> {value.name || ''}</p>
                                    <p><b>Price :</b>{value.price || 0}</p>
                                    <p><b>Availability :</b>{value.available? 'Yes' : 'No'}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )

export default ItemsList;
import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';

let inputRef: RefObject<any> = React.createRef();
let detailsChkBoxRef: RefObject<any> = React.createRef();

function ItemDetails(props:any) {
    let itemDetails = getItemDetails(props.location.state.value);
    return (
        <div>
            <h3 className="headerForItemList">
                Update Item's Values
            </h3>
            <div className="itemDetailsMainDiv">
                <div>Item Price : <input ref={inputRef} defaultValue={itemDetails?.price}/></div>
                <div>Item Available : <input ref={detailsChkBoxRef} name="itemAvailable" type="checkbox" defaultChecked={itemDetails?.available}/></div>
                <div><Link to={{pathname:'/'}}><button>Go Back</button></Link> <button onClick={()=>{updateItemDetails(props)}}> Update </button></div>
            </div>
        </div>
    );
}


function getItemDetails(value:any) {
    if(value) {
        return {
            price : value['price'] || 0,
            available : value['available'] || false
        }
    }
}

function updateItemDetails(props : any) {
    let objToUpdate = {id : props.location.state.value.itemId , newPrice : inputRef.current.value, newIsAvailable : detailsChkBoxRef.current.checked};
    props.handleUpdate(objToUpdate);
}

export default ItemDetails;
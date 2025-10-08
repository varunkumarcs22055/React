import styleCard from "../Utils/constants";

const RestaurantCard =(props)=>{
    const {resdata} = props;
    const {img, resName, cuisine, rating, deliveryTime} = resdata;
    return (
        <div className="res-card" style={styleCard}>
            <img  className="res-logo" alt="res-logo" src = {img}/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime} For 5</h4>
        </div>
    )
}

export default RestaurantCard;
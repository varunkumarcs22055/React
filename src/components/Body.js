import RestaurantCard from "./RestaurantCard";
import Dataobj from "../Utils/mockData";
import { useState } from "react";

const Body = () => {

    //Local State Variable - Super powerful variable
    const [filteredRestaurants, setFilteredRestaurants] = useState(Dataobj);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = filteredRestaurants.filter(res => parseFloat(res.rating) > 4);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard resdata={restaurant} key={restaurant.resName} />
                })}
            </div>
        </div>
    )
}

export default Body;
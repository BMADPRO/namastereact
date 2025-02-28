import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowItems}) => {
    //Uncontrolled component as showitems state was on this child
    // const [showItems, setShowItems] = useState(false);
    // const handleClick= () => {
    //     setShowItems(!showItems);
    // };

    const handleClick = ()=>{
        //this will execute setshowitems whch will setindex in showitems, not it is controlled comp. as parent is controlling
         setShowItems();
    }
    return (
        <div>
             {/*Header*/}
        <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4">
        <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data?.itemCards.length})</span>
        <span>🔽</span>
        </div>
            
            {/*Accordion Body */}
           {showItems && <ItemList items={data.itemCards}/>} 
        </div>
        
        
        </div>
       
    )
};

export default RestaurantCategory;
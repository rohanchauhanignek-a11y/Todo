import { useContext } from "react";
import TaskDataContext from "../../contexts/TaskDataContext";
import UIContext from "../../contexts/uiContext";
import { useNavigate } from "react-router-dom";
function Menu () {
    const  {MenuItem ,} :any = useContext( TaskDataContext);
    const {  setFilter }: any = useContext(UIContext);
    const Navigate = useNavigate();
    
    return (
        <>
            <p className="text-gray-400 justify-center text-x   s p-4">Menu</p>
            {
                MenuItem.map((item:any,index:number) => 
                    <div className="w-full p-4 justify-center cursor-pointer hover:bg-neutral-700 hover:text-white " onClick={()=> {setFilter(item); Navigate(`/home`)}} key={index}>
                        {item.item}
                    </div>
                )
            }
        </>
    )
}
export  default Menu ;
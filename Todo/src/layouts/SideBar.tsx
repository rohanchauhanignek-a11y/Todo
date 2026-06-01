import Menu from "../components/Menu/Menu";
function Sidebar() { 
    return (
      <div className="w-64 bg-neutral-800 h-full p-0 ">
        
          <div className="flex gap-4 align-middle p-4 w-full h-20 bg-neutral-800 shadow-md border-b-[0.5px] border-gray-600 border-e-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-black ">
              Rohan
            </span>
            <h2 className="ma">Rohan</h2>
          </div>
          <div className="h-full border-e-[0.5px] border-gray-600">
            <Menu/>
          </div>
          
         
        
      </div>
    );
}
export default Sidebar;

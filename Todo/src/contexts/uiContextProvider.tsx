import { useState } from "react";
import UIContext from "./uiContext";


function UIProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter]:any = useState({
    item: "All",
    value: "",
    count: 0,
  });
  const [value, setValue] = useState(false);

  return (
    <UIContext.Provider value={{ filter, setFilter, value, setValue }}>
      {children}
    </UIContext.Provider>
  );
}

export default UIProvider;
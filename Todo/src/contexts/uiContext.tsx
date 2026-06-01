import { createContext } from "react";


type UIContextType = {
  filter: any;
  setFilter: (filter: any) => void;
  value: boolean;
  setValue: (val: boolean) => void;
};

const UIContext = createContext<UIContextType | null>(null);
export default UIContext;
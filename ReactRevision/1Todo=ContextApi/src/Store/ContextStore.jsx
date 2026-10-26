import { createContext } from "react";

export const TodoContext = createContext({
  data: [],
  setData: () => {},
  isCheckedArr: [],
  setCheckedArr: () => {},
  getValue: () => {},
  deleteIdx: () => {},
});

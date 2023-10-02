import Data_Stored from "./components/Data_Stored";
import Movie from "./movie/Movie";
import Food from "./food_filter/Food";
import Covid from "./Fetch/Covid";

import "./App.css";
// import Reducer_demo from "./hooks/Reducer_demo";
import Fetch_api from "./hooks/Fetch_api";
import Context_test from "./hooks/Context_test";
import { createContext, useState } from "react";

const name = createContext();

function App() {
  const [data, setData] = useState({ name: "akshay", age: 25 });
  return (
    <>
      <Data_Stored />
      <Movie />
      <Food />
      <Covid />
      {/* <Reducer_demo /> */}
      <Fetch_api />
      {/* <name.Provider value={{ data }}>
        <Context_test />
      </name.Provider> */}
    </>
  );
}

export default App;
export { name };

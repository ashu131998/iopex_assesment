
import { useEffect, useState } from "react";
import "./styles.css";
import UserTable from "./modules/pages/table/table";
import { MyContext } from "./UserContext";

export default function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(null)
  const getData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => { setData(data); console.log(data) });
  }
  useEffect(() => { getData() }, [])
  return (
    <div className="App">

      <MyContext.Provider value={{ data, setData, toggle, setToggle }}>
        <UserTable data={data} toggle={toggle} setToggle={setToggle}></UserTable>
      </MyContext.Provider>

    </div>
  );
}

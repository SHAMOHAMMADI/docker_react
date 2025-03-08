import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data.map((result, index) => (
        <div
          key={index}
          className="[&>*]:text-justify justify-center flex flex-col md:flex-row lg:flex-row items-center border rounded shadow-inner m-4 p-4"
        >
          <div className="w-4/12">
            <img src={result.image} className="w-full " alt="" />
          </div>
          <div className=" [&>*]:text-center w-full">
            <h1>{result.name}</h1>
            <p>{result.price}</p>
            <p>{result.des}</p>
            <p>{result.category}</p>
            <p>{result.rating}</p>
          </div>
          <button className="bg-blue-500 w-fit p-2 hover:shadow-inner duration-700 hover:scale-110 text-white shadow-md px-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;

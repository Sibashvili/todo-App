import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Check from "./assets/icon-check.svg";
import Cross from "./assets/icon-cross.svg";
import Moon from "./assets/icon-moon.svg";
import Sun from "./assets/icon-sun.svg";
import To from "./assets/TODO.png";

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue.trim() !== "") {
        const newTodo = {
          command: inputValue,

          backgroundColor: "red",
        };
        setTodos([...todos, newTodo]);
        setInputValue("");
      }
    }
  };
  return (
    <div className=" w-full">
      <div className=" bg-mobile-light bg-no-repeat h-[200px] w-full  ">
        <div className=" flex px-[26px] w-full justify-between x   ">
          <img className=" w-[109px] h-[20px] mt-[48px]    " src={To} alt="" />
          <img className=" mt-[48px]    " src={Moon} />
        </div>

        <div className=" flex justify-center m-auto mt-[40px] bg-white w-[327px] h-[48px] rounded    items-center ">
          <button className="w-[20px] h-[20px] rounded-full border-2 border-solid bg-transparent bg-opacity-100"></button>
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="  w-[290px] h-[48px]    "
            type="text"
            placeholder="Create a new todo…"
          />
        </div>
      </div>
      <div className=" p-[24px]">
        {todos.map((todo, index) => (
          <div
            className="  h-[52px] bg-white border-b border-gray-300 h-1 bg-transparent mt-[] p-[24px] flex items-center --tw-shadow-custom: '0px 35px 50px -15px rgba(194, 195, 214, 0.50)' rounded "
            key={index}
          >
            {todo.command}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

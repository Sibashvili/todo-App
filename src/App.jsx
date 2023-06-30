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
  const [theme, setTheme] = useState("light");
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
  const handleRemoveTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    console.log(theme);
  };
  return (
    <div className={"w-full  "}>
      <div
        className={`  bg-no-repeat h-[200px] w-full ${
          theme === "dark" ? "bg-mobile-dark" : "bg-mobile-light"
        }  `}
      >
        <div className=" flex px-[26px] w-full justify-between x items-center  ">
          <img className=" w-[109px] h-[20px] mt-[48px]    " src={To} alt="" />
          <div>
            {theme === "dark" ? (
              <div>
                <img
                  onClick={handleTheme}
                  className=" mt-[48px]     "
                  src={Moon}
                />
              </div>
            ) : (
              <div>
                <img
                  className=" mt-[48px]"
                  onClick={handleTheme}
                  src={Sun}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        <div className=" flex justify-center m-auto mt-[40px] bg-white w-[327px] h-[48px] rounded    items-center ">
          <button className="w-[20px] h-[20px] rounded-full border-2 border-solid bg-transparent bg-opacity-100 ml-[10px]  "></button>
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="  w-[290px] h-[48px] ml-[10px] border-none focus:outline-none font-normal   "
            type="text"
            placeholder="Create a new todo…"
          />
        </div>
      </div>
      {todos.length > 0 && (
        <ul className=" mt-[-19px] text-fontColor   w-[327px] mx-auto block border-t-8 border-white   rounded-t-lg text-[12px] font-normal   ">
          {todos.map((todo, index) => (
            <li
              className=" w-full    border-b   bg-white border-gray-300 h-1 bg-transparent  p-6 flex   items-center justify-between  "
              key={index}
            >
              {todo.command}
              <img
                className=" cursor-pointer"
                src={Cross}
                alt=""
                onClick={handleRemoveTask}
              />
            </li>
          ))}
          <div className="border-b rounded-b-lg p-[20px]  shadow-3xl bg-white border-gray-300 flex items-center justify-between ">
            <span className=" text-customGrayishBlue">
              {todos.length} items left
            </span>
            <button className="text-customGrayishBlue">Clear Comleted</button>
          </div>
          <div className=" mt-[16px] w-[327px]  flex bg-white gap-6 h-[48px] items-center justify-center  ">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </ul>
      )}
    </div>
  );
}

export default App;

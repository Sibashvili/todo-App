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
  const [active, setActive] = useState(false);
  const [filter, setActiveFilter] = useState("all");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue.trim() !== "") {
        const newTodo = {
          command: inputValue,
          active,
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

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    console.log(theme);
  };
  const handleToggleTask = (index) => {
    const updatedTodos = [...todos];
    console.log(updatedTodos);
    updatedTodos[index].active = !updatedTodos[index].active;
    setTodos(updatedTodos);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.active;
    } else if (filter === "completed") {
      return todo.active;
    }
  });
  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.active);
    setTodos(updatedTodos);
  };

  return (
    <div
      className={`w-full h-screen ${
        theme === "dark" ? " bg-background" : " bg-customBack"
      } `}
    >
      <div
        className={`  bg-no-repeat h-[200px] w-full ${
          theme === "dark" ? "bg-mobile-dark" : "bg-mobile-light"
        }  `}
      >
        <div className=" flex px-[26px] w-full justify-between x items-center  ">
          <img
            className=" w-[109px]  h-[20px] mt-[48px]     "
            src={To}
            alt=""
          />
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

        <div
          className={`flex justify-center m-auto mt-[40px] w-[327px] h-[48px] rounded     items-center ${
            theme === "dark"
              ? " bg-input-back text-text-color"
              : " bg-customBack"
          }  `}
        >
          <button
            onClick={() => setActive(!active)}
            className={`w-[20px] h-[20px] rounded-full border-2 border-solid bg-transparent   ml-[10px] flex justify-center items-center   
          ${active ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]" : ""} `}
          >
            {active ? <img src={Check} alt="" /> : null}
          </button>

          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-[290px] h-[48px] ml-[10px] border-none focus:outline-none font-normal bg-transparent    "
            type="text"
            placeholder="Create a new todo…"
          />
        </div>
      </div>
      {todos.length > 0 && (
        <ul
          style={{ borderRadius: "50%" }}
          className="  mt-[-19px] text-fontColor bg-transparent    w-[327px] mx-auto    rounded-lg text-[12px] font-normal  "
        >
          {filteredTodos.map((todo, index) => (
            <li
              className={` w-full    border-b py-[16px]  px-[20px] flex   items-center justify-between first:rounded-t-lg ${
                theme === "dark"
                  ? " bg-input-back border-[#393A4B] text-textdark  "
                  : " bg-white border-[#E3E4F1]"
              }  `}
              key={index}
            >
              <div className="  gap-[16px] flex    ">
                <button
                  onClick={() => handleToggleTask(index)}
                  className={`w-[20px] h-[20px] rounded-full border-2 border-solid bg-transparent bg-opacity-100 ml-[10px] justify-center items-center flex  ${
                    todo.active
                      ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
                      : ""
                  } `}
                >
                  {todo.active ? <img src={Check} alt="" /> : null}
                </button>
                {todo.command}
              </div>

              <img
                className=" cursor-pointer"
                src={Cross}
                alt=""
                onClick={handleRemoveTask}
              />
            </li>
          ))}
        </ul>
      )}
      <div
        className={`p-[20px] w-[327px] mx-auto      shadow-3xl   border-gray-300 flex items-center justify-between rounded-b-lg ${
          theme === "dark"
            ? " bg-input-back text-textColor"
            : "bg-white text-textLight"
        }  `}
      >
        <span className=" text-customGrayishBlue">
          {todos.length} items left
        </span>
        <button
          onClick={handleClearCompleted}
          className="text-customGrayishBlue"
        >
          Clear Comleted
        </button>
      </div>
      <div
        className={` mt-[16px] w-[327px]  flex  gap-6 h-[48px] items-center mx-auto shadow-3xl  justify-center  ${
          theme === "dark"
            ? "bg-input-back text-textColor"
            : " bg-[#fff] text text-textLight"
        } `}
      >
        <button onClick={() => setActiveFilter("all")}>All</button>
        <button onClick={() => setActiveFilter("active")}>Active</button>
        <button onClick={() => setActiveFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default App;

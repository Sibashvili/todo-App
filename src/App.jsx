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
      className={`max-w-screen bg-cover h-screen ${
        theme === "dark" ? " bg-background " : " bg-customBack"
      } `}
    >
      <div
        className={` max-w-screen bg-cover  bg-no-repeat h-[200px] w-full ${
          theme === "dark"
            ? "bg-mobile-dark h-[200px] xl:bg-desktop-dark xl:h-[300px]"
            : "bg-mobile-light h-[200px] xl:bg-desktop-light xl:h-[300px] "
        }  `}
      >
        <div className=" flex px-[26px] xl:pr-[450px] xl:pl-[450px] w-full justify-between x items-center  ">
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
          className={`flex justify-center m-auto mt-[40px]  w-[327px] xl:w-[540px] h-[48px] xl:h-[64px] rounded xl:justify-start     items-center ${
            theme === "dark"
              ? " bg-input-back text-text-color"
              : " bg-customBack"
          }  `}
        >
          <button
            onClick={() => setActive(!active)}
            className={`w-[20px] h-[20px] rounded-full border-2 border-solid bg-transparent   ml-[10px] flex justify-center items-center   
          ${
            active
              ? " border-none bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
              : ""
          } `}
          >
            {active ? <img src={Check} alt="" /> : null}
          </button>

          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-[290px] h-[48px] ml-[10px] border-none focus:outline-none font-normal bg-transparent xl:text-[18px]   "
            type="text"
            placeholder="Create a new todo…"
          />
        </div>
      </div>

      <ul
        style={{ borderRadius: "50%" }}
        className="  mt-[-19px] xl:mt-[-75px] text-fontColor bg-transparent    w-[327px] xl:w-[540px] xl:h-[24px] mx-auto    rounded-lg text-[12px] xl:text-[18px] font-normal  "
      >
        {filteredTodos.map((todo, index) => (
          <li
            className={` w-full xl:w-[540px] xl:    border-b py-[16px]  px-[20px] flex   items-center justify-between first:rounded-t-lg  ${
              theme === "dark"
                ? " bg-input-back border-[#393A4B] text-textdark  "
                : " bg-white border-[#E3E4F1]"
            }  `}
            key={index}
            style={{
              textDecoration: !todo.active ? "#4D5067" : "line-through",
              color: todo.active ? "#C8CBE7" : "#4D5067",
            }}
          >
            <div className=" ml-[-19px]   gap-[16px] flex    ">
              <button
                onClick={() => handleToggleTask(index)}
                className={`w-[20px] h-[20px] rounded-full border-2 border-solid bg-transparent bg-opacity-100 ml-[10px] justify-center items-center flex  ${
                  todo.active
                    ? " border-none bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
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
        <div
          className={`p-[20px] w-[327px] xl:w-[540px]    mx-auto       shadow-3xl   border-gray-300 flex items-center justify-between rounded-b-lg ${
            theme === "dark"
              ? " bg-input-back text-textColor"
              : "bg-[#fff] text-textLight"
          }  `}
        >
          <span className=" text-customGrayishBlue ">
            {todos.length} items left
          </span>

          <div className=" xl:flex  xl:gap-[19px] hidden ">
            <button
              className={`${
                filter === "all" ? "text-blue-500 font-bold" : ""
              } cursor-pointer`}
              onClick={() => setActiveFilter("all")}
            >
              {" "}
              All
            </button>
            <button
              className={`${
                filter === "active" ? "text-blue-500 font-bold" : ""
              } cursor-pointer`}
              onClick={() => setActiveFilter("active")}
            >
              Active
            </button>
            <button
              className={`${
                filter === "completed" ? "text-blue-500 font-bold" : ""
              } cursor-pointer`}
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </button>
          </div>

          <button
            onClick={handleClearCompleted}
            className="text-customGrayishBlue"
          >
            Clear Comleted
          </button>
        </div>
      </ul>

      <div
        className={` mt-[16px] w-[327px]  flex  gap-6 h-[48px] items-center mx-auto shadow-3xl  justify-center xl:hidden   ${
          theme === "dark"
            ? "bg-input-back text-textColor"
            : " bg-[#fff] text text-textLight"
        } `}
      >
        <button
          className={`${
            filter === "all" ? "text-blue-500 font-bold" : ""
          } cursor-pointer`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active" ? "text-blue-500 font-bold" : ""
          } cursor-pointer`}
          onClick={() => setActiveFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed" ? "text-blue-500 font-bold" : ""
          } cursor-pointer`}
          onClick={() => setActiveFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default App;

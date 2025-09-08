import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      alert("Enter your task");
      return;
    }
    setData([...data, input]);
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const deleteItem = (index) => {
    const filterData = data.filter((_, id) => id !== index);
    setData(filterData);
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <input
          type="text"
          name="todoname"
          value={input}
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <button type="submit" className="addbtn">
          Add
        </button>
      </form>

      {/* Task List */}
      <div className="tasks-wrapper">
        {data.length === 0 ? (
          <p className="no-task">No tasks yet...</p>
        ) : (
          data.map((currentValue, index) => (
            <div key={index} className="resultContainer">
              <p className="para">{currentValue}</p>
              <button
                className="deleteBtn"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

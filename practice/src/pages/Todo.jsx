import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Fetch todos
  const loadTodos = async () => {
    const res = await axios.get("http://localhost:4000/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!input.trim()) return;

    await axios.post("http://localhost:4000/add", { item: input });
    setInput("");
    loadTodos();
  };

  // Delete todo
  const deleteTodo = async (item) => {
    await axios.delete("http://localhost:4000/delete", {
      data: { item },
    });
    loadTodos();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Todo App
      </h2>

      {/* Input Box */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {todos.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <span className="text-gray-800">{t}</span>

            <button
              onClick={() => deleteTodo(t)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

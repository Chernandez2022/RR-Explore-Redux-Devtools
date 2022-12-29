import React, { useState } from "react";
import { render } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, RemoveOne, clearTodo } from "./features/todoSlice";

function Todo() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const renderItems = items.map((item, index) => (
    <li key={index} onClick={() => dispatch(RemoveOne(index))}>
      {item}
    </li>
  ));

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>{renderItems}</ul>
      <button onClick={() => dispatch(clearTodo())}>Clear</button>
    </div>
  );
}

export default Todo;

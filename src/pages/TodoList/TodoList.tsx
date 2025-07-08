import React from "react";
import { useSelector } from "react-redux";

import { Typography } from "@mui/material";

import AddTodo from "../../components/AddTodo/AddTodo";
import Todo from "../../components/Todo/Todo";
import { RootState } from "../../store";
import { TodoListStyle } from "./TodoList.style";

function TodoList() {
  const list = useSelector((state: RootState) => state.data.list);
  return (
    <TodoListStyle>
      <Typography
        className="title"
        variant="h2"
      >
        Todo List
      </Typography>
      <AddTodo />
      {list.map((item: any, index: number) => (
        <Todo
          key={index}
          props={item}
        />
      ))}
    </TodoListStyle>
  );
}

export default TodoList;

import React from "react";
import { useDispatch } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, IconButton, Typography } from "@mui/material";

import { deleteList, toggleCheckTodo } from "../../reducer";
import { AppDispatch } from "../../store";
import { TodoStyle } from "./Todo.style";

type TodoProps = {
  props: {
    id: number;
    todo: string;
    userId: number;
    completed: boolean;
  };
};

function Todo({ props }: TodoProps) {
  const dispatch = useDispatch<AppDispatch>();

  const toggleCheckbox = (id: number, checked: boolean) => {
    dispatch(toggleCheckTodo({ id, checked: !checked }));
  };

  return (
    <TodoStyle>
      <div className="todoWrapper">
        <Checkbox
          checked={props.completed}
          onChange={() => toggleCheckbox(props.id, props.completed)}
        />
        <Typography
          variant="body1"
          align="center"
          sx={{
            textDecoration: props.completed ? "line-through" : "none",
            color: props.completed ? "rgba(0,0,0,0.3)" : "black",
          }}
        >
          {props.todo}
        </Typography>
        <IconButton className="closeBtn">
          <CloseIcon
            onClick={() => {
              dispatch(deleteList(props.id));
            }}
          />
        </IconButton>
      </div>
    </TodoStyle>
  );
}

export default Todo;

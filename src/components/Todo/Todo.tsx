import React, { useState } from "react";
import { useDispatch } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, IconButton, TextField, Typography } from "@mui/material";

import { deleteList, editTextTodo, toggleCheckTodo } from "../../reducer";
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
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const toggleCheckbox = (id: number, checked: boolean) => {
    dispatch(toggleCheckTodo({ id, checked: !checked }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEdit(!isEdit);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editTextTodo({ id: props.id, text: e.target.value }));
  };
  return (
    <TodoStyle>
      <div className="todoWrapper">
        <Checkbox
          checked={props.completed}
          onChange={() => toggleCheckbox(props.id, props.completed)}
        />
        {isEdit ? (
          <TextField
            sx={{ width: "90%" }}
            placeholder="Add your todo"
            value={props.todo}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
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
        )}
        <div className="closeBtnWrapper">
          <IconButton
            className="editBtn"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className="closeBtn"
            onClick={() => {
              dispatch(deleteList(props.id));
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </TodoStyle>
  );
}

export default Todo;

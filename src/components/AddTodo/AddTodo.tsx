import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { Button, Divider, IconButton, InputBase, Paper, TextField } from "@mui/material";

import { addList } from "../../reducer";
import { AppDispatch } from "../../store";
import { AddTodoStyle } from "./AddTodo.style";

function AddTodo() {
  const dispatch = useDispatch<AppDispatch>();
  const [newTodo, setNewTodo] = useState<string>("");
  const addTotoData = (text: string) => {
    if (text === "") {
      return;
    }
    dispatch(addList(text));
    setNewTodo("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTotoData(newTodo);
    }
  };

  return (
    <AddTodoStyle>
      <Paper
        className="addTodoWrapper"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add your todo"
          value={newTodo}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Divider
          sx={{ height: 28, m: 0.5 }}
          orientation="vertical"
        />
        <IconButton
          className="addTodoBtn"
          onClick={() => {
            addTotoData(newTodo);
          }}
        >
          <AddIcon />
        </IconButton>
      </Paper>
      {/* <TextField
        className="addTodo-input"
        variant="outlined"
        label="Add your todo"
        value={newTodo}
        onChange={handleChange}
      />
      <Button
        className="addTodo-btn"
        variant="contained"
        onClick={() => {
          addTotoData(newTodo);
        }}
      >
        Add
      </Button> */}
    </AddTodoStyle>
  );
}

export default AddTodo;

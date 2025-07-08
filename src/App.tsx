import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TodoList from "./pages/TodoList/TodoList";
import { setList } from "./reducer";
import type { AppDispatch } from "./store";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const fetchTodo = async () => {
    try {
      const res = await fetch("https://dummyjson.com/todos?limit=5");
      if (res.status === 200) {
        const data = await res.json();
        dispatch(setList(data.todos));
        setLoading(false);
      }
    } catch (error) {
      console.log("error ", error);
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className="App">{!loading ? !isError ? <TodoList /> : <ErrorPage /> : <Loader />}</div>
  );
}

export default App;

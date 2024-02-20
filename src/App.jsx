/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Forms from "./Components/Forms/Forms";
import Actions from "./Components/Actions/Actions";
import Footer from "./Components/Footer/Footer";
import Todo from "./Components/Todo/Todo";
import ListTodo from "./Components/Todo/ListTodo";
import Containertodo from "./Components/Todo/ContainerTodo";

export default function App() {
  const mytodo = [
    {
      id: 1,
      title: "Belajar React",
      isDone: false,
    },
    {
      id: 2,
      title: "Belajar Vue",
      isDone: true,
    },
    {
      id: 3,
      title: "Belajar Svelte",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(mytodo);
  const [sortby, setSortby] = useState("input");
  const [name, setName] = useState("");

  let nexId = todos.map((todo) => todo.id).length + 1;

  const handleTambahClick = () => {
    if (!name) return;

    setTodos(todos.concat({ id: nexId, title: name, isDone: false }));
    setName("");
  };

  const handleSelesaiClick = (e) => {
    setTodos((todos) => todos.map((todo) => (todo.id === e ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const handleHapusClick = (i) => {
    setTodos((todos) => todos.filter((item) => item.id !== i));
  };

  const handleHapusSemua = () => {
    setTodos([]);
  };

  return (
    <Container>
      <Header />
      <Forms name={name} setName={setName} onTambahClick={handleTambahClick} />
      <Containertodo>
        <Todo>
          <ListTodo todos={todos} sortby={sortby} onSelesaiClick={handleSelesaiClick} onHapusClick={handleHapusClick} />
        </Todo>
      </Containertodo>
      <Actions sortby={sortby} setSortby={setSortby} onClick={handleHapusSemua} />
      <Footer todos={todos} />
    </Container>
  );
}

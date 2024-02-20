/* eslint-disable react/prop-types */

import Btn from "../Button/Button";

const ListTodo = ({ todos, sortby, onSelesaiClick, onHapusClick }) => {
  let newSorted = sortby === "name" ? todos.slice().sort((a, b) => a.title.localeCompare(b.title)) : sortby === "checked" ? todos.slice().sort((a, b) => b.isDone - a.isDone) : todos;

  return newSorted.map((newsort) => (
    <li key={newsort.id} className={`relative mb-2 text-center ${newsort.isDone && "line-through"} md:text-start`}>
      {newsort.title}
      <div>
        <Btn
          clasname={
            "text-xs mx-3 py-1 px-5 text-red-900 rounded-full bg-white hover:text-black md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[87%] md:-translate-x-[87%] lg:text-base lg:left-[78%] lg:-translate-x-[78%] xl:left-[83%] xl:-translate-x-[83%] 2xl:left-[85%] 2xl:-translate-x-[85%]"
          }
          onClick={() => onSelesaiClick(newsort.isDone)}
          text={newsort.isDone === false ? "Done" : "Undo"}
        />

        <Btn
          clasname={"text-xs mx-3 py-1 px-5 text-red-900 rounded-full bg-white hover:text-black md:absolute md:top-1/2 md:-translate-y-1/2 md:left-full md:-translate-x-full lg:text-base"}
          onClick={() => onHapusClick(newsort.id)}
          text={"Hapus"}
        />
      </div>
    </li>
  ));
};

export default ListTodo;

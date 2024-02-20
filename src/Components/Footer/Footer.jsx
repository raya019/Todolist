/* eslint-disable react/prop-types */

const Footer = ({ todos }) => {
  const Total = todos.length;
  const Done = todos.filter((todo) => todo.isDone).length;
  const NotDone = todos.filter((todo) => !todo.isDone).length;
  const Percentage = Math.round((Done / Total) * 100);

  return (
    <footer className="px-5 font-sans mt-3 text-base text-center md:text-lg lg:text-2xl">
      {todos.length === 0 ? "Todolist Kosong ☹️" : `Total Todo-List ada ${Total}. List Yang belum Selesai ${NotDone} Dan yang Selesai ${Done} (${Percentage}%)`}
    </footer>
  );
};
export default Footer;

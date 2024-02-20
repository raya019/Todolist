/* eslint-disable react/prop-types */

const InputTodo = ({ name, setName }) => {
  return <input type="text" className="border-2 border-black rounded-full text-black font-sans text-center text-lg flex-none w-60" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Todo" />;
};

export default InputTodo;

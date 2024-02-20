import Btn from "../Button/Button";

/* eslint-disable react/prop-types */
const Forms = ({ name, setName, onTambahClick }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-3 mt-5 px-5">
      <span className="text-lg text-white font-sans font-bold grow text-center lg:text-2xl">Masukkan Todo :</span>
      <input type="text" className="border-2 border-black rounded-full text-black font-sans text-center text-lg flex-none w-60" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Todo" />
      <Btn clasname={"bg-white text-red-900 px-5 py-1 rounded-full hover:text-black"} text={"tambah"} onClick={() => onTambahClick()} />
    </div>
  );
};

export default Forms;

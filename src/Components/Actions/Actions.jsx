/* eslint-disable react/prop-types */
import Btn from "../Button/Button";

const Actions = ({ sortby, setSortby, onClick }) => {
  return (
    <div className="py-5 flex justify-center items-center flex-wrap gap-5">
      <select value={sortby} onChange={(e) => setSortby(e.target.value)} className="text-black text-base font-sans p-3 rounded-full order-2 lg:order-1">
        <option value="input">Urutkan berdasarkan Urutan Input</option>
        <option value="name">Urutkan berdasarkan Urutan Name</option>
        <option value="checked">Urutkan berdasarkan Urutan Chcklist</option>
      </select>
      <Btn clasname={"py-2 px-7 rounded-full bg-white text-red-900 text-base font-sans font-medium order-1 hover:text-black Lg:order-2"} onClick={onClick} text={"Hapus Semua"} />
    </div>
  );
};

export default Actions;

/* eslint-disable react/prop-types */
const Btn = ({ clasname, text, onClick }) => {
  return (
    <button className={clasname} onClick={onClick}>
      {text}
    </button>
  );
};

export default Btn;

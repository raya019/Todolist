/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="container flex justify-center items-center flex-col">{children}</div>
    </div>
  );
};

export default Container;

"use client";

export interface Button {
  width: string;
  title: string;
  purpose: any;
}
const Button: React.FC<Button> = ({ width, title, purpose }) => {
  return (
    <button
      className={`m-8 p-2 h-10 px-6 font-semibold rounded-md text-white items-center mx-auto bg-orange w-[${width}]`}
      onClick={purpose}
    >
      {title}
    </button>
  );
};
export default Button;

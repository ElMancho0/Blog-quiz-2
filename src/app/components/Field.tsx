"use client";
interface Field {
  type: string;
  titule: string;
  text_Field: string;
  setText_Field: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}
const Field: React.FC<Field> = ({
  type,
  titule,
  text_Field,
  setText_Field,
  name,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText_Field(event.target.value);
  };
  return (
    <div className="block font-normal my-3 w-[100%] pr-2 pl-2">
      {titule}
      <input
        type={type}
        name={name}
        id="Field_text"
        placeholder=""
        className="block p-2 text-sm text-black bg-white rounded-md border-1 border-gray-600 appearance-none dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-gray-1000 peer w-full"
        value={text_Field}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default Field;

import { useCallback, useState } from "react";

const SearchBar = () => {
  const [title, setTitle] = useState("");

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      console.log(title);
      setTitle("");
    },
    [title]
  );

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100  rounded-md shadow-md w-full md:w-[80%]"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 bg-transparent outline-none px-2 py-1 text-gray-700"
      />
      <button
        type="submit"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-crimson hover:bg-red-700 transition-colors duration-200"
      >
        <img
          src="/images/search.png"
          alt="Search"
          width={16}
          height={16}
          className="text-white"
        />
      </button>
    </form>
  );
};

export default SearchBar;

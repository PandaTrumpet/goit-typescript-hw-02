import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { FormEvent } from "react";
interface ISearch {
  onSubmit: (nameImage: string) => void;
  query: string;
  inputError: () => void;
}
export default function SearchBar({ onSubmit, query, inputError }: ISearch) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query === "") {
      inputError();
    }
    const form = e.target as HTMLFormElement;
    const nameImage = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    onSubmit(nameImage);
    form.reset();
  };

  return (
    <header className={css.headerForm}>
      <form id="searchForm" onSubmit={handleSubmit} className={css.mainForm}>
        <input
          className={css.serachInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit" className={css.btn}>
          <CiSearch />
        </button>
      </form>
    </header>
  );
}

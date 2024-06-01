import css from "./LoadMoreBtn.module.css";
interface IClick {
  onClick: () => void;
}
export default function LoadMoreBtn({ onClick }: IClick) {
  return (
    <>
      <button onClick={onClick} className={css.btn}>
        Load more
      </button>
    </>
  );
}

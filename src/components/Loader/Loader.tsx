import { MutatingDots } from "react-loader-spinner";
import css from "./Loader.module.css";

interface AppProps {
  isLoading: boolean;
}
const Loader: React.FC<AppProps> = ({ isLoading }) => {
  return (
    <div className={css.loader}>
      <MutatingDots
        visible={isLoading}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;

import SearchInput from "../components/SearchInput";
import { LIST_EXAMPLE } from "../constants";

const Home = () => {
  return (
    <div>
      <SearchInput list={LIST_EXAMPLE} />
    </div>
  );
};

export default Home;

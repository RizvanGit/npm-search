import { FC, useState, FormEvent } from "react";
import { useActions } from "../../hooks/useActioins";
import { useAppSelector } from "../../hooks/useTypedSelector";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useAppSelector(
    (state) => state.repositories,
  );

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };
  const content = (
    <ul>
      {data.map((npmPackage, i) => (
        <li key={i}>{npmPackage}</li>
      ))}
    </ul>
  );
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && content}
    </div>
  );
};

export default RepositoriesList;

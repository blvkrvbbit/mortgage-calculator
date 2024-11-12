import "./app-bar.styles.scss";

type Props = {
  clear: () => void;
};
const AppBar = ({ clear }: Props) => {
  return (
    <header className="app-bar">
      <h1 className="logo">Mortgage Calculate</h1>
      <button className="btn-clear" onClick={clear}>
        Clear All
      </button>
    </header>
  );
};

export default AppBar;

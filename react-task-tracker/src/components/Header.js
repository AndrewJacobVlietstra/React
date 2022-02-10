import Button from "./Button";

const Header = ({ title, onShowForm, showForm }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showForm ? 'darkred' : 'green'} text={showForm ? 'Close Form' : 'Add Task'} onClick={onShowForm} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;

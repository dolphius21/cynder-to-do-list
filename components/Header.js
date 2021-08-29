import { format } from 'date-fns';

const Header = () => {
  const currDate = format(new Date(), 'cccc, do LLLL');

  return (
    <header className="header">
      <div className="text-container">
        <h2>My Tasks</h2>
        <p>{currDate}</p>
      </div>
    </header>
  );
};

export default Header;

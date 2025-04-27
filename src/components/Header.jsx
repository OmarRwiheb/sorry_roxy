import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Dear Dwarfy Roxy...</h1>
      <p>Even though you're fun-sized, you're giant in my heart!</p>
      <Link to="/fun-facts">
        <button>Let's start!</button>
      </Link>
    </header>
  );
}

export default Header;

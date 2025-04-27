import { Link } from 'react-router-dom';

function FunFacts() {
  return (
    <section style={{ color: 'black' }}>
      <h2>Fun Facts About Roxy</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>100% Dwarfy Power (💪)</li>
        <li>but my favourite Dwarfy 🤏</li>
        <li>She is so caring ❤️</li>
        <li>I love how I feel comfortable around her 👨‍👧</li>
        <li>+ she is a sexy latino 🌶️</li>
      </ul>
      <Link to="/apology">
        <button>Next Step</button>
      </Link>
    </section>
  );
}

export default FunFacts;

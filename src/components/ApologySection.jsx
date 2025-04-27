import { Link } from 'react-router-dom';

function ApologySection() {
  return (
    <section style={{ marginTop: '40px' }}>
      <div>
        <img src="sticky-removebg-preview.png" alt="" style={{ width: '100%' }} />
        <p>
          I'm sorry, Dwarfy...
          Please don't beat me up with your tiny but deadly hands!
        </p>
      </div>
      <Link to="/forgiveness">
        <button>Next Step</button>
      </Link>
    </section>
  );
}

export default ApologySection;

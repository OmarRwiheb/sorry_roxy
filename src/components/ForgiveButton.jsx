import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgiveButton() {
  const [forgiven, setForgiven] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(200);
  const [buttonHeight, setButtonHeight] = useState(60);

  function handleForgive() {
    setForgiven(true);
    createConfetti();
  }

  function createConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }

  function handleClick() {
    setButtonWidth(prev => prev * 2);
    setButtonHeight(prev => prev * 2);
  }

  return (
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {!forgiven ? (
        <button onClick={handleForgive} style={{ width: `${buttonWidth}px`, height: `${buttonHeight}px`, background: 'green' }}>Forgive Me?</button>
      ) : (
        <>
          <img src="giphy.gif" alt="" style={{ zIndex: 100, width: '100%' }} />
          <h2>Thank you, Dwarfy, I love you!! ❤️</h2>
          <Link to="/sorry_roxy">
            <button>Go Back</button>
          </Link>
        </>
      )}
      {!forgiven && <button onClick={handleClick} style={{ background: 'red' }}>No I will not</button>}

    </div>
  );
}

export default ForgiveButton;

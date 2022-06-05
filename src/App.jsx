import Logo from './components/Logo';
import Text from './components/Text';
import styles from './App.module.css';

import { styled } from './stitches.config';

const WaitlistTitle = styled('h1', {
  fontFamily: '$serif',
  color: '$dark',
  fontSize: '$5',
  '@sm': {
    fontSize: '$5',
  },
  '@md': {
    fontSize: '$6',
  },
  '@lg': {
    fontSize: '$6',
  },
});

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Logo />
        <WaitlistTitle>Join the Waitlist</WaitlistTitle>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;

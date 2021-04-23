import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { PlayerContextProvider } from '../contexts/PlayerContext';

import styles from '../style/app.module.scss';

import '../style/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp

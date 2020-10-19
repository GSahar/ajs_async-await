// TODO: write your code here
import GameSavingLoader from './gameSavingLoader';

try {
  (async () => {
    console.log(await GameSavingLoader.load());
  })();
} catch (err) {
  console.log(err.message);
}

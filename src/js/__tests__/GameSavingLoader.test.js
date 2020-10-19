import GameSavingLoader from '../gameSavingLoader';

test('async/await', async () => {
  try {
    const result = await GameSavingLoader.load();
    expect(result).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  } catch (err) {

  }
});

test('async/await error', async () => {
  try {
    const result = await GameSavingLoader.load();
    // expect(result).toEqual({ "id": 9, "created": 1546300800, "userInfo": { "id": 1, "name": "Hitman", "level": 10, "points": 2000 } });
  } catch (err) {
    /* убрана первая " у name */
    expect(err.message).toEqual('Unexpected token n in JSON at position 48');
  }
});

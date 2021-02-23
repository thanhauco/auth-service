const auth = require('../src/services/auth');
test('register creates user', async () => {
  await auth.register('test@test.com', '123456');
  // Mock check
});
import { User } from '../models/User' // '@models/User';

test('it should be ok', () => {
  const user = new User()
  user.name = 'Jailson'

  expect(user.name).toEqual('Jailson')
})

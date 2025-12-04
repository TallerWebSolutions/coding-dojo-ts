import { describe, expect, test } from '@jest/globals';
import { sendGreeting } from './birthday-sent';


const dataMock = [
  {
    last_name: "Doe",
    first_name: "John",
    date_of_birth: "1982/10/08",
    email: "john.doe@foobar.com"
  },
  {
    last_name: "Ann",
    first_name: "Mary",
    date_of_birth: "1975/09/11",
    email: "mary.ann@foobar.com"
  }
]

describe('birthday-sent', () => {
  test('sents greetings to all my friends', () => {
    expect(sendGreeting(dataMock[0].first_name)).toBe('Happy birthday, dear John!');
  });
});

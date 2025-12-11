import { sendMail } from "./birthday-mail";

export type friendType = {
  last_name: string;
  first_name: string;
  date_of_birth: string;
  email: string;
};

export function sendGreeting( friends: friendType[] ) {
  return friends.map(friend => sendMail(friend.email, `Happy birthday, dear ${friend.first_name}!`));
}

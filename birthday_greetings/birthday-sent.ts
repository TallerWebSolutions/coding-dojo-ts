
export type friendType = {
  last_name: string;
  first_name: string;
  date_of_birth: string;
  email: string;
};

export function sendGreeting( friends: friendType[] ) {
  return friends.map(friend => `Happy birthday, dear ${friend.first_name}!`);
}

export function sendMail( email: string, message: string ) {

}

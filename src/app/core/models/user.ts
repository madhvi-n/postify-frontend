export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}


export class Author extends User {
  name(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
  avatar: string = 'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-256.png';
}

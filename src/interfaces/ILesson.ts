export interface ILesson {
  id: string;
  date: string;
  type: string;
  imageUrl: string;
  title: string;
  content: string;
  description: string;
  level: string;
  favouritedByCurrentUser: boolean;
  readByCurrentUser: boolean;
}

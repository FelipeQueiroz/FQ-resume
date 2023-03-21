export interface ITimeLine {
  id: string;
  title: string;
  projectTitle?: string;
  description: string;
  tagsList?: TagsList[];
  imageUrl?: string;
}

export interface TagsList {
  id: string;
  name: string;
}

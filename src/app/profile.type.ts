export type ProfileType={
  name:string;
  username:string;
  bio:string;
  picture:string;
  links:LinkType[];
}
export type LinkType={
  value: string;
  title: string;
  icon:string;
  bgColor:string; // Instagram gradient pink
}

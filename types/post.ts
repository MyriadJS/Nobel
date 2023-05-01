interface Stats {
  followers: number,
  following: number,
  posts: number,
  points: number,
}

interface Meta {
  location: string,
  creation: string,
}

export interface Author {
  name: string,
  handle: string,
  avatar: string,
  bio: string,
}

export interface User {
  id: string,
  author: Author,
  meta: Meta,
  stats: Stats,
}

interface Reactions {
  pro: number,
  con: number,
  replies: number,
}

export interface Post {
  id: string,
  user: User,
  content?: string,
  cover: string[],
  parent?: Post | null,
  reactions: Reactions
}
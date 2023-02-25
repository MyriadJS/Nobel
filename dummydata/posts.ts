import { User, Post } from '@/types/Post'
  const user1: User =  {
    id: "1",
    author: {
      name: 'Sarah Taylor',
      handle: 'sarah_taylor',
      avatar: 'headshot17_bswhpg.jpg',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
    },
    meta: {
      location: 'London, UK',
      creation: '2021-01-01',
    },
    stats: {
      followers: 100,
      following: 100,
      posts: 100,
      points: 100,
    },
  }

  export const feed: Post[] = [
    {
      id: "1",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: '',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "2",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: '',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "3",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: '',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "4",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: '',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "5",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: 'chillgirl_tnjodj.jpg',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "6",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: '',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "7",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: '',
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
  ]
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

  const postExample = {
    id: "1",
    user: user1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
    cover: [],
    parent: null,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  }

  const otherExample =  {
    id: "5",
    user: user1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
    cover: ['etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg'],
    parent: postExample,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  }

  export const feed: Post[] = [
    {
      id: "1",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: [],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: [],
      parent: postExample,
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
      cover: [],
      parent: null,
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
      cover: ['chillgirl_tnjodj.jpg'],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: ['chillgirl_tnjodj.jpg'],
      parent: otherExample,
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "1",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: [],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: [],
      parent: postExample,
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
      cover: [],
      parent: null,
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
      cover: ['jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'headshot12_ttdryb.jpg'],
      parent: null,
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
      cover: ['jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg'],
      parent: null,
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
    {
      id: "1",
      user: user1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl eu ante.',
      cover: [],
      parent: null,
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
      cover: [],
      parent: null,
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
      cover: ['jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg'],
      parent: null,
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
      cover: ['jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg'],
      parent: null,
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
      cover: ['jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg'],
      parent: null,
      reactions: {
        pro: 100,
        con: 100,
        replies: 100,
      }
    },
  ]
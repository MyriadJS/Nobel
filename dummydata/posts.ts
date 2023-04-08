import { User, Post } from '@/types/post'

export const user1: User =  {
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

export const postExample = {
  id: "1",
  user: user1,
  content: 'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
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

const thirdExample = {
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
    content: undefined,
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
    cover: ['jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'jevgeni-fil-TIkpqtEUMtQ-unsplash_qff7be.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg', 'chillgirl_tnjodj.jpg', 'etty-fidele-J1jYLLlRpA4-unsplash_yb3gr4.jpg', 'headshot12_ttdryb.jpg'],
    parent: null,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  },
  {
    id: "30",
    user: user1,
    content: undefined,
    cover: ['chillgirl_tnjodj.jpg'],
    parent: null,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  },
  {
    id: "30",
    user: user1,
    content: undefined,
    cover: ['chillgirl_tnjodj.jpg'],
    parent: thirdExample,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  },
]

// import { Paragraph } from '@tiptap/extension-paragraph'
// import Strike from '@tiptap/extension-strike'
// import { markInputRule } from '@tiptap/core'


//   const CustomParagraph = Paragraph.extend({
//     // listen for the `beforeinput` event to split paragraphs
    
//     // addKeyboardShortcuts() {
//     //   return {'Enter': () => {
//     //       const { $head } = this.editor.state.selection
//     //       const pastText = $head.parent.textBetween($head.parentOffset - $head.textOffset, $head.parentOffset)
          
//     //       if (pastText.length >= softLimit) {
//     //         //this.editor.chain().focus().splitBlock().command(() => this.editor.commands.setContent($head.pos, '')).run()
//     //         return true
//     //       }

//     //       console.log($head.parent.textBetween($head.parentOffset - $head.textOffset, $head.parentOffset));
          
//     //       return false
//     //   }}
//     // },

//     // addProseMirrorPlugins() {
//     //   return [
//     //     {
//     //       // listen for the `input` event
//     //       handleTextInput(view, from, to, text) {
//     //         const { $head } = view.state.selection
//     //         const textLength = text.trim().length
//     //         const paragraphLength = $head.parent.textContent.length
//     //         if (textLength > 0 && paragraphLength + textLength > this.options.maxChars) {
//     //           // split the paragraph if it exceeds the maximum character limit
//     //           const tr = view.state.tr.delete(from, to).split($head.pos)
//     //           view.dispatch(tr)
//     //           return true
//     //         }
//     //         return false
//     //       },
//     //     },
//     //   ]
//     // },
//   })

//   const ShiftEnterCreateExtension = Extension.create({
//     addKeyboardShortcuts() {
//       return {
//         "Shift-Enter": ({ editor }) => {
//           editor.commands.enter();
//           return true;
//         },
//       };
//     },
//   });

//   const inputRegex = /(?:^|\s)((?:~)((?:[^~]+))(?:~))$/

//   const CustomStrike = Strike.extend({
//     addCommands() {
//       return {
//         toggleStrike: () => ({ commands }) => {
//           return commands.toggleMark('strike')
//         },
//       }
//     },
//     addInputRules() {
//       return [
//         markInputRule({
//           find: inputRegex,
//           type: this.type,
//         }),
//       ]
//     },
//   })

//   const sss = Paragraph.extend({
//     addCommands() {
//       return {
//         toggleStrike: () => ({ commands }) => {
//           return commands.toggleMark('strike')
//         },
//       }
//     },
//     addKeyboardShortcuts() {
//       return {
//         "Shift-Enter": () => this.editor.commands.toggleStrike(),
//       };
//     },
//   })


//   const customNewline = Extension.create({
//   name: "newline",
//   addCommands() {
//     return {
//       addNewline:
//         () =>
//         ({ state, dispatch }) => {
//           const { schema, tr } = state;
//           const paragraph = schema.nodes.paragraph;

//           const transaction = tr
//             .deleteSelection()
//             .replaceSelectionWith(paragraph.create(), true)
//             .scrollIntoView();
//           if (dispatch) dispatch(transaction);
//           return true;
//         },
//     };
//   },
//   addKeyboardShortcuts() {
//     return {
//       "Shift-Enter": () => this.editor.commands.addNewline(),
//     };
//   },
// });
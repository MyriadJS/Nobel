import { useEditor as tiptap } from '@tiptap/vue-3'
import { Editor } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Heading from '@tiptap/extension-heading'
import History from '@tiptap/extension-history'
import CharacterCount from '@tiptap/extension-character-count'
import Placeholder from '@tiptap/extension-placeholder'
import { Overflow, validateOverflow } from './Overflow'
import NobleParagraph from './VueParagraph'
import { Slugline } from './Slugline'

interface useTiptapProps {
  limit?: number
  placeholder?: string
  onChange?: (editor: Editor) => void
}

export function useTiptap({
  limit = 280,
  placeholder = 'Write something...',
  onChange = () => {},
}: useTiptapProps) {
  const editor = tiptap({
    content: `
      <h1>THE RUBIK'S CUBE IS THE WORLD’S BEST SELLING PUZZLE TOY</h1>
      <vue-post>Nuxt layers are a powerful feature that you can use to share and reuse <strong>partial</strong> Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.</vue-post>
      <p class="slugline">Nuxt applications within a monorepo, or from a git repository or npm package. Nuxt applications within a monorepo, or from a git repository or npm package</p>
      <vue-post>Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.</vue-post>
      <h1>Title</h1>
      <vue-post>The Rubik's Cube is the World’s best selling puzzle toy</vue-post>
      <vue-post>Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.</vue-post>
      <h2>THE RUBIK'S CUBE IS THE WORLD’S BEST SELLING PUZZLE TOY</h2>
      <vue-post>Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.</vue-post>
      <h3>THE RUBIK'S CUBE IS THE WORLD’S BEST SELLING PUZZLE TOY</h3>
      <vue-post>Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.</vue-post>
    `,
    onUpdate,
    extensions: [
      Document,
      NobleParagraph,
      Text,
      Bold,
      Italic,
      Heading,
      Paragraph,
      Slugline,
      History,
      Overflow,
      Placeholder.configure({ placeholder }),
      CharacterCount.configure({ limit }),
    ],
  })

  const currentNodeLength = ref(0)
  function countNodeLength(editor: Editor) {
    const { $head } = editor.state.selection
    const nodeSize = $head.parent.content.size
    currentNodeLength.value = nodeSize
  }

  function onUpdate({ editor }: { editor: Editor }) {
    onChange(editor)
    countNodeLength(editor)
    validateOverflow(editor, {
      limit: 280,
    })
  }

  onBeforeUnmount(() => {
    if (!editor.value) return
    editor.value.destroy()
  })

  return editor
}

import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './Post.vue'

export default Node.create({
  name: 'vuePost',
  group: 'block',
  content: 'inline*',
  parseHTML() {
    return [{tag: 'vue-post'}]
  },
  renderHTML({ HTMLAttributes }) {
    return ['vue-post', mergeAttributes(HTMLAttributes), 0]
  },
  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands }) => {
        return commands.setNode(this.name)
      },
    }
  },
})
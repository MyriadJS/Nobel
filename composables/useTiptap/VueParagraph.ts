import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Paragraph from '@/components/Text/Paragraph.vue'

export default Node.create({
  name: 'vuePost',
  priority: 1100,
  group: 'block',
  content: 'inline*',
  parseHTML() {
    return [{ tag: 'vue-post' }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['vue-post', mergeAttributes(HTMLAttributes), 0]
  },
  addNodeView() {
    return VueNodeViewRenderer(Paragraph)
  },
})

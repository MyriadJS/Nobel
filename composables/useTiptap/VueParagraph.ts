import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import VueParagraph from '@/components/Text/VueParagraph.vue'

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
    return VueNodeViewRenderer(VueParagraph)
  },
})
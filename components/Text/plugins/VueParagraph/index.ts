import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './Component.vue'

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
  onSelectionUpdate() {
    console.log('update');
    return (e: any) => {
      console.log('selectionUpdate', e);
    }
  },
})
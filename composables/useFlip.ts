import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export function useFlip(settings?: Flip.FromToVars) {
  const element = ref<HTMLElement | null>(null)

  function el(el: HTMLElement) {
    element.value = el
  }

  async function flip(callback: () => void) {
    const state = Flip.getState(element.value)
    callback()
    await nextTick()
    return Flip.from(state, settings)
  }

  return { el, flip, element }
}
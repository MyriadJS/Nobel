import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export function useFlip({settings, disabled = false}: {settings?: Flip.FromToVars, disabled?: boolean}) {
  const element = ref<HTMLElement | null>(null)

  function el(el: HTMLElement) {
    element.value = el
  }

  async function flip(callback: () => void) {
    const state = Flip.getState(element.value)
    callback()
    if(disabled) return
    await nextTick()
    return Flip.from(state, settings)
  }

  return { el, flip, element }
} 
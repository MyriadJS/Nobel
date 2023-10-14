import {
  myriad
} from "@myriadjs/core"
import { umbra } from "@umbrajs/core"

const success = {
  name: 'success',
  color: '#00ff00',
}

const error = {
  name: 'error',
  color: '#ff0000',
}

const lightTheme = {
  background: '#ebe3d9',
  foreground: '#0c0915',
  accents: ['#c97074', success, error],
}

const darkTheme = {
  background: '#0c0915',
  foreground: '#c0aea3',
  accents: ['#c97074', success, error],
}

const theme = ref(darkTheme)

function darkToggle() {
  if(process.client) {
    document.addEventListener("keydown", function(event) {
      if (event.altKey && (event.key === 't')) {
        const dark = theme.value.background === darkTheme.background
        theme.value = dark ? lightTheme : darkTheme
      }
    });
  }
}

export function useTheme(element?: HTMLElement) {
  watch(theme, (val) => {
    const html = document.querySelector('html')
    if(!html) return
    umbra(val).apply()
  })
  
  onMounted(() => {
    darkToggle()
    umbra(theme.value).apply()
  })

  return theme
}
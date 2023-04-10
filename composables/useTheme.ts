import {
  myriad
} from "@myriadjs/core"

const settings = {
  readability: 1,
}

const lightTheme = {
  background: '#ebe3d9',
  foreground: '#0c0915',
  accents: ['#c97074'],
  custom: {
    success: '#00ff00',
    error: '#ff0000',
  }
}

const darkTheme = {
  background: '#0c0915',
  foreground: '#c0aea3',
  accents: ['#c97074'],
  custom: {
    success: '#00ff00',
    error: '#ff0000',
  }
}

const theme = ref(darkTheme)

export const useTheme = () => {
  watch(theme, (val) => {
    myriad(val, settings)
  })

  if(process.client) {
    document.addEventListener("keydown", function(event) {
      if (event.altKey && (event.key === 't')) {
        const dark = theme.value.background === darkTheme.background
        theme.value = dark ? lightTheme : darkTheme
      }
    });
  }

  onMounted(() => {
    myriad(theme.value, settings)
  })

  return theme
}
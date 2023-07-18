// Uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
  ],
  shortcuts: [
    // ...
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Abel',
        serif: 'Antic Slab',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

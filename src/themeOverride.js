import { defaultTheme } from 'evergreen-ui'


console.log(JSON.stringify(defaultTheme, null, 4));

const themeOverride = { ...defaultTheme }

// themeOverride.typography.fontFamilies.display = fontFamilies.display
// themeOverride.typography.fontFamilies.ui = fontFamilies.display
// themeOverride.typography.fontFamilies.mono = fontFamilies.mono

// themeOverride.typography.fontFamilies.mono = fontFamilies.mono

const headingStyles = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const headingFontWeights = [400, 400, 400, 400, 400, 400, 400, 400, 400]

headingStyles.forEach((style, index) => {
  // themeOverride.typography.headings[style].fontFamily = fontFamilies.display
  themeOverride.typography.headings[style].fontWeight = headingFontWeights[index]
})

themeOverride.overlayBackgroundColor = '#6368d2d6'


export default themeOverride

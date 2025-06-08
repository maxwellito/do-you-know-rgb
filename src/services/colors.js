const grayLuminance = luminance(8,8,8);

export function isDark(color) {
  return grayLuminance < luminance(...hexToLevel(color));
}

export function hexToLevel (color) {
  return color.substring(1).split('').map(h => parseInt(h, 16));
}

// Reference : Guess-my-RGB game
export function luminance (r, g, b) {
  // Reference: https://www.w3.org/TR/WCAG20-TECHS/G17.html
  const rl = sRGBToLinear(r)
  const gl = sRGBToLinear(g)
  const bl = sRGBToLinear(b)
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl
}

export function sRGBToLinear (c) {
  c = c / 15
  if (c <= 0.03928) {
    return c / 12.92
  } else {
    return Math.pow((c + 0.055) / 1.055, 2.4)
  }
}
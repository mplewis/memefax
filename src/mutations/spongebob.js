export default function spongebob (text) {
  let up = true
  return Array.from(text)
    .map(codepoint => {
      if (!codepoint.match(/[A-z]/)) return codepoint
      up = !up
      return up ? codepoint.toUpperCase() : codepoint.toLowerCase()
    })
    .join('')
}

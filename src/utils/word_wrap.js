function unwrappable (maxLength, words) {
  return words[0].length > maxLength
}
function wordWrapRec (maxLength, words, lines) {
  if (words.length === 0 || unwrappable(maxLength, words)) {
    return lines
  }
  const leftovers = []
  let line = words.join(' ')
  while (line.length > maxLength) {
    leftovers.unshift(words.pop())
    line = words.join(' ')
  }
  lines.push(line)
  return wordWrapRec(maxLength, leftovers, lines)
}

export default function wordWrap (maxLength, text) {
  return wordWrapRec(maxLength, text.split(/\s+/), [])
}

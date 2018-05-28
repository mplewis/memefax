function clapifyWords (text, emoji) {
  return text.replace(/\s+/g, emoji)
}

function clapifyChars (word, emoji) {
  return clapifyWords(word.split('').join(' '), emoji)
}

function clapify (text) {
  const emoji = '👏'
  return text.indexOf(' ') === -1
    ? clapifyChars(text, emoji)
    : clapifyWords(text, emoji)
}

export default [
  {
    name: 'Clapify',
    mutator: clapify,
    active: true
  },
  {
    name: 'Upcase',
    mutator: text => text.toUpperCase(),
    active: false
  }
]

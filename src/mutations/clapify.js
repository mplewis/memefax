function clapifyWords (text, emoji) {
  return text.trim().replace(/\s+/g, emoji)
}

function clapifyChars (word, emoji) {
  return clapifyWords(word.split('').join(' '), emoji)
}

export default function clapify (text) {
  const emoji = '👏'
  return text.indexOf(' ') === -1
    ? clapifyChars(text, emoji)
    : clapifyWords(text, emoji)
}

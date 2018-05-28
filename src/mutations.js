import { smallCaps, superscript, upsideDown } from './charmaps'

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

function mapChars (charMap) {
  return function (text) {
    return text
      .split('')
      .map(char => {
        const match = charMap[char]
        if (match) return match
        return char
      })
      .join('')
  }
}

function reverse (text) {
  return text
    .split('')
    .reverse()
    .join('')
}

export default [
  {
    name: 'Clapify',
    mutator: clapify,
    active: true
  },
  {
    name: 'Small Caps',
    mutator: mapChars(smallCaps)
  },
  {
    name: 'Superscript',
    mutator: mapChars(superscript)
  },
  {
    name: 'Flipped',
    mutator: text => mapChars(upsideDown)(reverse(text))
  }
]

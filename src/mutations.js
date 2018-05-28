import { bubble, smallCaps, superscript, upsideDown, wide } from './charmaps'

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
  return Array.from(text)
    .reverse()
    .join('')
}

export default [
  {
    name: 'Clap👏ify',
    mutator: clapify,
    color: 'red',
    active: true
  },
  {
    name: 'Ｗｉｄｅｔｅｘｔ',
    mutator: mapChars(wide),
    color: 'orange'
  },
  {
    name: 'Sᴍᴀʟʟ Cᴀᴘs',
    mutator: mapChars(smallCaps),
    color: 'yellow',
    active: true
  },
  {
    name: 'ˢᵘᵖᵉʳˢᶜʳᶦᵖᵗ',
    mutator: mapChars(superscript),
    color: 'green'
  },
  {
    name: 'pǝddᴉๅꓞ',
    mutator: text => mapChars(upsideDown)(reverse(text)),
    color: 'teal'
  },
  {
    name: 'Ⓑⓤⓑⓑⓛⓔ',
    mutator: mapChars(bubble),
    color: 'blue'
  }
]

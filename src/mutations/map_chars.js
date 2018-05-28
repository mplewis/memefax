export default function mapChars (charMap) {
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

import { bubble, smallCaps, superscript, upsideDown, wide } from '../charmaps'
import clapify from './clapify'
import mapChars from './map_chars'
import reverse from './reverse'

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

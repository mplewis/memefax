import bravoVince from 'bravo-vince'

import {
  bubble,
  regionalIndicator,
  smallCaps,
  superscript,
  upsideDown,
  wide
} from '../charmaps'
import emojiBlocks from './emoji_blocks'
import clapify from './clapify'
import mapChars from './map_chars'
import reverse from './reverse'
import spongebob from './spongebob'

export default [
  {
    name: 'Clap👏ify',
    mutator: clapify
  },
  {
    name: 'Ｗｉｄｅｔｅｘｔ',
    mutator: mapChars(wide)
  },
  {
    name: 'Sᴍᴀʟʟ Cᴀᴘs',
    mutator: mapChars(smallCaps)
  },
  {
    name: 'ˢᵘᵖᵉʳˢᶜʳᶦᵖᵗ',
    mutator: mapChars(superscript)
  },
  {
    name: 'pǝddᴉๅꓞ',
    mutator: text => mapChars(upsideDown)(reverse(text))
  },
  {
    name: 'Ⓑⓤⓑⓑⓛⓔ',
    mutator: mapChars(bubble)
  },
  {
    name: 'eⓂ️🅾️jℹ️ 🅱️l🅾️cks',
    mutator: emojiBlocks
  },
  {
    name: '🇷⁣🇪⁣🇬⁣🇮⁣🇴⁣🇳⁣🇦⁣🇱⁣ ⁣🇮⁣🇳⁣🇩⁣🇮⁣🇨⁣🇦⁣🇹⁣🇴⁣🇷⁣🇸',
    mutator: chars =>
      mapChars(regionalIndicator)(
        Array.from(chars.toUpperCase()).join('\u2063')
      )
  },
  {
    name: 'sPoNgEbOb',
    mutator: spongebob
  },
  {
    name: 'B R A V O V I N C E',
    mutator: text => {
      const [horiz, ...vert] = text.split(/\s/g)
      return bravoVince(horiz, vert)
    }
  }
]

import wordWrap from '@/utils/word_wrap'
import hd from 'heredocument'
import zip from 'lodash/zip'

const wrapLength = 26
const fixedLeftDist = 9
const template = hd`
  ┳┻|
  ┻┳|
  ┳┻|
  ┻┳|
  ┳┻|
  ┻┳|
  ┳┻|
  ┻┳|
  ┳┻|
  ┻┳|
  ┳┻|
  ┻┳|
  ┳┻| _
  ┻┳| •.•)
  ┳┻|⊂ﾉ
  ┻┳|
`.trim()

export default function brickWall (text) {
  const textLines = wordWrap(wrapLength, text)
  textLines.push(null)
  const templateLines = template.split('\n')
  while (textLines.length < templateLines.length) textLines.unshift(null)
  return zip(templateLines, textLines)
    .map(([left, right]) => {
      if (!right) return left
      while (left.length < fixedLeftDist) left += ' '
      return `${left} ${right}`
    })
    .join('\n')
}

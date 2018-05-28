import mapChars from '@/mutations/map_chars'

describe('mapChars', function () {
  it('maps matched chars and ignores mismatches', function () {
    const map = { a: 'A', b: 'B', c: 'C' }
    expect(mapChars(map)('abcdef')).to.eql('ABCdef')
  })
})

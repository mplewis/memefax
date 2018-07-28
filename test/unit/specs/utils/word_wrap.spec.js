import wordWrap from '@/utils/word_wrap'
import hd from 'heredocument'

describe('wordWrap', function () {
  it('wraps words properly', function () {
    expect(wordWrap(50, 'something short')).to.eql(['something short'])
    expect(wordWrap(16, 'When in the Course of human events,')).to.eql([
      'When in the', 'Course of human', 'events,'
    ])
    const text = hd`
      ABRAM: Do you bite your thumb at us, sir?
      SAMPSON: I do bite my thumb, sir.
      ABRAM Do you bite your thumb at us, sir?
      SAMPSON (aside to GREGORY): Is the law of our side if I say “ay”?
    `
    expect(wordWrap(50, text)).to.eql([
      'ABRAM: Do you bite your thumb at us, sir? SAMPSON:',
      'I do bite my thumb, sir. ABRAM Do you bite your',
      'thumb at us, sir? SAMPSON (aside to GREGORY): Is',
      'the law of our side if I say “ay”? '
    ])
    expect(wordWrap(8, 'thisisunwrappable')).to.eql([])
  })
})

import clapify from '@/mutations/clapify'

describe('clapify', function () {
  it('clapifies one word', function () {
    expect(clapify('oneword')).to.eql('o👏n👏e👏w👏o👏r👏d')
  })

  it('clapifies multiple words', function () {
    expect(clapify('multiple words')).to.eql('multiple👏words')
  })

  it('strips surrounding spaces and combines multiple spaces', function () {
    expect(clapify('   surrounded  \n\n  by \tspaces  ')).to.eql(
      'surrounded👏by👏spaces'
    )
  })
})

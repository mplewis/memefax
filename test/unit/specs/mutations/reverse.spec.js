import reverse from '@/mutations/reverse'

describe('reverse', function () {
  it('reverses with codepoint awareness', function () {
    expect(reverse('american👏dream')).to.eql('maerd👏nacirema')
  })
})

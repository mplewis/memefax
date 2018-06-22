import { current, update } from '@/utils/last_used'

describe('lastUsed', function () {
  it('provides a default, saves, and retrieves properly', function () {
    expect(current()).to.eql([0])
    update(0, false)
    update(1, true)
    update(2, false)
    update(3, true)
    expect(current()).to.eql([1, 3])
  })
})

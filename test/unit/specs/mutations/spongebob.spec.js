import spongebob from '@/mutations/spongebob'

describe('spongebob', function () {
  it('applies the spongebob text effect', function () {
    expect(
      spongebob("you can't just write a unit test for a meme website")
    ).to.eql("yOu CaN't JuSt WrItE a UnIt TeSt FoR a MeMe WeBsItE")
  })
})

import emojiBlocks from '@/mutations/emoji_blocks'

describe('emojiBlocks', function () {
  it('blockifies text', function () {
    expect(emojiBlocks('please clap')).to.eql('🅿le🅰️se 🆑🅰️🅿')
  })
})

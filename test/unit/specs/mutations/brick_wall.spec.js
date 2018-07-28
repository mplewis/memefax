import brickWall from '@/mutations/brick_wall'
import hd from 'heredocument'

describe('brickWall', function () {
  it('generates the expected output', function () {
    expect(brickWall('Sending application errors to Slack isn\'t monitoring'))
      .to.eql(hd`
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
      ┻┳| •.•)  Sending application errors
      ┳┻|⊂ﾉ     to Slack isn't monitoring
      ┻┳|
    `.trim())
  })
})

import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import chrome from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await chrome({
      text: input,
    })
    return res
  },
  context: Context,
})
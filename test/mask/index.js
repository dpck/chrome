import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import chrome from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await chrome({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts

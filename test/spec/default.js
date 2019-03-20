import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import chrome from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof chrome, 'function')
  },
  async 'calls package without error'() {
    await chrome()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await chrome({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
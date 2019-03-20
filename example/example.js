/* yarn example/ */
import chrome from '../src'

(async () => {
  const res = await chrome({
    text: 'example',
  })
  console.log(res)
})()
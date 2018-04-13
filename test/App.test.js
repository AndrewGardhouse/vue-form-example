import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

test('App is a vue component', () => {
  const app = mount(App)

  expect(app.is(App)).toBe(true)
})

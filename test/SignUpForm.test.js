import { mount } from '@vue/test-utils'
import SignUpForm from '../src/components/SignUpForm.vue'


describe('SignUpForm.vue', () => {
  let signUpForm

  beforeEach(() => {
    signUpForm = mount(SignUpForm)
  })

  describe('Name Input Field', () => {
    test('nameIsInvalid is `false` when name model exists and is 3 or more charaters', () => {
      signUpForm.vm.name = 'abc'

      expect(signUpForm.vm.nameIsInvalid).toBe(false)
    })

    test('nameIsInvalid is `true` when name model is empty or less than 3 charaters', () => {
      signUpForm.vm.name = 'ab'

      expect(signUpForm.vm.nameIsInvalid).toBe(true)
    })

    test('Name field wrapper has error class when name field is invalid', () => {
      const nameInputWrapper = signUpForm.find('.form-input.name')

      signUpForm.vm.name = 'ab'

      expect(nameInputWrapper.classes()).toContain('invalid')
    })
  })

  describe('Email Input Field', () => {
    test('emailIsInvalid is `true` when email model does not match email regex pattern', () => {
      signUpForm.vm.email = 'invalid.email@123,456'

      expect(signUpForm.vm.emailIsInvalid).toBe(true)
    });

    test('emailIsInvalid is `false` when email model matches email regex pattern', () => {
      signUpForm.vm.email = 'valid.email@example.com'

      expect(signUpForm.vm.emailIsInvalid).toBe(false)
    });

    test('Email field wrapper has error class when name field is invalid', () => {
      const emailInputWrapper = signUpForm.find('.form-input.email')

      signUpForm.vm.email = 'invalid.email@123,456'

      expect(emailInputWrapper.classes()).toContain('invalid')
    })
  })
})

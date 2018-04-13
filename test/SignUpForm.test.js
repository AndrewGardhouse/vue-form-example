import { mount } from '@vue/test-utils'
import SignUpForm from '../src/components/SignUpForm.vue'


describe('SignUpForm.vue', () => {
  let signUpForm

  beforeEach(() => {
    signUpForm = mount(SignUpForm)
  })

  describe('Name Input Field', () => {
    test('nameIsInvalid is `false` when name model model is valid', () => {
      signUpForm.vm.name = 'abc'

      expect(signUpForm.vm.nameIsInvalid).toBe(false)
    })

    test('nameIsInvalid is `true` when name model is invalid', () => {
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
    test('emailIsInvalid is `true` when email model is invalid', () => {
      signUpForm.vm.email = 'invalid.email@123,456'

      expect(signUpForm.vm.emailIsInvalid).toBe(true)
    });

    test('emailIsInvalid is `false` when email model is valid', () => {
      signUpForm.vm.email = 'valid.email@example.com'

      expect(signUpForm.vm.emailIsInvalid).toBe(false)
    });

    test('Email field wrapper has error class when email field is invalid', () => {
      const emailInputWrapper = signUpForm.find('.form-input.email')

      signUpForm.vm.email = 'invalid.email@123,456'

      expect(emailInputWrapper.classes()).toContain('invalid')
    })
  })

  describe('Phonenumber Input Field', () => {
    test('phoneNumberIsInvalid is `true` when phoneNumber model is invalid', () => {
      signUpForm.vm.phoneNumber = '123-12345'

      expect(signUpForm.vm.phoneNumberIsInvalid).toBe(true)
    });

    test('phoneNumberIsInvalid is `false` when phoneNumber model is valid', () => {
      signUpForm.vm.phoneNumber = '123-456-7890'

      expect(signUpForm.vm.phoneNumberIsInvalid).toBe(false)
    });

    test('Phonenumber field wrapper has error class when phoneNumber field is invalid', () => {
      const phoneNumberInputWrapper = signUpForm.find('.form-input.phonenumber')

      signUpForm.vm.phoneNumber = '123-12345'

      expect(phoneNumberInputWrapper.classes()).toContain('invalid')
    })
  })
})

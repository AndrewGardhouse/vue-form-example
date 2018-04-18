import { shallow } from '@vue/test-utils'
import SignUpForm from '../src/components/SignUpForm.vue'


describe('SignUpForm.vue', () => {
  let signUpForm

  beforeEach(() => {
    signUpForm = shallow(SignUpForm)
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

    test('Name error message is displayed when name is invalid', () => {
      signUpForm.vm.name = 'ab'

      expect(signUpForm.find('.form-input.name > .error-message').exists()).toBe(true)
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

    test('Email error message is displayed when email is invalid', () => {
      signUpForm.vm.email = 'invalid.email@123,456'

      expect(signUpForm.find('.form-input.email > .error-message').exists()).toBe(true)
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

    test('Phone number error message is displayed when phone number is invalid', () => {
      signUpForm.vm.phoneNumber = '123-12345'

      expect(signUpForm.find('.form-input.phonenumber > .error-message').exists()).toBe(true)
    })
  })

  describe('Password Input Field', () => {
    test('passwordIsInvalid is `true` when password model is invalid', () => {
      signUpForm.vm.password = 'invalidpassword'

      expect(signUpForm.vm.passwordIsInvalid).toBe(true)
    });

    test('passwordIsInvalid is `false` when password model is valid', () => {
      signUpForm.vm.password = '1ValidPassword!'

      expect(signUpForm.vm.passwordIsInvalid).toBe(false)
    });

    test('Password field wrapper has error class when password field is invalid', () => {
      const passwordInputWrapper = signUpForm.find('.form-input.password')

      signUpForm.vm.password = 'invalidpassword'

      expect(passwordInputWrapper.classes()).toContain('invalid')
    })

    test('Password error message is displayed when password is invalid', () => {
      signUpForm.vm.password = 'invalidpassword'

      expect(signUpForm.find('.form-input.password > .error-message').exists()).toBe(true)
    })
  })

  describe('Password Confirmation Input Field', () => {
    test('passwordConfirmationIsInvalid is `true` when passwordConfirmation model is invalid', () => {
      signUpForm.vm.password = '1ValidPassword!'
      signUpForm.vm.passwordConfirmation = 'inValidPassword'

      expect(signUpForm.vm.passwordConfirmationIsInvalid).toBe(true)
    });

    test('passwordConfirmationIsInvalid is `false` when passwordConfirmation model is valid', () => {
      signUpForm.vm.password = '1ValidPassword!'
      signUpForm.vm.passwordConfirmation = '1ValidPassword!'

      expect(signUpForm.vm.passwordConfirmationIsInvalid).toBe(false)
    });

    test('Password confirmation field wrapper has error class when passwordConfirmation field is invalid', () => {
      const passwordConfirmationInputWrapper = signUpForm.find('.form-input.password-confirmation')

      signUpForm.vm.password = '1ValidPassword!'
      signUpForm.vm.passwordConfirmation = 'inValidPassword'

      expect(passwordConfirmationInputWrapper.classes()).toContain('invalid')
    })

    test('Password confirmation number error message is displayed when password confirmation is invalid', () => {
      signUpForm.vm.password = '1ValidPassword!'
      signUpForm.vm.passwordConfirmation = 'inValidPassword'

      expect(signUpForm.find('.form-input.password-confirmation > .error-message').exists()).toBe(true)
    })
  })

  describe('Form Submission', () => {
    let signUpFormElement

    beforeEach(() => {
      signUpFormElement = signUpForm.find('form')
    })

    test('Form submit triggers sumbmitForm()', () => {
      const submitFormMock = jest.fn()
      signUpForm.vm.submitForm = submitFormMock
      signUpFormElement.trigger('submit')
      expect(submitFormMock.mock.calls.length).toBe(1)
    })

    test('Form error message shows if form has invalid fields', () => {
      signUpForm.vm.name = 'ab'
      signUpForm.vm.email = 'invalid.email@123,456'
      signUpForm.vm.phoneNumber = '123-12345'
      signUpForm.vm.password = 'inValidPassword'
      signUpForm.vm.passwordConfirmation = 'inValidPasswords'

      signUpFormElement.trigger('submit')

      expect(signUpForm.vm.showFormError).toBe(true)
      expect(signUpForm.find('.form-submit-error').exists()).toBe(true)
    })

    test('input keydown event triggers resetForm()', () => {
      const nameInput = signUpForm.find('.form-input.name > input')
      const resetFormMock = jest.fn()

      signUpForm.vm.resetForm = resetFormMock
      nameInput.trigger('keydown')

      expect(resetFormMock.mock.calls.length).toBe(1)
    })

    test('resetForm() is triggered on input change', () => {
      const nameInput = signUpForm.find('.form-input.name > input')

      signUpFormElement.trigger('submit')
      expect(signUpForm.vm.showFormError).toBe(true)
      expect(signUpForm.find('.form-submit-error').exists()).toBe(true)

      nameInput.trigger('keydown')

      expect(signUpForm.vm.showFormError).toBe(false)
      expect(signUpForm.find('.form-submit-error').exists()).toBe(false)
    })
  })
})

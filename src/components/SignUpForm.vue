<template>
  <form class="signup-form" v-on:submit.prevent="sumbmitForm">
    <div class="form-input name" v-bind:class="{ 'invalid': nameIsInvalid }">
      <label for="name">Name</label>
      <input type="text" v-model="name" placeholder="Name">
      <span v-show="nameIsInvalid">Invalid Name</span>
    </div>
    <div class="form-input email" v-bind:class="{ 'invalid': emailIsInvalid }">
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" placeholder="Email">
      <span v-show="emailIsInvalid">Invalid Email</span>
    </div>
    <div class="form-input phonenumber" v-bind:class="{ 'invalid': phoneNumberIsInvalid }">
      <label for="phoneNumber">Phonenumber</label>
      <input type="phonenumber" name="phonenumber" v-model="phoneNumber" placeholder="Phonenumber">
      <span v-show="phoneNumberIsInvalid">Invalid Phone Number</span>
    </div>
    <div class="form-input password">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" placeholder="Password">
      <!-- <span>Invalid Password</span> -->
    </div>
    <div class="form-input password-confirmation">
      <label for="passwordConfirmation">Password Confirmation</label>
      <input type="password" name="password-confirmation" v-model="passwordConfirmation" placeholder="Password Confirmation">
      <!-- <span>Passwords Do Not Match</span> -->
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      formSubmitted: false
    }
  },
  computed: {
    nameIsInvalid() {
      return this.name && this.name.length < 3
    },
    emailIsInvalid() {
      const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      return this.email && !emailRegex.test(this.email)
    },
    phoneNumberIsInvalid() {
      const phoneNumberRegex = new RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/)

      return this.phoneNumber && !phoneNumberRegex.test(this.phoneNumber)
    }
  },
  methods: {
    sumbmitForm() {
      console.log('submit form');
    }
  }
}
</script>

<style lang="scss">
.signup-form {
  .form-input {
    margin-bottom: 0.5rem;
    label {
      margin-bottom: 0.25rem;
      display: block;
    }
    &.invalid {
      label {
        color: red;
      }
      input {
        border-color: red;
      }
    }
  }
  span {
    color: red;
  }
}
</style>

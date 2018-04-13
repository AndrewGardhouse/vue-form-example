<template>
  <form class="signup-form" v-on:submit.prevent="sumbmitForm">
    <div class="form-input name" v-bind:class="{ 'invalid': nameIsInvalid }">
      <input type="text" v-model="name" placeholder="Name">
      <span v-show="nameIsInvalid">Invalid Name</span>
    </div>
    <div class="form-input email" v-bind:class="{ 'invalid': emailIsInvalid }">
      <input type="email" name="email" v-model="email" placeholder="Email">
      <span v-show="emailIsInvalid">Invalid Email</span>
    </div>
    <div class="form-input phonenumber">
      <input type="phonenumber" name="phonenumber" v-model="phoneNumber" placeholder="Phonenumber">
      <!-- <span>Invalid Phone Number</span> -->
    </div>
    <div class="form-input password">
      <input type="password" name="password" v-model="password" placeholder="Password">
      <!-- <span>Invalid Password</span> -->
    </div>
    <div class="form-input password-confirmation">
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
    &.vaild {
      input {
        border-color: green;
      }
    }
    &.invalid {
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

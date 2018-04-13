<template>
  <form class="signup-form" v-on:submit.prevent="sumbmitForm">
    <div class="form-input name" v-bind:class="{ 'invalid': nameIsInvalid }">
      <input type="text" v-model="name" placeholder="Name">
      <span v-show="nameIsInvalid">Invalid Name</span>
    </div>
    <div class="form-input phonenumber">
      <input type="phonenumber" name="phonenumber" v-model="phoneNumber" placeholder="Phonenumber">
      <!-- <span>Invalid Phone Number</span> -->
    </div>
    <div class="form-input email">
      <input type="email" name="email" v-model="email" placeholder="Email">
      <!-- <span>Invalid Email</span> -->
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

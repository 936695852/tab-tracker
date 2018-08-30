<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email"
           name="email"
           v-model="email"
           placeholder="email">
    <input type="password"
           name="password"
           v-model="password"
           placeholder="password">
    <br>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        const res = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

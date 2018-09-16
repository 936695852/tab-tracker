<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid
                   fill-height>
        <v-layout align-center
                  justify-center>
          <v-flex xs12
                  sm8
                  md4>
            <v-card class="elevation-12">
              <v-toolbar dark
                         color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email"
                                name="email"
                                label="Email"
                                type="text"></v-text-field>
                  <v-text-field v-model="password"
                                name="password"
                                label="Password"
                                type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="register"
                       color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
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
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>

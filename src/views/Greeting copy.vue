<template>
 <section>
   <greeting-card />
   <h2>Это простой проект на Vue.</h2>

   <form
     @submit.prevent="submitUsername"
     ref="form"
   >
     <label for="username">
       Введите своё имя:
     </label>
     <input
       v-model="username"
       id="username"
       name="username"
       type="text"
       placeholder="Иван Иванов"
     />
   </form>
   <h3>Варианты приветствий:</h3>
   <div class="greeting-list-wrapper">
    <greeting-list :greetings="greetings" />
   </div>
</section>
</template>
<h3>Варианты приветствий:</h3>
<script>
import GreetingCard from '@/components/GreetingCard'
export default {
  name: 'Greeting',
  components: {
    GreetingCard
  },
  data: () => ({
    username: '',
    savedUsername: '',
    greetings: [
      { id: 1, text: 'Привет' },
      { id: 2, text: 'Hello' },
      { id: 3, text: 'Hola' }
    ]
  }),
  methods: {
    submitUsername () {
      localStorage.setItem('username', this.username)
      this.savedUsername = this.username
      this.$refs.form.reset()
    }
  },
  created () {
    if (localStorage.getItem('username')) {
      this.savedUsername = localStorage.getItem('username')
      this.username = this.savedUsername
    }
  }
}
</script>

<style>
.greeting-list-wrapper {
 display: flex;
}
.greeting-list-wrapper .greeting-list {
 margin: auto
}
</style>

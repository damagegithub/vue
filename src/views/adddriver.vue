<template>
    <form @submit.prevent="submitUsername">
      <tr>
       <th>
         Введите своё first_name:
       </th>
       <th>
         Введите своё last_name:
       </th>
        <th>
        </th>
      </tr>
      <tr>
        <td>
     <input
       v-model="driver.first_name"
       type="text"
       placeholder="---"
     />
          </td>
        <td>

     <input
     v-model="driver.last_name"
     type="text"
     placeholder="---"
   />
        </td>
          <td>
        <input type="button" value="submit" @click="addstudent">
        </td>
      </tr>
    </form>
</template>

<script>
export default {
  name: 'drivers',
  data: () => ({
    driver: {
      first_name: 'name1',
      last_name: 'name2'
    }
  }),
  methods: {
    addstudent () {
      this.axios.post('http://127.0.0.1:8000/car/driver/', this.driver)
    }
  }
}
</script>

<style scoped>

</style>

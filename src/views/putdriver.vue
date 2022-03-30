<template>
    <form @submit.prevent="submitUsername">
<!--             <th>-->
<!--         Введите своё id:-->
<!--       </th>-->
<!--      <td>-->
<!--          <input type="button" value="getstudent" @click="getone" >-->
<!--        </td>-->
      <tr>
        <th>
          Введите своё id:
        </th>
       <th>
         Введите своё firstname:
       </th>
       <th>
         Введите своё lastname:
       </th>
      <tr>
        <td>
           <input type="int"  placeholder="введите id" v-model="id">
        </td>
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

        <input type="button" value="put" @click="put" >
      </tr>
    </form>
</template>

<script>
export default {
  name: 'drivers',
  data: () => ({
    id: 0,
    driver: {
      first_name: 'name1',
      last_name: 'name2'
    }

  }),
  methods: {
    put () {
      this.axios.put('http://127.0.0.1:8000/car/driver/' + this.id + '/', this.driver)
    }
  }
}
</script>

<style scoped>

</style>

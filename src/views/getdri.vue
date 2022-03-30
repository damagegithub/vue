<template>
       <section>
           <tr>
            <input type="int"  placeholder="введите id" v-model="id">
            <input type="button" value="get" @click="getone" >
           </tr>
           <tabel>
             <thead>
              <tr>
                  <th>id</th>
                  <th>firstname</th>
                  <th>lastname</th>
              </tr>
              <tr>
                  <td>{{driver.id}}</td>
                  <td>{{driver.first_name}}</td>
                  <td>{{driver.last_name}}</td>
              </tr>
<!--            <input type="int" name="id_group" placeholder="введите id" v-model="id">-->
<!--            <input type="button" value="getstudent" @click="getone" >-->
              <input type="button" value="delete" @click="del" >
             </thead>
           </tabel>
       </section>
</template>
<script>
export default {
  data: () => ({
    driver: {},
    id: 0
  }),
  methods: {
    getone () {
      this.axios.get('http://127.0.0.1:8000/car/driver/' + this.id + '/').then(response => {
        if (response.status !== 200) {
          throw new Error(response.error)
        }
        this.driver = response.data
      })
    },
    del () {
      this.axios.delete('http://127.0.0.1:8000/car/driver/' + this.id + '/')
    }
  }
}
</script>

<style>
</style>

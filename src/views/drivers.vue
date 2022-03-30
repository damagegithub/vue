<template>
       <section>
          <table>
              <tr>
                  <th>id</th>
                  <th>firstname</th>
                  <th>lastname</th>
<!--                  <th>birthday</th>-->
              </tr>
              <tr v-for="d in drivers" :key="d.id">
                  <td>{{d.id}}</td>
                  <td>{{d.first_name}}</td>
                  <td>{{d.last_name}}</td>
<!--                  <td>{{d.birthday}}</td>-->
              </tr>
          </table>
       </section>
</template>
<script>
export default {
  data: () => ({
    drivers: []
  }),
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.axios.get('http://127.0.0.1:8000/two_app/driver/').then(response => {
        if (response.status !== 200) {
          throw new Error(response.error)
        }
        this.drivers = response.data
        // console.log(response.data)
      })
    }
  }
}
</script>

<style>
</style>

var app = new Vue({
  el: "#app",
  data: {
    firstName: "",
    lastName: ""
  },
  computed: {
    fullname: function () {
      return this.firstName + '' +this.lastName
    }
  }

})
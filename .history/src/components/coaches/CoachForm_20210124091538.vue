<template>
  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstname" />
    </div>

    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastname" />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>

    <div class="form-control">
      <label for="rate">Rate</label>
      <input type="number" id="rate" v-model.number="rate" />
    </div>

    <div class="form-control">
      <h3>Areas of expertise</h3>
      <div>
        <input type="checkbox" id="frontend" checked v-model="areas" @change="setFilter" />
        <label for="frontend">Frontend developement</label>
      </div>
      <div>
        <input type="checkbox" id="backend" checked @change="setFilter" />
        <label for="backend">Backend development</label>
      </div>
      <div>
        <input type="checkbox" id="career" checked @change="setFilter" />
        <label for="career">Career advisory</label>
      </div>

      <base-button>Register</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      description: '',
      rate: '',
      area: []
    };
  }
};
</script>

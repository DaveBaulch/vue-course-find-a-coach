<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstname.val" />
    </div>

    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastname.val" />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
      ></textarea>
    </div>

    <div class="form-control">
      <label for="rate">Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" />
    </div>

    <div class="form-control">
      <h3>Areas of expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
        />
        <label for="frontend">Frontend developement</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
        />
        <label for="backend">Backend development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" />
        <label for="career">Career advisory</label>
      </div>

      <base-button>Register</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emit: ['save-data'],
  data() {
    return {
      firstname: {
        val: '',
        isValid: true
      },
      lastname: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.firstname.val === '') {
        this.firstname.isValid = false;
        this.formisValid = false;
      }
      if (this.lastname.val === '') {
        this.lastname.isValid = false;
        this.formisValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formisValid = false;
      }
      if (this.rate.val === '') {
        this.ra.isValid = false;
        this.formisValid = false;
      }      
    },
    submitForm() {
      validateForm();

      const formData = {
        first: this.firstname.val,
        last: this.lastname.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val
      };
      console.log(formData);
      this.$emit('save-data', formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

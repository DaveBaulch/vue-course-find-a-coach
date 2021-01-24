<template>
  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" />
    </div>

    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea type="text" id="description" rows="5"></textarea>
    </div>

    <div class="form-control">
      <label for="rate">Rate</label>
      <input type="number" id="rate" />
    </div>

    <div class="form-control">
      <h3>Areas of expertise</h3>
      <div class="filter-option">
        <input type="checkbox" id="frontend" checked @change="setFilter" />
        <label for="frontend">Frontend developement</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="backend" checked @change="setFilter" />
        <label for="backend">Backend development</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="career" checked @change="setFilter" />
        <label for="career">Caree development</label>
      </div>
    </div>
  </form>
</template>

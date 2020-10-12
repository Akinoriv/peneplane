<template>
  <div class="container">
    <div>

      <Header />

      <div class="catalog">

        <div class="catalog__box">
          <div class="catalog-rent">Rent</div>
          <div class="catalog-whatever">whatever</div>
          <img class="catalog-img-select" src="~/assets/img/Victor.png">
        </div>

        <div class="catalog__box">
          <div class="catalog-add-new">Add new</div>
          <button class="catalog-button" > <img class="catalog-img-plus" src="~/assets/img/Vector.png"> </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">

.catalog {
  padding: 56px;
  height: 48px;
  border-radius: 48px;
  background: #F3F4F7;
  // position: absolute;
  // width: 1312px;
  // height: 952px;
  display: flex;
  justify-content: space-between;
  .catalog__box {
    display: flex;
    align-content: center;
    justify-content: space-between;
    }
    .catalog-rent {
      font-family: '1';
      color: #012345;
      font-size: 40px;
  line-height: 120%;
    }
    .catalog-whatever {
      font-family: '1';
      color: #4959FF;
      font-size: 40px;
    }
    .catalog-img-select {
      height: 8px;
      padding: 20px;
      }


    .catalog-add-new {
      padding: 14px;
      font-size: 20px;
      font-family: '2';
      color: #4959FF;
    }
    .catalog-button {
      background: #4959FF;
      border: 0px;
      border-radius: 25%;
      height: 48px;
      width: 48px;
      .catalog-img-plus {
        height: 14px;
     }
}
}

</style>

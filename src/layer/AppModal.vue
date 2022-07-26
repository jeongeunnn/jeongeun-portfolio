<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modal }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <AppContact/>
      </div>
    </div>
  </div>
</template>

<script>
  import AppContact from '../components/AppContact';

  export default {
    name: 'AppModal',
    props: {
      modal: String
    },
    components: {
      AppContact
    }
  }
</script>

<style lang="scss" scoped>

</style>
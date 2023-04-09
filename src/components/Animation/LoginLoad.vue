<template>
  <!--  NO BORDER SPINNER  -->
  <div>
    <div class="nb-spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* NO BORDER SPINNER */
.nb-spinner {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background: transparent;
  border-top: 4px solid #08c;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

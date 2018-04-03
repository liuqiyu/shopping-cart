<template>
  <div class="layout">
    <IHeader></IHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import IHeader from '../../components/iTopbar';

export default {
  name: 'index',
  components: {
    IHeader,
  },
};
</script>

<style scoped>

</style>

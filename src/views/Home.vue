<template>
  <div class="home">
      <OrderButton/>

  </div>
</template>

<script>
import OrderButton from '@/components/OrderButton'
export default {
  name: 'home',
  components: {
    OrderButton
  },
  computed:{
    data: function toggleButton(el) {
    var body = document.body;
    var element = document.querySelector(el);
    element.addEventListener('mouseenter', function(e) {
        e.target.classList.add('active');
      body.classList.add('blur');
    }, false);
    element.addEventListener('mouseleave', function(e) {
      e.target.classList.remove('active');
      body.classList.remove('blur');
    }, false);
  }
  
  }
}
</script>
<style lang="css" scoped>
  
</style>

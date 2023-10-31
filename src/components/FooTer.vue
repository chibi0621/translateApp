<template>
  <footer class="footerBox fixed-bottom">
    <div class="text-center">
      <img class="footerLogo" src="@/assets/img/catLogo.png" alt="">
    </div>
    <p class="text-center">Copyright <span class="blue">©</span>
    2023 <span class="blue">Chibi</span>. All rights reserved.
    </p>
  </footer>
</template>

<script>
import '@/assets/components/footer.scss';

export default {
  created() {
    console.log('footer is loading successful!');
  },
};
</script>

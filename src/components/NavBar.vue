<template>
  <nav class="navBox justify-content-center fixed-top">
    <ul class="navUl justify-content-between">
      <li class="nav-item">
        <a class="link" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="link" href="#/signup">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="link" href="#/login">Log In</a>
      </li>
      <li class="nav-item">
        <a class="link" href="#/question">Question</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import '@/assets/components/navbar.scss';

export default {
  created() {
    console.log('navbar is loading successful!');
  },
};
</script>

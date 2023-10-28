<template>
  <nav class="navBox justify-content-center fixed-top">
    <ul class="navUl justify-content-between">
      <li class="nav-item">
        <a class="nav-link link" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link" href="#/note">Note</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link" href="#/login">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link" href="#/question">Question</a>
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

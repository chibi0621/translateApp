<template>
  <nav class="navbar justify-content-center fixed-top">
    <ul class="nav justify-content-between">
      <li class="nav-item">
        <a class="nav-link link" aria-current="page" href="#">首頁</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link" href="#/note">筆記</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link" href="#/login">登入</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link" href="#/question">問題回報</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import '@/assets/components/navbar.scss';

export default {
  created() {
    console.log('hello world');
  },
};
</script>

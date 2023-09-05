<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <h1 class="title">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#89c3eb"
      class="bi bi-bookmark-fill mb-1" viewBox="0 0 16 16">
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0
        0 0-2-2H4a2 2 0 0 0-2 2z"/>
      </svg>
      已儲存的筆記
    </h1>
    <ol class="list-group list-group-numbered list-group-item-light p-3">
      <li class="list-group-item">
        dog 狗
        <div class="text-end">
          <button class="btn dashBtn"><i class="bi bi-dash"></i></button>
        </div>
      </li>
      <li class="list-group-item">
        god 神
        <div class="text-end">
          <button class="btn dashBtn"><i class="bi bi-dash"></i></button>
        </div>
      </li>
      <li class="list-group-item">
        learn 學習
        <div class="text-end">
          <button class="btn dashBtn"><i class="bi bi-dash"></i></button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import '@/assets/notes.scss';

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <main class="flexBox">
      <svg class="mt-5" width="900" height="200">
        <text x="50%" y="50%" fill="black" class="logo">Vocabulary Learning</text>
      </svg>
      <img class="picture" src="../assets/img/LEARNING5.png" alt="...">
      <input v-model="englishWord" @keyup.enter="translate"
      placeholder="Enter an English word" class="input"/>
      <div class="box">
        <p class="textEng">{{ englishWord }}</p>
        <p class="text">{{ chineseTranslation }}</p>
      </div>
      <button class="btn addBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000"
        class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0
          0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
      </button>
    </main>
    <footer class="footerBox">
      <div class="text-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#4491c5"
        class="bi bi-cloud-fill" viewBox="0 0 16 16">
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804
          16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-
          1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
        </svg>
      </div>
      <p class="text-center">Copyright <span class="blue">©</span>
        2023 <span class="blue">Chibi</span>. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import '@/assets/home.scss';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      englishWord: '',
      chineseTranslation: '',
    };
  },
  methods: {
    async translate() {
      try {
        const response = await axios.get(`http://localhost:2000/api/translate/${this.englishWord}`);
        this.chineseTranslation = response.data.translation;
      } catch (error) {
        console.error('Error:', error.message);
        this.chineseTranslation = '翻譯失敗';
      }
    },
  },
};
</script>

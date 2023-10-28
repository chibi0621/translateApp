<template>
  <div class="containerBox">
    <NavBar></NavBar>
    <main class="flexBox">
      <svg width="900" height="100">
        <text x="50%" y="50%" fill="black" class="logo">Vocabulary Learning</text>
      </svg>
      <img class="picture" src="@/assets/img/LEARNING.png" alt="...">
      <input v-model="englishWord" @keyup.enter="translate"
      placeholder="Enter an English word" class="input"/>
      <div class="box">
        <p class="textEng">{{ englishWord }}</p>
        <p class="text">{{ chineseTranslation }}</p>
      </div>
      <button class="addBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000"
        class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0
          0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
        <span class="addNote">加到筆記</span>
      </button>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooTer.vue';
import '@/assets/home.scss';

export default {
  components: {
    NavBar, Footer,
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
        const response = await axios.get(`http://localhost:9000/api/translate/${this.englishWord}`);
        this.chineseTranslation = response.data.translation;
      } catch (error) {
        console.error('Error:', error.message);
        this.chineseTranslation = '翻譯失敗';
      }
    },
  },
  created() {
    console.log('hello world');
  },
};
</script>

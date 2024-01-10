<template>
  <div class="containerBox">
    <NavBar></NavBar>
    <main class="flexBox">
      <svg width="900" height="70">
        <text x="50%" y="50%" fill="black" class="logo">Vocabulary Learning</text>
      </svg>
      <img class="picture" src="@/assets/img/LEARNING.png" alt="...">
      <input v-model="englishWord" @keyup.enter="translate"
       placeholder="Enter an English word" class="input"/>
      <button type="button" class="searchBtn" @click="translate">search</button>
      <div class="box">
        <p class="textEng">{{ englishWord }}</p>
        <p class="text">{{ chineseTranslation }}</p>
      </div>
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
        const response = await axios.post(`http://localhost:9000/api/translate/${this.englishWord}`);
        this.chineseTranslation = response.data.translation;
      } catch (error) {
        console.error('Error:', error.message);
        this.chineseTranslation = '翻譯失敗';
      }
    },
    addToNote() {
    },
  },
  created() {
    console.log('hello world');
  },
};
</script>

<template>

  <div class="container-fluid">
    <NavBar></NavBar>
    <form class="signupBox">
      <div class="signupBox">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#000"
          class="bi bi-person mb-1" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4
            8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1
            .664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.4
            18-.832 1.664h10Z"/>
          </svg>
        <h1 class="signupH1">
          註冊帳戶
        </h1>
        <input type="email" id="signupInputEmail" class="signupInput"
        placeholder="輸入電子郵件" requiredsudo
        aria-label="Input" />
        <input type="password" id="signupInputPassword" class="signupInput"
        placeholder="輸入密碼" required
        aria-label="Input" />
        <input type="password" id="checksignupInputPassword" class="signupInput"
        placeholder="再輸入一次密碼" required
        aria-label="Input" />
        <div class="checkBox d-flex justify-content-start">
          <input type="checkbox" class="form-check-input" id="signupFormCheck"
          aria-label="Check"/>
          <p>願意收到會員電子報</p>
        </div>
        <button class="signupBtn" type="submit">
          Sign up
        </button>
      </div>
      <div class="signupList">
        <ul class="d-flex justify-content-between m-0 p-0">
          <li>
            <a class="signupBoxLink" href="/">回首頁</a>
          </li>
          <li>
            ｜
          </li>
          <li>
            <a class="signupBoxLink" href="/login">已有帳號，要登入</a>
          </li>
          <li>
            ｜
          </li>
          <li>
            <a class="signupBoxLink" href="/question">問題回報</a>
          </li>
        </ul>
      </div>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooTer.vue';
import '@/assets/signup.scss';

export default {
  components: {
    NavBar, Footer,
  },
};
</script>

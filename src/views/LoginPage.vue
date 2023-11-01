<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <form class="loginBox">
      <div class="loginBox">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#89c3eb"
          class="bi bi-person mb-1" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4
            8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1
            .664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.4
            18-.832 1.664h10Z"/>
          </svg>
        <h1 class="loginH1">
          登入帳戶
        </h1>
        <input type="email" id="loginInputEmail" class="loginInput"
        placeholder="輸入電子郵件" requiredsudo
        aria-label="Input" />
        <input type="password" id="loginInputPassword" class="loginInput"
        placeholder="輸入密碼" required
        aria-label="Input" />
        <div class="checkBox d-flex justify-content-start">
          <input type="checkbox" class="form-check-input" id="loginFormCheck"
          aria-label="Check"/>
          <p>記住我</p>
        </div>
        <button class="loginBtn" type="submit">
          Log in
        </button>
      </div>
      <div class="loginList">
        <ul class="d-flex justify-content-between m-0 p-0">
          <li>
            <a class="loginBoxLink" href="">忘記帳號</a>
          </li>
          <li>
            ｜
          </li>
          <li>
            <a class="loginBoxLink" href="">忘記密碼</a>
          </li>
          <li>
            ｜
          </li>
          <li>
            <a class="loginBoxLink" href="">其他問題</a>
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
import '@/assets/login.scss';

export default {
  components: {
    NavBar, Footer,
  },
};
</script>

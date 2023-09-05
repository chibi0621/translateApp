<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <form class="loginBox mt-5">
      <div class="loginBox mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#89c3eb"
          class="bi bi-person mb-1" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4
            8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1
            .664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.4
            18-.832 1.664h10Z"/>
          </svg>
        <h1 class="login mb-5">
          登入帳戶
        </h1>
        <input type="email" id="inputEmail" class="form-control loginInput"
        placeholder="輸入電子郵件" requiredsudo
        aria-label="Input" />
        <input type="password" id="inputPassword" class="form-control loginInput"
        placeholder="輸入密碼" required
        aria-label="Input" />
        <div class="d-flex justify-content-start mb-5">
          <input type="checkbox" class="form-check-input me-1" id="exampleCheck1"
          aria-label="Check"/>
          <p class="mt-1">記住我</p>
        </div>
        <button class="btn btn-lg btn-block rounded-pill loginBtn ms-2" type="submit">
          Login
        </button>
      </div>
      <div class="list ms-1">
        <ul class="d-flex justify-content-between m-0">
          <li class="listLi">
            <a class="boxLink" href="">忘記帳號</a>
          </li>
          <li>
            ｜
          </li>
          <li class="listLi">
            <a class="boxLink" href="">忘記密碼</a>
          </li>
          <li>
            ｜
          </li>
          <li class="listLi">
            <a class="boxLink" href="">其他問題</a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import '@/assets/login.scss';

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <div class="my-5 row justify-content-center">
      <div class="col-7 mt-5">
        <h2 class="mb-5 contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#89c3eb"
          class="bi bi-envelope mb-1" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm
            2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11
            .105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h1
            2a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          聯絡我們
        </h2>
        <div class="mb-4">
          <h3>電郵信箱</h3>
          <input type="email" class="form-control questionInput" id="exampleFormControlInput1"
          placeholder="name@example.com" aria-label="Label"/>
        </div>
        <div class="mb-4">
          <h3>聯絡方式</h3>
          <input type="number" class="form-control questionInput" id="exampleFormControlInput2"
          placeholder="09XX-XXX-XXX" aria-label="Label"/>
        </div>
        <div class="mb-4">
          <h3>問題類型</h3>
          <select class="form-select questionInput" aria-label="Select">
            <option selected>點開看選項</option>
            <option value="1">帳號問題</option>
            <option value="2">介面相關問題</option>
            <option value="3">翻譯相關問題</option>
            <option value="4">使用建議、回饋</option>
            <option value="5">其他問題</option>
          </select>
        </div>
        <div class="mb-4">
          <h3>上傳截圖</h3>
          <input class="form-control questionInput" type="file" id="formFile" aria-label="Select"/>
        </div>
        <div class="mb-4">
          <h3>問題描述</h3>
          <textarea class="form-control questionInput" id="exampleFormControlTextarea1"
          rows="5" aria-label="Label"></textarea>
        </div>
        <div class="text-end">
          <button class="btn rounded-pill submit" type="submit">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import '@/assets/question.scss';

export default {
  components: {
    NavBar,
  },
};
</script>

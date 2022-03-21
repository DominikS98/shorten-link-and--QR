<template>
  <div>
    <form @submit.prevent="cutLink">
      <label for="link"
        >Link do skrócenia:
        <input
          class="input-text"
          v-model="httpBody.long_url"
          type="text"
          id="link"
        />
      </label>
      <label for="link"
        >Czy wygenerować kod QR:
        <input
          class="input-chek"
          v-model="httpBody.include_qr_code"
          type="checkbox"
          name="qr"
      /></label>
      <button type="submit">skróć</button>
    </form>

    <section v-if="toggleBox">
      <the-qr
        :short_url="this.link.short_url"
        :qr_url="this.link.qr_url"
        :qr_data="this.link.qr_data"
      >
      </the-qr>
    </section>
  </div>
</template>
<script>
import TheQr from "./TheQr";
export default {
  components: {
    TheQr,
  },
  data() {
    return {
      httpBody: {
        long_url: "",
        include_qr_code: false,
      },
      toggleBox: false,
      link: {
        short_url: "",
        qr_url: "",
        qr_data: "",
      },
    };
  },
  methods: {
    cutLink() {
      this.$store.dispatch("createShortLink", this.httpBody);
      this.toggleBox = true;
      this.cosLink();
    },
    cosLink() {
      this.link = this.$store.getters.returnLink;
    },
  },
};
</script>
<style scoped>
div {
  margin: 1rem auto;
}
form {
  padding: 50px 0px;
  width: 50%;
  margin: 0rem auto;
  box-shadow: 2px 2px 20px 13px rgba(81, 43, 221, 0.137);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
label {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 24px;
}
input[type="checkbox"] {
  margin: 1rem;
  width: 25px;
  height: 25px;
}
.input-text {
  padding: 5px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.301);
  outline: none;
  font-size: 24px;
}
button {
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  transition: 0.5s;
  width: 20%;
}
button:hover {
  background: rgba(81, 70, 231, 0.527);
}
@media screen and (max-width: 768px) {
  div {
    margin: 0;
  }
  form {
    margin: 0;
    width: 100%;
  }
  .input-text {
    font-size: 15px;
  }
  label {
    font-size: 18px;
  }
}
</style>

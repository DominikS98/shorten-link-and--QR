<template>
  <div class="home">
    <h1>Witaj na stronie</h1>
    <dialog open class="modal" v-if="title">
      <h2>Temat strony</h2>
      <p>
        Na stronie możesz skrócić link oraz wygenerować Qr kod do linku a także
        pobrać link do Qr kodu
      </p>
      <button id="close" @click="close">ukryj</button>
    </dialog>
    <button id="open" @click="open">wiecej</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: false,
    };
  },
  methods: {
    close() {
      this.title = false;
    },
    open() {
      this.title = true;
    },
  },
};
</script>

<style scoped>
.home {
  margin: 2rem auto;
  width: 40%;
  box-shadow: 2px 2px 20px 13px rgba(81, 43, 221, 0.137);
  padding: 2rem;
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.home h1 {
  font-size: 10ch;
}
.modal {
  max-width: 50ch;
  padding: 2rem;
  margin: auto;
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
dialog p {
  margin: 1rem;
}
@media screen and (max-width: 768px) {
  .home {
    margin: 2rem 0;
    width: 100%;
    padding: 2rem 0rem;
  }
  .home h1 {
    font-size: 5ch;
  }
}
</style>

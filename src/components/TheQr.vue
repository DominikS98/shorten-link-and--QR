<template>
  <div>
    <section>
      <p>Skrócony url: {{ short_url }}</p>
      <p>Link do kodu Qr:</p>
      <p>{{ qr_url }}</p>
    </section>
    <section>
      <img :src="qr_data" />
    </section>
  </div>
</template>
<script>
export default {
  props: ["short_url", "qr_url", "qr_data"],
};
</script>

<style scoped>
div {
  padding: 50px;
  margin: 3rem auto;
  box-shadow: 2px 2px 20px 13px rgba(81, 43, 221, 0.137);
  width: 30%;
  height: 30%;
}
section {
  display: flex;
  flex-flow: column;
  margin: 0.5rem 0;
}
p {
  margin: 10px 20px;
  font-size: 24px;
}
img {
  margin: 0 auto;
  width: 200px;
  height: 200px;
}
</style>

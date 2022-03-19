import { createStore } from 'vuex'

export default createStore({
  state: {
    link: {
      short_url: " ",
      qr_url: " ",
      qr_data: " ",
    }

  },
  getters: {
    returnLink(state) {
      return state.link;
    }
  },
  mutations: {
    createShortLink(state, data) {
      data.then(item => {
        state.link.short_url = item.short_url;
        if (item.qr_code) {
          state.link.qr_url = item.qr_code.qr_code_url;
          state.link.qr_data = item.qr_code.qr_code_base64;
        }
      });
    }
  },
  actions: {
    async createShortLink({ commit }, payload) {
      let body = {
        long_url: payload.long_url,
        include_qr_code: payload.include_qr_code,
        api_token: 'RmcjAqv6NHUEsWL845LhpuSgycCjuN2Ok2PQxPg9TZbStkbSQJb4kCoX5nPM'
      }
      const url = new URL(
        "https://t.ly/api/v1/link/shorten"
      )

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json", },
        body: JSON.stringify(body),
      }).then(response => {
        commit("createShortLink", response.json());
        // dispatch('FindLink', response.url)
      }).catch((er) => console.log(er));
    },

    FindLink(_, payload) {
      const url = new URL(
        `https://t.ly/api/v1/link?api_token=RmcjAqv6NHUEsWL845LhpuSgycCjuN2Ok2PQxPg9TZbStkbSQJb4kCoX5nPM&short_url=${payload}`
      )
      fetch(url, {
        headers: { "Content-Type": "application/json", "Accept": "application/json", },
      }).then(response => {
        response.json();
        // console.log(response)
      }).catch((er) => console.log(er));
    }


  },

})

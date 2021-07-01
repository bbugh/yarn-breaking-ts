import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'

const I18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: {
    en: {
      hello: "Hello world",
      tos: "vue-i18n-next docs",
      term: "access to {0}",
    },
  },
});

createApp(App).use(I18n).mount("#app");

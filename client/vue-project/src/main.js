import { createApp } from "vue";
import App from "./App.vue";
import UIComponents from "./components/UI/ui.components";

app = createApp(App);

UIComponents.forEach((item) => {
  app.component(item.name, item);
});

app.mount("#app");

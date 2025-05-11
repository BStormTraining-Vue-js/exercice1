import { createApp } from "vue";
import App from "./App.vue";
import './style.css';
import PrimeVue from "primevue/config";
import Nora from "@primeuix/themes/nora";
import { ConfirmationService } from "primevue";

createApp(App)
    .use(
        PrimeVue, {
            theme: {
                preset: Nora
            },
        }
    ).use(ConfirmationService)
    .mount('#app');

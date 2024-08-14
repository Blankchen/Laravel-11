import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */
const vm = createApp({
    data() {
        return {
            // menu
            isCollapse: false,
        }
    },
    methods: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
});
vm.use(ElementPlus);
const vMountedInstance = vm.mount("#hibride");

window.vMountedInstance = vMountedInstance


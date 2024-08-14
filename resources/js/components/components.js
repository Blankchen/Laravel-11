// ref: https://zerotomastery.io/blog/how-to-auto-register-components-for-vue-with-vite/
const debug = true

const importComponents = import.meta.glob("./**/*.vue",{ eager: true });
export const registerComponents = async (app) => {
    debug && console.log('importComponents: ', importComponents)

    Object.entries(importComponents).forEach(([fileName, componentConfig]) => {
        const componentName = fileName
        .split("/")
        .pop()
        ?.replace(/\.\w+$/, "");

    debug && console.log('registerComponents: ', componentName)
    app.component(componentName, componentConfig?.default);
    })
};



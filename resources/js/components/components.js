// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build
// This dynamic component will broken after build


// ref: https://dev.to/jirehnimes/how-to-register-global-components-in-vue-3-dynamically-in-2023-1d50
const debug = true
const importComponents = import.meta.glob("./**/*.vue");
debug && console.log('importComponents: ', importComponents)

export const registerComponents = async (app) => {
    for (const fileName of Object.keys(importComponents)) {
        const componentConfig = await importComponents[fileName]();
        const componentName = fileName
            .split("/")
            .pop()
            ?.replace(/\.\w+$/, "");

        debug && console.log('registerComponents: ', componentName)
        app.component(componentName, componentConfig?.default);
    }
};

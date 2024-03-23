import { render } from "./React.js"
const ReactElement = {
    createRoot(container) {
        return {
            render(vnode) {
                render(vnode, container)
            }
        }
    },

}

export default ReactElement
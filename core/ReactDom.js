import { render } from "./React"
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
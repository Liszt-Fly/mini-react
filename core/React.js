function createTextElement(text) {
    const textNode = {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
    return textNode
}


function createElement(type, props, ...children) {
    const vnode = {
        type,
        props: {
            ...props,
            children: children.map(item => typeof item === "string" ? createTextElement(item) : children)
        }
    }
    return vnode
}


export function render(vnode, container) {
    const dom = vnode.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(vnode.type)

    Object.keys(vnode.props).forEach(key => {
        if (key != "children") {
            dom[key] = vnode.props[key]
        }
    })
    vnode.props.children.forEach(child => {
        render(child, dom)
    })
    container.append(dom)
}
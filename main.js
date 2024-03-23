import ReactDom from "./core/ReactDom.js"
const App = createElement("div", { id: "app" }, "hi-", "mini-react")


ReactDom.createRoot(document.querySelector("#root")).render(App)
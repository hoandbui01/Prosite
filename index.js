import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { upperFirst } from "lodash";


const router = new Navigo(window.location.origin);
router
    .on({
    ":view": (params) => render(state[upperFirst(params.view)]),
    "/": () => render(state.Home),
    })
    .resolve();

function render(st = state.Home) {
    console.log("render", st);
    document.querySelector("#root").innerHTML = ` 
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
    router.updatePageLinks();
};
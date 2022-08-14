import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const DayButton = defineComponent({
  name: "DayButton",
  render() {
    return h("button", null, "DayButton");
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(DayButton.name, DayButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  DayButton,
  JSXButton,
  SFCButton,
  entry as default
};
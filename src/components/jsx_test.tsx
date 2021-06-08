import { defineComponent } from "@vue/runtime-core";

defineComponent({
  render() {
    return <div>{true ? "v1" : "v2"}</div>;
  },
});

defineComponent({
  render() {
    let ifText: JSX.Element;
    if (true) {
      ifText = <p>你帅</p>;
    } else {
      ifText = <p>你丑</p>;
    }
    return <div>{ifText}</div>;
  },
});

const TSX_vfor = defineComponent({
  data() {
    return {
      show: false,
      list: [1, 2, 3, 4],
    };
  },
  render() {
    return (
      <div>
        {this.list.map((v) => {
          return <p>{v}</p>;
        })}
      </div>
    );
  },
});

const TSX_vmodel = defineComponent({
  data() {
    return {
      show: false,
      list: [1, 2, 3, 4],
      text: "",
    };
  },
  methods: {
    input(e) {
      this.text = e.target.value;
    },
  },
  render() {
    return (
      <div>
        <input type="text" value={this.text} onInput={this.input} />
        <p>{this.text}</p>
      </div>
    );
  },
});

defineComponent({
  render() {
    return (
      <div
        // normal attributes or component props.
        id="foo"
        // DOM properties are prefixed with `domProps`
        // domPropsInnerHTML="bar"
        // event listeners are prefixed with `on` or `nativeOn`
        onClick={this.clickHandler}
        // nativeOnClick={this.nativeClickHandler}
        // other special top-level properties
        class={{ foo: true, bar: false }}
        style={{ color: "red", fontSize: "14px" }}
        key="key"
        ref="ref"
        // assign the `ref` is used on elements/components with v-for
        // refInFor
        // slot="slot"
      ></div>
    );
  },
});

export default TSX_vfor;
// export default TSX_vmodel;

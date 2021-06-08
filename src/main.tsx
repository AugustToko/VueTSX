import { createApp, defineComponent, ref } from "vue";
import Test from "./components/demo";
import Test2 from "./components/demo2";
import ActionBar from "./components/action_bar";
import "./index.css";
import TSX_vfor from "./components/jsx_test";

const App = defineComponent({
  setup() {
    const data1 = ref("请输入值");
    const data2 = ref("请输入值");

    return () => (
      <div>
        <Test site="asdasdasd"></Test>
        <h1>----------------------------------------</h1>
        <Test2
          myevent={() => {
            console.log("OH");
          }}
          buttonName="BUTTON"
        ></Test2>
        <h1>----------------------------------------</h1>
        <ActionBar
          enableSearch1={true}
          enableSearch2={true}
          onTextChanged1={(text: string) => {
            data1.value = text;
          }}
          onTextChanged2={(text: string) => {
            data2.value = text;
          }}
          child={() => {
            // return <Input></Input>;
            return <h1>child view</h1>;
          }}
          customSearchButton={() => {
            return (
              <button
                onClick={() => {
                  alert(data1.value + "\n" + data2.value);
                }}
              >
                搜索
              </button>
            );
          }}
        ></ActionBar>
        <h1>----------------------------------------</h1>
        <TSX_vfor></TSX_vfor>
      </div>
    );
  },
});

createApp(App).mount("#app");

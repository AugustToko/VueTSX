import { defineComponent } from "@vue/runtime-core";
import Input from "./input";

// interface ActionBarConfig {
//   enableSearch1: Boolean;
//   enableSearch2: ()=>void;
// }

const A = (_props, { slots }) => (
  <div>
    {slots.search1?.()}
    {slots.search2?.()}
    {slots.search3?.()}
  </div>
);

// const B = {
//   render() {
//     return <h1>dynamic view</h1>;
//   },
// };

const ActionBar = defineComponent({
  props: {
    enableSearch1: Boolean,
    enableSearch2: Boolean,
    onTextChanged1: Function,
    onTextChanged2: Function,
    child: Function,
    onSearch: Function,
    customSearchButton: Function,
  },
  setup({
    enableSearch1,
    enableSearch2,
    child,
    customSearchButton,
    onTextChanged1,
    onTextChanged2,
    onSearch,
  }) {
    const slots = {
      search1: () => {
        if (enableSearch1) {
          return <Input value="请输入值" onEvent={onTextChanged1}></Input>;
        }
      },
      search2: () => {
        if (enableSearch2) {
          return <Input value="请输入值" onEvent={onTextChanged2}></Input>;
        }
      },
    };

    // 添加组件
    // Map
    slots["search3"] = () => {
      return <h1>TEST slots</h1>;
    };

    return () => (
      <>
        {child()}
        {/* Slots */}
        <A>{slots}</A>
        <div>
          {() => {
            return <h1>TEST</h1>;
          }}
        </div>
        {/* Function (()=>{})() */}
        {(() => {
          if (customSearchButton) {
            return customSearchButton();
          } else {
            <button
              onClick={() => {
                onSearch();
              }}
            >
              搜索
            </button>;
          }
        })()}
      </>
    );

    // return () => (
    //   <div>
    //     <Input
    //       value="请输入值"
    //       onEvent={(data: string) => {
    //         data1.value = data;
    //       }}
    //     ></Input>
    //     <Input
    //       value="请输入值"
    //       onEvent={(data: string) => {
    //         data2.value = data;
    //       }}
    //     ></Input>
    //     <button
    //       onClick={() => {
    //         alert(data1.value + "\n" + data2.value);
    //       }}
    //     >
    //       搜索
    //     </button>
    //   </div>
    // );
  },
});

export default ActionBar;

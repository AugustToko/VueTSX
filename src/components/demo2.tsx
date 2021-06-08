import { defineComponent, ref, useContext } from "vue";

// interface TestProps {
//   value: string;
//   event: Function;
// }

const Test2 = defineComponent({
  props: {
    buttonName: String,
    myevent: Function,
  },
  setup({ buttonName, myevent }) {
    return () => (
      <div>
        <button
          //   onClick={() => {
          //     console.log("asdasd");
          //   }}
          onClick={(data) => {
            myevent();
          }}
        >
          {buttonName}
        </button>
      </div>
    );
  },
});

export default Test2;

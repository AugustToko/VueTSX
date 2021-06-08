import { defineComponent, ref, useContext } from "vue";

const Test = defineComponent({
  props: {
    site: String,
  },
  setup({ site }) {
    const state = ref(0);
    const onClick = () => {
      state.value++;
      console.log(state.value);
      // context.emit('onGet', 'Mondo');
    };
    return () => (
      <div>
        <h1>props: {site}</h1>
        <h3>state: {state.value}</h3>
        <button onClick={onClick}>点击</button>
      </div>
    );
  },
});

export default Test;

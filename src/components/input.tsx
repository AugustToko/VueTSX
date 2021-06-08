import { defineComponent } from "vue";

// interface InputProps {
//   value: string;
//   onChange: NewType;
// }

const Input = defineComponent({
  props: {
    value: String,
    onEvent: Function,
  },
  setup({ value, onEvent }) {
    const handleChange = (eventData: Event) => {
      const event = eventData as InputEvent;
      //   console.log((event.target as HTMLButtonElement).value);
      //   console.log(onEvent);
      onEvent?.((event.target as HTMLButtonElement).value);
    };

    return () => <input value={value} onInput={handleChange} />;
  },
});

export default Input;

import { commonArgTypes } from "../../../common/common";
import Input from "~/components/DesignSystem/Elements/form/input/Input.vue";

const {
  backgroundColor,
  border,
  borderRight,
  borderTop,
  borderLeft,
  borderBottom,
  ...otherProps
} = commonArgTypes;

export default {
  title: "UiKit/Elements/Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    types: {
      description: "text, number, email, url, phone, search, password",
      control: { type: "select" },
      options: [
        "text",
        "number",
        "email",
        "url",
        "phone",
        "search",
        "password",
      ],
    },
    inputSize: {
      description: "Input text size",
      control: { type: "select" },
      options: ["small", "normal", "medium", "large"],
    },
    rounded: {
      control: "boolean",
      description: "Activa y desactiva los bordes redondeados",
    },
    disabled: {
      control: "boolean",
      description: "Activa y desactiva el componente",
    },
    readOnly: {
      control: "boolean",
    },
    placeholderText: {
      description: "Text for placeholder",
    },

    ...otherProps,
  },
};

export const MainInput = {
  args: {},
};

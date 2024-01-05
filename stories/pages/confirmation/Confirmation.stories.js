import Confirmation from "~/components/DesignSystem/pages/Confirmation/Confirmation.vue";

export default {
  title: "UiKit/Pages/Confirmation",
  component: Confirmation,
  tags: ["autodocs"],

  argTypes: {
    title: {
      description: "Edit text title of confirmation",
    },
    mainText: {
      description: "Show content text- boolean",
    },
    isCardBorder: {
      description: "radius",
    },
    isButton: {
      description: "Show button bottom- boolean",
    },
    textSubmit: {
      description: "Edit button text of confirmation.",
    },
    // disabled: {
    //   description: 'border radius - boolean',
    // },
  },
};
export const Default = {
  args: {},
};

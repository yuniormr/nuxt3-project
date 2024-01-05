import Telematic from "~/components/DesignSystem/pages/telematic/Telematic.vue";

export default {
  title: "UiKit/Pages/Telematic",
  component: Telematic,
  tags: ["autodocs"],

  argTypes: {
    title: {
      description: "Main title of the document",
    },
    textButton: {
      description: "Text button",
    },
    // disabled: {
    //   description: 'border radius - boolean',
    // },
  },
};
export const Default = {
  args: {},
};

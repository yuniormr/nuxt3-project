import { commonArgTypes } from "~/stories/common/common.ts";
import Loading from "~/components/DesignSystem/components/basic/loading/Loading.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Components/Basic/Loading",
  component: Loading,
  tags: ["autodocs"],

  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["spinner", "dots"],
      description: "Select the type of loading",
    },
    isDefaultText: {
      description: "Select the component text, only work in loading type",
    },
    textAlignment: {
      control: {
        type: "select",
      },
      options: ["left", "center", "right"],
      description: "Position of the text",
    },

    ...otherProps,
  },
};
export const Default = {
  args: {},
};

export const Dots = {
  args: {
    type: "dots",
  },
};

export const Text = {
  args: {
    isDefaultText: true,
  },
};

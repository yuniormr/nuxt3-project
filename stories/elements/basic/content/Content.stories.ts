import Content from "~/components/DesignSystem/Elements/basic/content/DsContent.vue";
import { commonArgTypes, commonArgText } from "~/stories/common/common";

const { backgroundColor, ...otherProps } = commonArgTypes;

export default {
  title: "UiKit/Elements/Basic/Content",
  component: Content,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "Example content text",
    },
    letter: {
      control: {
        type: "select",
      },
      options: ["roboto", "robotoSlab"],
      description: "Font style",
    },

    ...otherProps,
    ...commonArgText,
  },
};
export const Neutral = {
  args: {},
};

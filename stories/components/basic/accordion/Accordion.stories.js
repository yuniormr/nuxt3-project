import { commonArgTypes } from "~/stories/common/common.ts";
import Accordion from "~/components/DesignSystem/components/basic/accordion/DsAccordion.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Components/Basic/Accordion",
  component: Accordion,
  tags: ["autodocs"],

  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["standard", "card"],
      description: "Select the type of accordion",
    },
    triggerText: {
      description: "Text used instead  in the right corner",
    },
    collapseTitle: {
      description: "Text for the title",
    },
    children: {
      description: "Text for the content",
    },

    ...otherProps,
  },
};
export const Default = {
  args: {},
};
export const Card = {
  args: {
    collapseTitle: "¿A quién va dirigido?",
    type: "card",
  },
};

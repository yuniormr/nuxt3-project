import { commonArgTypes } from "~/stories/common/common";
import DsCard from "~/components/DesignSystem/components/basic/card/DsCard.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;

export default {
  title: "UiKit/Components/Basic/Card",
  component: DsCard,
  tags: ["autodocs"],

  argTypes: {
    isRadius: {
      description: "Border radius - boolean",
    },
    hasContentTop: {
      description: "Has content top - boolean",
    },
    topColor: {
      control: {
        type: "select",
      },
      options: ["primary", "dark"],
      description: "Content top color",
    },
    hasContentBottom: {
      description: "Has content bottom - boolean",
    },
    isTargetBlank: {
      control: "boolean",
      description: "Set link target to blank or self",
    },
    hasLineAwesome: {
      control: "boolean",
      description: "Set link icon",
    },
    hasTag: {
      control: "boolean",
      description: "Set tags for the card",
    },
    titleHasIcon: {
      control: "boolean",
      description: "Set an icon for the title",
    },

    ...otherProps,
  },
};

export const Default = {
  args: {},
};

export const NoTopContent = {
  args: {
    hasContentTop: false,
  },
};

export const NoBottomContent = {
  args: {
    hasContentBottom: false,
  },
};

export const NoTags = {
  args: {
    hasTag: false,
  },
};

export const TitleHasIcon = {
  args: {
    titleHasIcon: true,
  },
};

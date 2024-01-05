import { commonArgTypes } from "../../../common/common";
import Title from "~/components/DesignSystem/Elements/basic/title/DsTitle.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Basic/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Section title h1, h2, h3, h4, h5, h6",
      defaultValue: "h1",
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    text: {
      description: "text content",
      defaultValue: "Encabezado UiKit",
    },
    letter: {
      description: "Name font, Roboto, Roboto Slab ",
      defaultValue: "robotoSlab",
      control: {
        type: "select",
      },
      options: ["roboto", "robotoSlab"],
    },
    textColor: {
      control: {
        type: "select",
      },
      options: ["default", "primary"],
      description: "default, primary",
    },

    ...otherProps,
  },
};
export const H1 = {
  args: {},
};

export const H2 = {
  args: {
    type: "h2",
  },
};

export const H3 = {
  args: {
    type: "h3",
  },
};

export const H4 = {
  args: {
    type: "h4",
  },
};
export const Roboto = {
  args: {
    letter: "roboto",
  },
};
export const robotoSlab = {
  args: {
    letter: "robotoSlab",
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
import Icon from "~/components/DesignSystem/Elements/basic/icon/DsIcon.vue";
import { commonArgTypes } from "../../../common/common";

const { backgroundColor, ...otherProps } = commonArgTypes;

export default {
  title: "UiKit/Elements/Basic/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    awesomeText: {
      description: "Paste the icon font tag from lineawesome",
    },
    // iconColor: {
    //   description: 'dark, primary, danger, success, gray',
    //   defaultValue: 'dark',
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['dark', 'primary', 'danger', 'success', 'gray'],
    // },
    color: {
      description: "dark, primary, danger, success, gray",
      control: {
        type: "select",
      },
      options: ["dark", "primary", "danger", "success", "gray"],
    },
    size: {
      description: "large, medium,small",
      control: {
        type: "select",
      },
      options: ["large", "medium", "small", "base"],
    },

    ...otherProps,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {},
};

export const Secondary = {
  args: {
    icon: "las la-angle-right",
    iconColor: "danger",
    size: "small",
  },
};

export const Large = {
  args: {
    icon: "las la-search",
    iconColor: "success",
    size: "medium",
  },
};

export const Small = {
  args: {
    icon: "las la-search",
    iconColor: "gray",
    size: "large",
  },
};

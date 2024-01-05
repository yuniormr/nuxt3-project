import SideMenu from "~/components/DesignSystem/components/menu/sideMenu/SideMenu.vue";
import { commonArgTypes } from "~/stories/common/common.ts";
import dataSideMenuSecondExample from "~/stories/components/menu/data.ts";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Components/Menu/SideMenu",
  component: SideMenu,
  tags: ["autodocs"],

  argTypes: {
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
export const OtherData = {
  args: {
    dataSideMenu: dataSideMenuSecondExample,
  },
};

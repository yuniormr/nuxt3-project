import dataSideMenuSecondExample from "~/stories/components/menu/data.ts";
import DsTabs from "~/components/DesignSystem/components/nav/tabs/DsTabs.vue";
import { tabs } from "~/stories/components/nav/tabs/dataExample.tsx";

export default {
  title: "UiKit/Components/Nav/Tabs",
  component: DsTabs,
  tags: ["autodocs"],

  argTypes: {
    dataTab: {
      description:
        "The data prop is intended to contain an array of objects representing the tabs to be " +
        "rendered in the component. Each object within the array should have properties defining the tab's label and content.",
    },
    hideTextTag: {
      description: "Hide text",
    },
    radius: {
      description: "Active or desactive radius in the tab component",
    },
  },
};
export const Default = {
  args: {},
};
export const OtherData = {
  args: {
    dataTab: tabs,
  },
};
export const RadiusNone = {
  args: {
    radius: false,
  },
};
export const HideTextTag = {
  args: {
    hideTextTag: true,
  },
};

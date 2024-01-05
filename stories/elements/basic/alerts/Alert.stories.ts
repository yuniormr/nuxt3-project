import DsAlert from "~/components/DesignSystem/Elements/basic/alert/DsAlert.vue";

export default {
  title: "UiKit/Elements/Basic/Alert",
  component: DsAlert,
  tags: ["autodocs"],
  argTypes: {
    alertTypes: {
      control: {
        type: "select",
      },
      options: ["info", "danger", "success"],
      defaultValue: "info",
      description: 'Alertas informativas "info", "danger", "success"',
    },
    fontAwesome: {
      control: {
        type: "select",
      },
      options: [
        "las la-exclamation-circle",
        "las la-exclamation-triangle",
        "las la-check-circle",
        "las la-check-square",
        "las la-times-circle",
      ],
      defaultValue: "las la-exclamation-circle",
      description: "Alertas informativas",
    },
    titleColor: {
      control: {
        type: "select",
      },
      options: ["default", "primary"],
      defaultValue: "primary",
      description: "Title color",
    },
  },
};

export const Info = {
  args: {},
};

export const Danger = {
  args: {
    alertTypes: "danger",
    fontAwesome: "las la-exclamation-triangle",
  },
};

export const Success = {
  args: {
    alertTypes: "success",
    fontAwesome: "las la-check-circle",
  },
};

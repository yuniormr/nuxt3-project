import Badge from "~/components/DesignSystem/components/basic/badge/Badge.vue";

export default {
  title: "UiKit/Components/Basic/Badge",
  component: Badge,
  tags: ["autodocs"],

  argTypes: {
    icon: {
      description: "El nombre del ícono de Line Awesome que se debe mostrar.",
      control: "text",
      type: { name: "string", required: true },
    },
    count: {
      description: "La cantidad que se debe mostrar en el Badge.",
      control: "number",
      type: { name: "number", required: true },
    },
  },
};
export const Default = {
  args: {
    icon: "ambulance",
    count: 5,
  },
};
export const Card = {
  args: {
    icon: "search",
    count: 2,
  },
};

import DsImages from "~/components/DesignSystem/Elements/basic/images/DsImages.vue";
import Telematic from "~/components/DesignSystem/pages/telematic/Telematic.vue";
import Confirmation from "~/components/DesignSystem/pages/Confirmation/Confirmation.vue";

export const tabs = [
  {
    id: 1,
    label: "En linea",
    component: <DsImages />,
    icon: "las la-home",
  },
  {
    id: 2,
    label: "En la oficina",
    component: <Telematic />,
  },
  {
    id: 3,
    label: "Telefónico",
    component: <Confirmation />,
  },
];

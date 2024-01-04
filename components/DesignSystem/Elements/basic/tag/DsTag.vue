<script lang="ts" setup>
import {
  borderBottomClasses,
  borderClasses,
  borderLeftClasses,
  borderRightClasses,
  borderTopClasses,
  colorClasses, fontClasses,
  marginBottomClasses,
  marginClasses,
  marginLeftClasses,
  marginRightClasses,
  marginTopClasses,
  paddingBottomClasses,
  paddingClasses,
  paddingLeftClasses,
  paddingRightClasses,
  paddingTopClasses,
} from '../../../common/propsStyle';
import type { IColor, IFont, IStyleString } from '~/interfaces/elements';

type ITagTextColor = 'primary' | 'dark' | 'white';

const tagTextColorClasses = {
  primary: 'text-primary-500',
  dark: 'text-dark-500',
  white: 'text-white'
};

defineProps({
  textTag: {
    type: String,
    default: 'Neutral',
  },
  backgroundColor: {
    type: String as () => IColor,
    default: 'dark',
  },
  tagTextColor:{
    type: String as () => ITagTextColor,
    default: 'white'
  },
  letter: {
    type: String as () => IFont,
    default: "roboto",
  },
  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: {
    type: String as () => IStyleString,
    default: '2',
  },
  padding: String as () => IStyleString,
  paddingTop: {
    type: String as () => IStyleString,
    default: '1',
  },
  paddingBottom: {
    type: String as () => IStyleString,
    default: '1',
  },
  paddingRight: {
    type: String as () => IStyleString,
    default: '2',
  },

  paddingLeft: {
    type: String as () => IStyleString,
    default: '2',
  },
  border: {
    type: String as () => IStyleString,
  },
  borderBottom: {
    type: String as () => IStyleString,
  },
  borderTop: {
    type: String as () => IStyleString,
  },
  borderLeft: {
    type: String as () => IStyleString,
  },
  borderRight: {
    type: String as () => IStyleString,
  },
});
</script>

<template>
  <span
    :class="[
      fontClasses[letter],
      tagTextColorClasses[tagTextColor],
      colorClasses[backgroundColor],
      marginClasses[margin],
      marginTopClasses[marginTop],
      marginLeftClasses[marginLeft],
      marginRightClasses[marginRight],
      marginBottomClasses[marginBottom],
      paddingClasses[padding],
      paddingTopClasses[paddingTop],
      paddingLeftClasses[paddingLeft],
      paddingRightClasses[paddingRight],
      paddingBottomClasses[paddingBottom],
      borderClasses[border],
      borderTopClasses[borderTop],
      borderRightClasses[borderRight],
      borderLeftClasses[borderLeft],
      borderBottomClasses[borderBottom],
      'rounded',
      'text-xs',
      // 'px-2',
      // 'py-1',
    ]"
    >{{ textTag }}</span
  >
</template>
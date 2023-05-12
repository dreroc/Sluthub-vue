import { VNodeProps, AllowedComponentProps } from 'vue';

/**
 * Extract the type of a component's props in a usable format for defineProps
 */
export type PropsOf<T extends { $props: Record<string, never> }> = Omit<
  T['$props'],
  | keyof VNodeProps
  | keyof AllowedComponentProps
  | `$${string}`
  | `v-slot${string}`
>;

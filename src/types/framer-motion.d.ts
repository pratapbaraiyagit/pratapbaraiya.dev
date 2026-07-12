// Extend framer-motion Easing type to accept any string
// This is needed because framer-motion v12 has overly strict Easing typing
import "framer-motion";

declare module "framer-motion" {
  interface TransitionDefinition {
    ease?: string | number[] | ((t: number) => number);
  }
}

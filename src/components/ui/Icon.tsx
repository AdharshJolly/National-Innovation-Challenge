import {
  Layers, FileSearch, Users, Award, Cpu, Compass, Wrench, Flag, ArrowRight, Menu, X, Mail, Phone, Trophy,
} from "lucide-react";

const map = {
  tracks: Layers,
  problems: FileSearch,
  mentorship: Users,
  recognition: Award,
  hardware: Cpu,
  prototype: Wrench,
  finale: Flag,
  explore: Compass,
  arrow: ArrowRight,
  menu: Menu,
  close: X,
  mail: Mail,
  phone: Phone,
  trophy: Trophy,
} as const;

export type IconName = keyof typeof map;

/** Single outline icon family (Lucide, 1.5px stroke) per DESIGN_SYSTEM.md §10. */
export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const C = map[name];
  return <C size={size} strokeWidth={1.5} aria-hidden="true" focusable="false" />;
}

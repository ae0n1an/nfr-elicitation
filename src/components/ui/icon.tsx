import * as icons from "lucide-react";
import type { LucideIcon as LucideIconType } from "lucide-react";

type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
};

export const Icon = ({ name, color = "currentColor", size = 24, className }: IconProps) => {
  const LucideIcon = icons[name] as LucideIconType;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  gradientHover?: boolean;
}

export function GlassCard({ className, children, gradientHover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={gradientHover ? { y: -5 } : undefined}
      className={cn(
        "glass rounded-2xl p-6 md:p-8 transition-all duration-300",
        gradientHover && "hover:shadow-[0_0_20px_rgba(65,105,225,0.3)] hover:border-primary/50 relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {/* Background gradient effect on hover */}
      {gradientHover && (
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

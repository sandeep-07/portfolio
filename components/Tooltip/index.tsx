import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define the prop types with TypeScript
interface ReusableTooltipProps {
  triggerContent: ReactNode; // Can be JSX or any valid React node
  tooltipContent: ReactNode; // Tooltip content can also be JSX or React nodes
  triggerClassName?: string; // Optional, for additional classes on trigger content
}

export function ReusableTooltip({
  triggerContent,
  tooltipContent,
  triggerClassName = "", // Class applied to trigger element
}: ReusableTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* Wrap the trigger content in a div, applying triggerClassName */}
          <div className={triggerClassName}>{triggerContent}</div>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

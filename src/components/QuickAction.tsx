import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionProps {
  title: string;
  icon: LucideIcon;
  variant: "primary" | "success" | "info" | "warning";
  onClick?: () => void;
}

export function QuickAction({ 
  title, 
  icon: Icon, 
  variant, 
  onClick 
}: QuickActionProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-primary hover:opacity-90 text-primary-foreground border-primary/20";
      case "success":
        return "bg-gradient-success hover:opacity-90 text-success-foreground border-success/20";
      case "info":
        return "bg-primary hover:bg-primary/90 text-primary-foreground border-primary/20";
      case "warning":
        return "bg-gradient-warning hover:opacity-90 text-warning-foreground border-warning/20";
      default:
        return "bg-muted hover:bg-muted/80 text-muted-foreground";
    }
  };

  return (
    <Button
      onClick={onClick}
      className={`h-20 w-full flex-col gap-2 border border-border rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in ${getVariantStyles()}`}
      variant="outline"
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{title}</span>
    </Button>
  );
}
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaButton({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      asChild
      className={cn(
        "bg-green-500 hover:bg-green-600 text-primary-foreground text-base md:text-lg font-bold py-6 px-8 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-md animate-pulse cursor-pointer h-auto",
        className
      )}
      {...props}
    >
      <a href="https://pay.kirvano.com/6844fb0b-7190-4c9f-8bdd-709ea09c2f7e" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

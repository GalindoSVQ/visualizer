import { Toggle } from "@/components/ui/toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type Props = {
  title: string;
  options: {
    label: string;
  }[];
};

export function Options({ title, options }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2 mb-2"
    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-base font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="flex flex-col gap-2 border rounded p-2">
          {options.map((option) => (
            <Toggle key={option.label}>{option.label}</Toggle>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

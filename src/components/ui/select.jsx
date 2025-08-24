import React from "react"
import {
  Root as SelectPrimitive,
  Trigger as SelectTrigger,
  Value as SelectValue,
  Icon as SelectIcon,
  Portal as SelectPortal,
  Content as SelectContent,
  Viewport as SelectViewport,
  Item as SelectItem,
  ItemText as SelectItemText,
  ItemIndicator as SelectItemIndicator,
  ScrollUpButton as SelectScrollUpButton,
  ScrollDownButton as SelectScrollDownButton,
  Group as SelectGroup,
  Label as SelectLabel,
  Separator as SelectSeparator,
} from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive

const SelectGroup = SelectGroup

const SelectValue = SelectValue

const SelectTriggerComponent = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectTrigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectIcon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
))
SelectTriggerComponent.displayName = SelectTrigger.displayName

const SelectScrollUpButtonComponent = React.forwardRef(({ className, ...props }, ref) => (
  <SelectScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectScrollUpButton>
))
SelectScrollUpButtonComponent.displayName = SelectScrollUpButton.displayName

const SelectScrollDownButtonComponent = React.forwardRef(({ className, ...props }, ref) => (
  <SelectScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectScrollDownButton>
))
SelectScrollDownButtonComponent.displayName = SelectScrollDownButton.displayName

const SelectContentComponent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPortal>
    <SelectContent
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButtonComponent />
      <SelectViewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectViewport>
      <SelectScrollDownButtonComponent />
    </SelectContent>
  </SelectPortal>
))
SelectContentComponent.displayName = SelectContent.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectLabel
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectLabel.displayName

const SelectItemComponent = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectItem
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Check className="h-4 w-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>{children}</SelectItemText>
  </SelectItem>
))
SelectItemComponent.displayName = SelectItem.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectSeparator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectSeparator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTriggerComponent as SelectTrigger,
  SelectContentComponent as SelectContent,
  SelectLabel,
  SelectItemComponent as SelectItem,
  SelectSeparator,
  SelectScrollUpButtonComponent as SelectScrollUpButton,
  SelectScrollDownButtonComponent as SelectScrollDownButton,
}
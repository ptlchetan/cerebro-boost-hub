import React from "react"
import {
  Provider as ToastProvider,
  Viewport as ToastViewport,
  Root as ToastRoot,
  Title as ToastTitle,
  Description as ToastDescription,
  Action as ToastAction,
  Close as ToastClose,
} from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProviderComponent = ToastProvider

const ToastViewportComponent = React.forwardRef(({ className, ...props }, ref) => (
  <ToastViewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewportComponent.displayName = ToastViewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastRoot
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastRoot.displayName

const ToastActionComponent = React.forwardRef(({ className, ...props }, ref) => (
  <ToastAction
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastActionComponent.displayName = ToastAction.displayName

const ToastCloseComponent = React.forwardRef(({ className, ...props }, ref) => (
  <ToastClose
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastClose>
))
ToastCloseComponent.displayName = ToastClose.displayName

const ToastTitleComponent = React.forwardRef(({ className, ...props }, ref) => (
  <ToastTitle
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitleComponent.displayName = ToastTitle.displayName

const ToastDescriptionComponent = React.forwardRef(({ className, ...props }, ref) => (
  <ToastDescription
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescriptionComponent.displayName = ToastDescription.displayName

export {
  ToastProviderComponent as ToastProvider,
  ToastViewportComponent as ToastViewport,
  Toast,
  ToastTitleComponent as ToastTitle,
  ToastDescriptionComponent as ToastDescription,
  ToastActionComponent as ToastAction,
  ToastCloseComponent as ToastClose,
}
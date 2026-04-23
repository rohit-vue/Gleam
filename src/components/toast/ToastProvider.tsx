"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { SnackbarProvider, type VariantType, useSnackbar } from "notistack";

type ToastType = "success" | "error";

type ToastContextValue = {
  showToast: (message: string, type?: ToastType) => void;
  success: (message: string) => void;
  error: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

function ToastBridge({ children }: { children: React.ReactNode }) {
  const { enqueueSnackbar } = useSnackbar();
  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      enqueueSnackbar(message, {
        variant: type as VariantType,
        style:
          type === "success"
            ? {
                backgroundColor: "#ffffff",
                color: "#111111",
              }
            : undefined,
      });
    },
    [enqueueSnackbar]
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      showToast,
      success: (message) => showToast(message, "success"),
      error: (message) => showToast(message, "error"),
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3200}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <ToastBridge>{children}</ToastBridge>
    </SnackbarProvider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider.");
  }
  return context;
}

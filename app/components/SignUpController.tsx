"use client";
import React, { useEffect, useState } from "react";
import SignUpModalDemo from "../screens/SingUp/SignUp";

export default function SignUpController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateFromHash = () => {
      if (typeof window === "undefined") return;
      setOpen(window.location.hash === "#signup");
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      if (window.location.hash === "#signup") {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  };

  return <SignUpModalDemo open={open} onClose={handleClose} />;
}



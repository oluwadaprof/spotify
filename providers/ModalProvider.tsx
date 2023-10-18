"use client";

import AuthModal from '@/components/AuthModal'
import React, { Children, useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [!isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;

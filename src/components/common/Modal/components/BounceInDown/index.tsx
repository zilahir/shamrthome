import React from "react";
import { motion } from "framer-motion";

export const BounceInDownDiv = (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 0, scale: 0 }}
      {...props}
    />
  );
};

export const BounceInDownButton = (props: any) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      {...props}
    />
  );
};

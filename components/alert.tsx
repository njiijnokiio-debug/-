'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, InfoIcon, AlertTriangle } from 'lucide-react';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  onClose?: () => void;
}

const alertStyles = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  success: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  error: 'bg-red-50 border-red-200 text-red-800',
};

const iconMap = {
  info: <InfoIcon size={20} />,
  success: <CheckCircle size={20} />,
  warning: <AlertTriangle size={20} />,
  error: <AlertCircle size={20} />,
};

export function Alert({ type = 'info', title, message, onClose }: AlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`p-4 rounded-lg border ${alertStyles[type]} flex items-start gap-3`}
    >
      <div className="flex-shrink-0 mt-0.5">{iconMap[type]}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-lg opacity-50 hover:opacity-100 transition-opacity"
        >
          ✕
        </button>
      )}
    </motion.div>
  );
}
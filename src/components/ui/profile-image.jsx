import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const ProfileImage = ({ 
  src, 
  alt, 
  fallbackText, 
  size = "lg", 
  className,
  showBorder = true,
  animated = true,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sizeClasses = {
    sm: "w-16 h-16 text-lg",
    md: "w-24 h-24 text-2xl",
    lg: "w-32 h-32 text-4xl",
    xl: "w-40 h-40 text-5xl",
    "2xl": "w-48 h-48 text-6xl",
    "3xl": "w-56 h-56 text-7xl",
    responsive: "", // Custom responsive sizing handled by parent
  };

  const borderClasses = showBorder 
    ? "ring-2 sm:ring-4 ring-white/20 dark:ring-gray-800/50 shadow-xl sm:shadow-2xl" 
    : "";

  // For responsive size, don't add default sizing classes
  const baseClasses = cn(
    "relative rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600 aspect-square",
    size !== "responsive" && sizeClasses[size],
    borderClasses,
    className
  );

  // Adjust text size based on container size for responsive
  const textSizeClasses = size === "responsive" 
    ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    : "";

  const MotionDiv = animated ? motion.div : 'div';
  const motionProps = animated ? {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 },
    whileHover: { scale: 1.05, rotate: 2 },
    whileTap: { scale: 0.95 }
  } : {};

  return (
    <MotionDiv
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {src && !imageError ? (
        <>
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && (
            <div className={cn(
              "absolute inset-0 flex items-center justify-center text-white font-bold",
              textSizeClasses
            )}>
              {fallbackText}
            </div>
          )}
        </>
      ) : (
        <div className={cn(
          "absolute inset-0 flex items-center justify-center text-white font-bold",
          textSizeClasses
        )}>
          {fallbackText}
        </div>
      )}
      
      {/* Animated border effect */}
      {animated && (
        <motion.div
          className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-75 -z-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </MotionDiv>
  );
};

export { ProfileImage };
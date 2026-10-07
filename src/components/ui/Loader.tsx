import { AnimatePresence, motion } from "framer-motion";

/**
 * Apple-style boot loader: morphing geometric mark
 * (circle → square → triangle) + progress shimmer.
 * Fades with a glass blur-out.
 */
export function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!show}
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="loader-shape" />
            </motion.div>
            <p className="mono mt-5 text-[11px] tracking-[0.3em] uppercase t3">
              Karthik Paila
            </p>
            <div className="loader-bar">
              <span />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

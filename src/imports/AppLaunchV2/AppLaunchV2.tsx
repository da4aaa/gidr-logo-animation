import { motion } from "motion/react";
import svgPaths from "./svg-new-logo";

const easeOut = [0.16, 1, 0.3, 1] as const;
const easeSpring = [0.34, 1.56, 0.64, 1] as const;

function IconPart() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 107">
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="v2_paint0_linear" x1="26.9898" x2="84.097" y1="27.9815" y2="27.9815">
          <stop stopColor="#513685" />
          <stop offset="1" stopColor="#6367BA" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="v2_paint1_linear" x1="0" x2="90.3767" y1="69.3173" y2="69.3173">
          <stop stopColor="#513685" />
          <stop offset="1" stopColor="#6367BA" />
        </linearGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(6.94624 -1.22144 -1.22481 -6.92712 35.2668 6.16565)" gradientUnits="userSpaceOnUse" id="v2_paint2_radial" r="1">
          <stop stopColor="#6180C9" />
          <stop offset="0.70303" stopColor="#513685" />
          <stop offset="1" stopColor="#513685" />
        </radialGradient>
      </defs>

      {/* Top arc — starts first, shorter path */}
      <mask height="36" id="v2_mask0" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="68" x="22" y="10">
        <path d={svgPaths.topArc} fill="white" />
      </mask>
      <g mask="url(#v2_mask0)">
        <motion.path
          d={svgPaths.topArc}
          stroke="url(#v2_paint0_linear)"
          strokeWidth="10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 1.0 }}
        />
      </g>

      {/* Main arc — starts slightly after, longer path */}
      <mask height="84" id="v2_mask1" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="95" x="0" y="28">
        <path d={svgPaths.mainArc} fill="white" />
      </mask>
      <g mask="url(#v2_mask1)">
        <motion.path
          d={svgPaths.mainArc}
          stroke="url(#v2_paint1_linear)"
          strokeWidth="15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: easeOut, delay: 1.15 }}
        />
      </g>

      {/* Large sparkle */}
      <motion.g
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 20, 0],
          filter: ["brightness(1)", "brightness(1)", "brightness(1.2)", "brightness(1)"]
        }}
        transition={{
          opacity: { duration: 0.055, delay: 2.3 },
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 2.3 },
          rotate: { duration: 0.22, delay: 2.3, ease: easeSpring },
          filter: { duration: 0.7, delay: 2.85, times: [0, 0.4, 0.5, 1], repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }
        }}
        style={{ transformOrigin: "22.2px 28.14px" }}
      >
        <mask height="30" id="v2_mask2" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="30" x="7" y="13">
          <path d={svgPaths.largeStar} fill="white" />
        </mask>
        <g mask="url(#v2_mask2)">
          <path d={svgPaths.largeStar} fill="#6367B9" />
        </g>
      </motion.g>

      {/* Small sparkle — offset pulse timing */}
      <motion.g
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 20, 0],
          filter: ["brightness(1)", "brightness(1)", "brightness(1.2)", "brightness(1)"]
        }}
        transition={{
          opacity: { duration: 0.055, delay: 2.3 },
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 2.3 },
          rotate: { duration: 0.22, delay: 2.3, ease: easeSpring },
          filter: { duration: 0.7, delay: 3.05, times: [0, 0.4, 0.5, 1], repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }
        }}
        style={{ transformOrigin: "33.96px 7.03px" }}
      >
        <mask height="15" id="v2_mask3" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="15" x="26" y="0">
          <path d={svgPaths.smallStar} fill="white" />
        </mask>
        <g mask="url(#v2_mask3)">
          <path d={svgPaths.smallStar} fill="url(#v2_paint2_radial)" />
          <path d={svgPaths.smallStar} fill="#533C8C" />
        </g>
      </motion.g>

      {/* Arrow — snaps in with spring scale */}
      <motion.path
        d={svgPaths.arrow}
        fill="#1A1A1A"
        style={{ transformOrigin: "60px 61px" }}
        initial={{ opacity: 0, x: -8, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          opacity: { duration: 0.2, delay: 2.5 },
          x: { duration: 0.33, delay: 2.5, ease: easeSpring },
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 2.5 }
        }}
      />
    </svg>
  );
}

function TextPart() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 107">
      <motion.g
        id="gidr-ai-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.33, delay: 2.7 }}
        style={{ letterSpacing: "0.05em" }}
      >
        <motion.g
          initial={{ scaleX: 0.98 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.33, delay: 2.7, ease: easeOut }}
          style={{ transformOrigin: "105px 53px" }}
        >
          <path d={svgPaths.gidrG} fill="#1A1A1A" />
          <path d={svgPaths.gidrI1} fill="#1A1A1A" />
          <path d={svgPaths.gidrD} fill="#1A1A1A" />
          <path d={svgPaths.gidrR} fill="#1A1A1A" />
          <path d={svgPaths.gidrDot} fill="#1A1A1A" />
          <path d={svgPaths.gidrA} fill="#1A1A1A" />
          <path d={svgPaths.gidrI2} fill="#1A1A1A" />
        </motion.g>
      </motion.g>

      {/* Subtitle drifts up as it fades in */}
      <motion.g
        id="guided-intelligence-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 2.85, ease: easeOut }}
      >
        <path d={svgPaths.subG} fill="#1A1A1A" />
        <path d={svgPaths.subU} fill="#1A1A1A" />
        <path d={svgPaths.subI1} fill="#1A1A1A" />
        <path d={svgPaths.subD1} fill="#1A1A1A" />
        <path d={svgPaths.subE1} fill="#1A1A1A" />
        <path d={svgPaths.subD2} fill="#1A1A1A" />
        <path d={svgPaths.subI2} fill="#1A1A1A" />
        <path d={svgPaths.subN1} fill="#1A1A1A" />
        <path d={svgPaths.subT} fill="#1A1A1A" />
        <path d={svgPaths.subE2} fill="#1A1A1A" />
        <path d={svgPaths.subL1} fill="#1A1A1A" />
        <path d={svgPaths.subL2} fill="#1A1A1A" />
        <path d={svgPaths.subI3} fill="#1A1A1A" />
        <path d={svgPaths.subG2} fill="#1A1A1A" />
        <path d={svgPaths.subE3} fill="#1A1A1A" />
        <path d={svgPaths.subN2} fill="#1A1A1A" />
        <path d={svgPaths.subC} fill="#1A1A1A" />
        <path d={svgPaths.subE4} fill="#1A1A1A" />
      </motion.g>
    </svg>
  );
}

function Logo() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[107px] left-[calc(50%+0.5px)] overflow-visible top-[calc(50%+0.5px)] w-[238px]"
      data-name="Logo"
    >
      {/* Icon shifts left + scales slightly as text reveals */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0, scale: 1 }}
        animate={{ x: -12, scale: 0.95 }}
        transition={{
          x: { duration: 0.35, delay: 2.7, ease: easeOut },
          scale: { duration: 0.35, delay: 2.7, ease: easeOut }
        }}
        style={{ transformOrigin: "center" }}
      >
        <IconPart />
      </motion.div>

      {/* Text slides in from right while clip opens; final x compensates for icon shift */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)", x: -6 }}
        animate={{ clipPath: "inset(0 0% 0 0)", x: -16 }}
        transition={{
          clipPath: { duration: 0.4, delay: 2.7, ease: easeOut },
          x: { duration: 0.4, delay: 2.7, ease: easeOut }
        }}
      >
        <TextPart />
      </motion.div>
    </div>
  );
}

export default function AppLaunchV2() {
  return (
    <motion.div
      className="bg-[#e4ebec] relative size-full"
      data-name="App launch"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Logo />
    </motion.div>
  );
}

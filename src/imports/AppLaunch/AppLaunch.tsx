import { motion } from "motion/react";
import svgPaths from "./svg-py823ry4ng";

function IconPart() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237.998 123">
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_59" x1="31.1562" x2="97.0792" y1="32.3012" y2="32.3012">
          <stop stopColor="#513685" />
          <stop offset="1" stopColor="#6367BA" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_59" x1="0" x2="104.328" y1="80.018" y2="80.018">
          <stop stopColor="#513685" />
          <stop offset="1" stopColor="#6367BA" />
        </linearGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(16.0371 2.81999 -2.82777 15.9929 28.6485 34.4839)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_59" r="1">
          <stop stopColor="#6180C9" />
          <stop offset="0.70303" stopColor="#513685" />
          <stop offset="1" stopColor="#513685" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(8.01851 1.41 -1.41389 7.99644 40.7111 9.12246)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_59" r="1">
          <stop stopColor="#6180C9" />
          <stop offset="0.70303" stopColor="#513685" />
          <stop offset="1" stopColor="#513685" />
        </radialGradient>
      </defs>

      <mask height="30" id="mask0_1_59" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="67" x="31" y="17">
        <path d={svgPaths.p58b9a00} fill="white" />
      </mask>
      <g mask="url(#mask0_1_59)">
        <motion.path
          d={svgPaths.p58b9a00}
          stroke="url(#paint0_linear_1_59)"
          strokeWidth="10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.99, ease: [0.34, 1.56, 0.64, 1], delay: 1.43 }}
        />
      </g>

      <mask height="86" id="mask1_1_59" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="105" x="0" y="37">
        <path d={svgPaths.p155fbb80} fill="white" />
      </mask>
      <g mask="url(#mask1_1_59)">
        <motion.path
          d={svgPaths.p299a6180}
          stroke="url(#paint1_linear_1_59)"
          strokeWidth="15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.99, ease: [0.34, 1.56, 0.64, 1], delay: 1.43 }}
        />
      </g>

      <motion.g
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 20, 0],
          filter: [
            "brightness(1)",
            "brightness(1)",
            "brightness(1.75)",
            "brightness(1)"
          ]
        }}
        transition={{
          opacity: { duration: 0.055, delay: 2.42 },
          scale: { type: "spring", stiffness: 300, damping: 12, delay: 2.42 },
          rotate: { duration: 0.22, delay: 2.42, ease: [0.34, 1.56, 0.64, 1] },
          filter: {
            duration: 0.44,
            delay: 2.42,
            times: [0, 0.4, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }
        }}
        style={{ transformOrigin: "25.6px 32.5px" }}
      >
        <mask height="33" id="mask2_1_59" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="33" x="9" y="16">
          <path d={svgPaths.p3f15b700} fill="white" />
        </mask>
        <g mask="url(#mask2_1_59)">
          <path d={svgPaths.p3f15b700} fill="url(#paint2_radial_1_59)" />
        </g>
      </motion.g>

      <motion.g
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 20, 0],
          filter: [
            "brightness(1)",
            "brightness(1)",
            "brightness(1.75)",
            "brightness(1)"
          ]
        }}
        transition={{
          opacity: { duration: 0.055, delay: 2.42 },
          scale: { type: "spring", stiffness: 300, damping: 12, delay: 2.42 },
          rotate: { duration: 0.22, delay: 2.42, ease: [0.34, 1.56, 0.64, 1] },
          filter: {
            duration: 0.44,
            delay: 2.585,
            times: [0, 0.4, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }
        }}
        style={{ transformOrigin: "39.2px 8.12px" }}
      >
        <mask height="17" id="mask3_1_59" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="17" x="31" y="0">
          <path d={svgPaths.p383cd080} fill="white" />
        </mask>
        <g mask="url(#mask3_1_59)">
          <path d={svgPaths.p383cd080} fill="url(#paint3_radial_1_59)" />
        </g>
      </motion.g>

      <motion.path
        d={svgPaths.p3ed7f600}
        fill="#231F20"
        id="arrow"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.33,
          delay: 2.64,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      />
    </svg>
  );
}

function TextPart() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237.998 123">
      <motion.g
        id="gidr-ai-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.33, delay: 2.86 }}
        style={{ letterSpacing: "0.05em" }}
      >
        <motion.g
          initial={{ scaleX: 0.98 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.33, delay: 2.86 }}
          style={{ transformOrigin: "center" }}
        >
          <path d={svgPaths.p2770b600} fill="#231F20" />
          <path d={svgPaths.p1279af80} fill="#231F20" />
          <path d={svgPaths.p3a643c38} fill="#231F20" />
          <path d={svgPaths.p1b4f5d80} fill="#231F20" />
          <path d={svgPaths.p1721080} fill="#231F20" />
          <path d={svgPaths.p3cba2cf0} fill="#231F20" />
          <path d={svgPaths.p3a43c300} fill="#231F20" />
        </motion.g>
      </motion.g>

      <motion.g
        id="guided-intelligence-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.275, delay: 3.025 }}
      >
        <path d={svgPaths.p1658c700} fill="#231F20" />
        <path d={svgPaths.p2e8f4700} fill="#231F20" />
        <path d={svgPaths.p3413e00} fill="#231F20" />
        <path d={svgPaths.p8f08f1} fill="#231F20" />
        <path d={svgPaths.p22aab800} fill="#231F20" />
        <path d={svgPaths.p3a080080} fill="#231F20" />
        <path d={svgPaths.p1b9a2380} fill="#231F20" />
        <path d={svgPaths.p113b8b00} fill="#231F20" />
        <path d={svgPaths.p392f43c0} fill="#231F20" />
        <path d={svgPaths.p29bd5a00} fill="#231F20" />
        <path d={svgPaths.p14447580} fill="#231F20" />
        <path d={svgPaths.p27e4ba00} fill="#231F20" />
        <path d={svgPaths.p2e4bc300} fill="#231F20" />
        <path d={svgPaths.p3faa500} fill="#231F20" />
        <path d={svgPaths.p1f031f80} fill="#231F20" />
        <path d={svgPaths.p22b8be80} fill="#231F20" />
        <path d={svgPaths.p1598aa00} fill="#231F20" />
        <path d={svgPaths.p1f537c40} fill="#231F20" />
      </motion.g>
    </svg>
  );
}

function Logo() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-[calc(50%+0.5px)] overflow-visible top-[calc(50%+0.5px)] w-[238px]"
      data-name="Logo"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0, scale: 1 }}
        animate={{ x: -12, scale: 0.9 }}
        transition={{
          x: { duration: 0.33, delay: 2.86, ease: [0.34, 1.56, 0.64, 1] },
          scale: { duration: 0.33, delay: 2.86, ease: [0.34, 1.56, 0.64, 1] }
        }}
        style={{ transformOrigin: "center" }}
      >
        <IconPart />
      </motion.div>

      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          clipPath: { duration: 0.385, delay: 2.86, ease: [0.34, 1.56, 0.64, 1] }
        }}
      >
        <TextPart />
      </motion.div>
    </div>
  );
}

export default function AppLaunch() {
  return (
    <div className="bg-[#e4ebec] relative size-full" data-name="App launch">
      <Logo />
    </div>
  );
}
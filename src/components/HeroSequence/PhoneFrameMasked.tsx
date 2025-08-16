import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface PhoneFrameMaskedProps {
	src: string
	alt: string
	tilt?: { x: number; y: number; z: number }
	shadow?: boolean
	className?: string
}

export function PhoneFrameMasked({ src, alt, tilt = { x: 0, y: 0, z: 0 }, shadow = true, className = '' }: PhoneFrameMaskedProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	
	// Scroll progress for screen parallax
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end']
	})

	console.log("PhoneFrameMasked src:", src) // should log /images/...

	return (
		<motion.div 
			ref={containerRef}
			className={`relative ${className}`}
			style={{
				rotateX: tilt.x,
				rotateY: tilt.y,
				rotateZ: tilt.z,
				transformStyle: 'preserve-3d'
			}}
			// Idle micro-drift animation
			animate={{
				y: [0, 6, 0, -6, 0],
				rotateZ: [0, 0.3, 0, -0.3, 0]
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut"
			}}
		>
			{/* Phone Shadow */}
			{shadow && (
				<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full h-8 opacity-30">
					<div className="w-3/4 h-6 bg-black/30 blur-xl rounded-full mx-auto" />
				</div>
			)}
			
			{/* Phone Frame with Screen Content - CSS Mask Approach */}
			<div className="relative">
				{/* Screen clipped by CSS mask */}
				<div
					className="relative"
					style={{
						width: "100%",
						aspectRatio: 1290 / 2796,
						WebkitMaskImage: "url(/images/iphone-15.svg)",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskSize: "100% 100%",
						maskImage: "url(/images/iphone-15.svg)",
						maskRepeat: "no-repeat",
						maskSize: "100% 100%",
						overflow: "hidden",
					}}
				>
					<motion.img
						src={src}
						alt={alt}
						className="absolute inset-[7%] h-[86%] w-[86%] object-cover"
						style={{
							y: useTransform(scrollYProgress, [0, 1], [-3, 3])
						}}
					/>
				</div>

				{/* Optional visual frame above (if your frame has shadows/bevel) */}
				<img src="/images/iphone-15.svg" alt="" className="absolute inset-0 w-full h-auto pointer-events-none" />
				
				{/* Glass specular sweep */}
				<motion.div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
						width: '87.3%',
						height: '90.4%',
						top: '4.8%',
						left: '6.4%',
						borderRadius: '96px',
						x: useTransform(scrollYProgress, [0.32, 0.48], ['-20%', '20%'])
					}}
				/>
			</div>
		</motion.div>
	)
}

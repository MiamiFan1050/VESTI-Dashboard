import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useId, useEffect } from 'react'

interface PhoneFrameProps {
	src: string
	alt: string
	tilt?: { x: number; y: number; z: number }
	shadow?: boolean
	className?: string
}

export function PhoneFrame({ src, alt, tilt = { x: 0, y: 0, z: 0 }, shadow = true, className = '' }: PhoneFrameProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	
	// Scroll progress for screen parallax
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end']
	})

	console.log("PhoneFrame src:", src) // should log /images/alex-*.png
	
	// Debug: Check if image exists
	useEffect(() => {
		const img = new Image()
		img.onload = () => console.log(`✅ Image loaded: ${src}`)
		img.onerror = () => console.error(`❌ Image failed to load: ${src}`)
		img.src = src
	}, [src])

	return (
		<motion.div 
			ref={containerRef}
			className={`relative will-change-transform ${className}`}
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
				<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/30 blur-xl rounded-full" />
			)}
			
			{/* Simplified Phone Frame with Screen Content */}
			<div className="relative">
				{/* Screen Content */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-[95.7%] h-[98%] rounded-[39px] overflow-hidden">
						<motion.img 
							src={src}
							alt={alt}
							className="w-full h-full object-cover"
							style={{
								y: useTransform(scrollYProgress, [0, 1], [-3, 3])
							}}
						/>
					</div>
				</div>
				
				{/* Glass specular sweep */}
				<motion.div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
						width: '95.7%',
						height: '98%',
						top: '1%',
						left: '2.15%',
						borderRadius: '39px',
						x: useTransform(scrollYProgress, [0.32, 0.48], ['-20%', '20%'])
					}}
				/>
				
				{/* iPhone Frame - using a simple div with border for now */}
				<div className="relative z-10 w-full h-auto">
					<div 
						className="w-full h-auto rounded-[47px] border-4 border-gray-800 bg-gray-900"
						style={{
							aspectRatio: '375/812',
							boxShadow: '0 12px 24px rgba(0,0,0,0.3)'
						}}
					>
						{/* Dynamic Island */}
						<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-b-full z-20" />
					</div>
				</div>
			</div>
		</motion.div>
	)
}

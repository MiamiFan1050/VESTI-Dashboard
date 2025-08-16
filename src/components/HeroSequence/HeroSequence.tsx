import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { PhoneFrame } from './PhoneFrame'
import { DebugProgress } from './DebugProgress'

// Asset imports - exact paths as specified
const alexTransparent = '/images/alex-transparent.png'
const alexBefore = '/images/alex-before.webp'
const alexR1 = '/images/alex-r1.webp'
const alexR2 = '/images/alex-r2.webp'

interface HeroSequenceProps {
	onShowVideo: () => void
}

export function HeroSequence({ onShowVideo }: HeroSequenceProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	
	// Error handling
	const [hasError, setHasError] = useState(false)
	
	if (hasError) {
		return (
			<div className="relative min-h-screen flex flex-col justify-center bg-red-50">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
					<button 
						onClick={() => window.location.reload()} 
						className="px-4 py-2 bg-red-600 text-white rounded"
					>
						Reload Page
					</button>
				</div>
			</div>
		)
	}
	
	// Single source of truth for scroll progress
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end']
	})

	// Spring for smooth cluster movement (jitter-free)
	const clusterY = useSpring(
		useTransform(scrollYProgress, [0.48, 0.64, 0.80], [0, -22, -64]),
		{ stiffness: 220, damping: 24 }
	)
	
	const clusterScale = useSpring(
		useTransform(scrollYProgress, [0.64, 0.80], [1, 0.62]),
		{ stiffness: 220, damping: 24 }
	)

	// Navbar mediation effect
	useEffect(() => {
		const navbar = document.querySelector('header') as HTMLElement
		if (!navbar) return

		const unsubscribe = scrollYProgress.on('change', (latest) => {
			if (latest >= 0.48 && latest <= 0.64) {
				navbar.style.backdropFilter = 'blur(4px)'
				navbar.style.borderBottom = '1px solid rgba(0,0,0,0.06)'
			} else {
				navbar.style.backdropFilter = ''
				navbar.style.borderBottom = ''
			}
		})

		return unsubscribe
	}, [scrollYProgress])

	// Check for reduced motion preference
	const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

	if (prefersReducedMotion) {
		return (
			<div className="relative min-h-screen flex flex-col justify-center">
				{/* Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
				
				{/* Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
					<div className="text-center mb-12">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
							Try Clothes On
							<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								{' '}for Confident Shopping
							</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
							Our premium Chrome extension uses AI to show you exactly how clothes will look on your body before you buy
						</p>
					</div>
					
					{/* Debug: Show raw images first */}
					<div className="mb-8 text-center">
						<h3 className="text-lg font-bold mb-4">Debug: Raw Images</h3>
						<div className="flex justify-center gap-4">
							<div>
								<p className="text-sm mb-2">alex-transparent.png</p>
								<img src={alexTransparent} alt="Alex transparent" className="w-32 h-auto border" />
							</div>
							<div>
								<p className="text-sm mb-2">alex-before.webp</p>
								<img src={alexBefore} alt="Alex before" className="w-32 h-auto border" />
							</div>
							<div>
								<p className="text-sm mb-2">alex-r1.webp</p>
								<img src={alexR1} alt="Alex r1" className="w-32 h-auto border" />
							</div>
							<div>
								<p className="text-sm mb-2">alex-r2.webp</p>
								<img src={alexR2} alt="Alex r2" className="w-32 h-auto border" />
							</div>
						</div>
					</div>
					
					{/* Static 3-phone layout */}
					<div className="flex justify-center items-center gap-4 md:gap-8">
						<PhoneFrame 
							src={alexR1} 
							alt="Alex try-on 1"
							tilt={{ x: 1.5, y: -4, z: -2 }}
							className="hidden md:block w-64"
						/>
						<PhoneFrame 
							src={alexBefore} 
							alt="Alex before"
							tilt={{ x: 1.5, y: -4, z: -0.8 }}
							className="w-64 md:w-72"
						/>
						<PhoneFrame 
							src={alexR2} 
							alt="Alex try-on 2"
							tilt={{ x: 1.5, y: -4, z: 2 }}
							className="hidden md:block w-64"
						/>
					</div>
				</div>
			</div>
		)
	}

	try {
		return (
			<>
				{/* Debug Progress Bar (hidden in production) */}
				{process.env.NODE_ENV === 'development' && (
					<DebugProgress targetRef={containerRef} />
				)}
				
				{/* Main Hero Sequence */}
				<div 
					ref={containerRef}
					className="relative min-h-[360vh]"
				>
				{/* Sticky Container - No overflow hidden or transforms */}
				<div className="sticky top-0 h-screen flex items-center justify-center">
					{/* Background with energy */}
					<motion.div 
						className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"
						style={{
							rotate: useTransform(scrollYProgress, [0.32, 0.80], [0, 2]),
							backgroundPosition: useTransform(scrollYProgress, [0.32, 0.80], ['0% 0%', '2% 1%'])
						}}
					/>
					
					{/* Text Layer - Behind phones */}
					<motion.div 
						className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
						style={{
							opacity: useTransform(scrollYProgress, [0.48, 0.55, 0.64, 0.70], [1, 0.85, 1, 1]),
							filter: useTransform(scrollYProgress, [0.48, 0.55, 0.64], [
								'drop-shadow(0 0px 0px rgba(0,0,0,0))',
								'drop-shadow(0 1px 1px rgba(0,0,0,0.12))',
								'drop-shadow(0 0px 0px rgba(0,0,0,0))'
							])
						}}
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
							Try Clothes On
							<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								{' '}for Confident Shopping
							</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl">
							Our premium Chrome extension uses AI to show you exactly how clothes will look on your body before you buy
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<button 
								onClick={onShowVideo}
								className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Watch Demo
							</button>
						</div>
					</motion.div>
					
					{/* Phone Container - Above text */}
					<div className="relative z-30 pointer-events-none flex items-center justify-center">
						
						{/* Phase 1: Transparent Alex OVER text (0.00-0.20) */}
						<motion.div
							className="absolute"
							style={{
								scale: useTransform(scrollYProgress, [0, 0.20], [1, 1.15]),
								y: useTransform(scrollYProgress, [0, 0.20], [0, -20]),
								opacity: useTransform(scrollYProgress, [0, 0.18, 0.32], [1, 1, 0]),
								transformOrigin: 'center'
							}}
						>
							<img 
								src={alexTransparent} 
								alt="Alex transparent"
								className="w-96 h-auto object-contain"
							/>
						</motion.div>
						
						{/* Phase 2: Center Phone (0.18-0.32) - Same position as transparent Alex */}
						<motion.div
							className="absolute"
							style={{
								opacity: useTransform(scrollYProgress, [0.18, 0.32], [0, 1]),
								scale: useTransform(scrollYProgress, [0.20, 0.32], [1.15, 1.00]),
								y: useTransform(scrollYProgress, [0.20, 0.32], [-20, 0]),
								transformOrigin: 'center'
							}}
						>
							<PhoneFrame 
								src={alexBefore} 
								alt="Alex before"
								tilt={{ x: 1.5, y: -4, z: -0.8 }}
								className="w-64 md:w-72"
							/>
						</motion.div>
						
						{/* Phase 3: Three Phones (0.32-0.80) */}
						<motion.div
							className="absolute flex items-center justify-center gap-4 md:gap-8"
							style={{
								opacity: useTransform(scrollYProgress, [0.32, 0.48, 0.64, 0.80], [0, 1, 1, 0]),
								y: clusterY,
								scale: clusterScale
							}}
						>
							{/* Left Phone */}
							<motion.div
								style={{
									x: useTransform(scrollYProgress, [0.32, 0.48], ['-38vw', '-14vw']),
									rotateZ: useTransform(scrollYProgress, [0.32, 0.48], [-6, -2]),
									opacity: useTransform(scrollYProgress, [0.32, 0.48], [0, 1])
								}}
								className="hidden md:block"
							>
								<PhoneFrame 
									src={alexR1} 
									alt="Alex try-on 1"
									tilt={{ x: 1.5, y: -4, z: -2 }}
									className="w-64"
								/>
							</motion.div>
							
							{/* Center Phone */}
							<motion.div
								style={{
									scale: useTransform(scrollYProgress, [0.32, 0.48], [1.00, 1.00]),
									y: useTransform(scrollYProgress, [0.32, 0.48, 0.64, 0.80], [0, 0, 6, 12])
								}}
							>
								<PhoneFrame 
									src={alexBefore} 
									alt="Alex before"
									tilt={{ x: 1.5, y: -4, z: -0.8 }}
									className="w-64 md:w-72"
								/>
							</motion.div>
							
							{/* Right Phone */}
							<motion.div
								style={{
									x: useTransform(scrollYProgress, [0.32, 0.48], ['38vw', '14vw']),
									rotateZ: useTransform(scrollYProgress, [0.32, 0.48], [6, 2]),
									opacity: useTransform(scrollYProgress, [0.32, 0.48], [0, 1])
								}}
								className="hidden md:block"
							>
								<PhoneFrame 
									src={alexR2} 
									alt="Alex try-on 2"
									tilt={{ x: 1.5, y: -4, z: 2 }}
									className="w-64"
								/>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
		)
	} catch (error) {
		console.error('HeroSequence error:', error)
		setHasError(true)
		return null
	}
}

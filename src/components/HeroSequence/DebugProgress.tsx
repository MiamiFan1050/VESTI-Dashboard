import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface DebugProgressProps {
	targetRef: React.RefObject<HTMLElement>
}

export function DebugProgress({ targetRef }: DebugProgressProps) {
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end end']
	})

	const progress = useTransform(scrollYProgress, [0, 1], [0, 100])

	return (
		<div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
			<motion.div 
				className="h-full bg-purple-600"
				style={{ width: progress }}
			/>
		</div>
	)
}


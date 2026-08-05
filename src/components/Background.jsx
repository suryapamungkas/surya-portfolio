import { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])

	useEffect(() => {
		let requestId

		const handleScroll = () => {
			const newScroll = window.pageYOffset

			const initialPositions = [
				{ x: -4, y: 0 },
				{ x: -4, y: 0 },
				{ x: 20, y: -8 },
				{ x: 20, y: -8 },
			]

			blobRefs.current.forEach((blob, index) => {
				const initialPos = initialPositions[index]

				// Calculating movement in both X and Y direction
				const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340 // Horizontal movement
				const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40 // Vertical movement

				const x = initialPos.x + xOffset
				const y = initialPos.y + yOffset

				// Apply transformation with smooth transition
				blob.style.transform = `translate(${x}px, ${y}px)`
				blob.style.transition = "transform 1.4s ease-out"
			})

			requestId = requestAnimationFrame(handleScroll)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			cancelAnimationFrame(requestId)
		}
	}, [])

	return (
		<div className="fixed inset-0 ">
			<div className="absolute inset-0">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-zinc-800/10 to-zinc-900/10 blur-[120px] opacity-50" />
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-zinc-800/10 to-slate-900/10 blur-[120px] opacity-50 hidden sm:block" />
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-zinc-900/10 to-zinc-800/10 blur-[120px] opacity-50" />
				<div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_yixdvy.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
			</div>
		</div>
	)
}

export default AnimatedBackground

import { useRef, useEffect, useState } from "react";

export default function useOnScreen(ref) {
	const [isIntersecting, setIntersecting] = useState(false)
	const observer = useRef();

	useEffect(() => {
		// This is to get it working in next js.
		observer.current = new IntersectionObserver(
			([entry]) => setIntersecting(entry.isIntersecting)
		)
	}, []);

	useEffect(() => {
		observer.current.observe(ref.current)
		return () => { observer.current.disconnect() }
	}, [ref])

	return isIntersecting
}


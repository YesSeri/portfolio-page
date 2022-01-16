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

export function useAddClassOnVisible(ref, classToAdd, classArr) {
	const [isIntersecting, setIntersecting] = useState(false)
	const observer = useRef();

	const [classes, setClasses] = useState(classArr)
	const mounted = useRef(false)
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else {
			if (isIntersecting) {
				setTimeout(() => {
					setClasses(c => [...c, classToAdd]);
				}, 500);
			}
		}
	}, [isIntersecting, classToAdd])

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

	return classes;
}
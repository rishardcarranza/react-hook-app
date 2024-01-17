import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ( { quote, author } ) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    // En teoria se usa para esperar que el componente sea renderizado. Se puede usar el useEffect si es posible
    useLayoutEffect(() => {
        // console.log(pRef.current.getBoundingClientRect())

        const { height, width } = pRef.current.getBoundingClientRect();

        setBoxSize({ width, height })

    }, [quote])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p className="mb-2" ref={ pRef }>{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
            
            <code>{ JSON.stringify(boxSize) }</code>

            <br />
        </>
    )
}

import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y :0 })

    useEffect(() => {
    //   console.info('Message mounted')
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            // console.warn(coords)
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove );
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove );
      }
    }, [])
    


  return (
    <>
        <h3>Usuario ya existe</h3>

        {/* <p> */}
        { JSON.stringify(coords) }
        {/* </p> */}
    </>
  )
}

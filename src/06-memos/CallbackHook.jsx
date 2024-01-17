import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const handleIncrement = useCallback(
      (value) => {
        setCounter( (val) => val + value )
      },
      [],
    )
    

    // const handleIncrement = () => {
    //     setCounter( counter + 1 )
    // }

    return (
        <>
            <h1>useCallBack Hook: { counter }</h1>

            <ShowIncrement increment={ handleIncrement } />
        </>
    )
}

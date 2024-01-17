
import { memo } from 'react';
 
export const Small = memo(({ value }) => {

    console.info('Me volvi a generar...')

    return (
        <small>{ value }</small>
    )
})

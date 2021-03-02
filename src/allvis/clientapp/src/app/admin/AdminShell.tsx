import * as React from 'react'
import cx from 'classnames'
import {Twitter} from '../slideShow/TwitterAPI/Twitter'
import {Linkdin}  from './Linkdin'

export const AdminShell = () => {

     React.useEffect(() => {
        const loaddata = async() => {
            const result = await fetch('api/Twitter')
            console.log(await result.json())
        }
        loaddata()
     }, [])

    return(

        <div>
            <Linkdin/>

        </div>
    )
}
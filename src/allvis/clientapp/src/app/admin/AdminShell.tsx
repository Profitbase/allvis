import * as React from 'react'
import cx from 'classnames'
import {Twitter} from '../slideShow/TwitterAPI/Twitter'
<<<<<<< HEAD
=======
import {Linkdin}  from './Linkdin'
>>>>>>> 1836a3e3b03c8736ff6104352e7c576cadc61f2f

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
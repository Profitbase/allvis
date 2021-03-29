import * as React from 'react'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import {NewsVGOgE24} from '../slideShow/News/GetNewsVGogE24'
import {NewsNRK} from '../slideShow/News/GetNewsNRK'
import NewsSources from '../slideShow/News/NewsSources'



export const AdminShell = () => {

    return(

        <div>
            <NewsVGOgE24 kanal = {NewsSources.VG_News}/>
            <NewsNRK kanal = {NewsSources.NRK_News} />
            <NewsNRK kanal = {NewsSources.NRK_sport} />
            <NewsNRK kanal = {NewsSources.NRK_Rogaland} />
            AdminShell
            hei
        </div>
    )
}
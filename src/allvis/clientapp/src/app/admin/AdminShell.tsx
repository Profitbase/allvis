
import cx from 'classnames'
import styles from "./AdminShell.module.scss"
import logo from './logo.svg'

import { useState, useEffect } from 'react'
import {NewsVGOgE24} from '../slideShow/News/GetNewsVGogE24'
import {NewsNRK} from '../slideShow/News/GetNewsNRK'
import NewsSources from '../slideShow/News/NewsSources'
import React, { Component } from 'react';
//import { Card, FormControl, FormLabel, ListGroup } from 'react-bootstrap';


export const AdminShell = () => {
    
    const [showHideInput,setShowHideInput] = useState(true)
    const [showHideInput2,setShowHideLName] = useState(true)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div className={cx(styles.informationboard)}>
                <img className={cx(styles.logo)} src={logo} alt="Logo" />
                    <h1 className={cx(styles.title)}>ALLVIS ADMIN SIDE</h1>
                </div>
                    <div className={cx(styles.text)}>
                        <h2>Administrer lysbildefremvisningen</h2>
                        <div className="md-radio">
                            <input id="1" type="radio" name="g" checked></input>
                            <label htmlFor="1">Dato</label>
                        </div>
                        <div className="md-radio">
                            <input id="2" type="radio" name="g" checked ></input>
                            <label htmlFor="2">Klokke</label>
                        </div>
                    <div>
            {showHideInput && (
            <tr>
            <td>Værlokasjon :</td>
            <td>
            <input type="text" id="Input" />
            </td>
            </tr>
            )}
        {showHideInput2 && (
        <tr>
        <td>Lunsj:</td>
        <td>Mandag:</td>
        <input type="text" id="Input2" />
       
        <td>Tirsdag :</td>
        <input type="text" id="Input2" />
        
        <td>Onsdag :</td>
        <td>
        <input type="text" id="Input2" />
        </td>
        
        <td>Torsdag :</td>
        <td>
        <input type="text" id="Input2" />
        </td>
        <td>Fredag :</td>
        <td>
        <input type="text" id="Input2" />
        </td>
        </tr>
        )} 

        <tr>
        <td>
        <button onClick={()=>setShowHideInput(!showHideInput)}>Været</button>
        </td>
        <td>
        <button onClick={()=>setShowHideLName(!showHideInput2)}>Lunsj</button>
        </td>
        </tr>
        <tr>
        <td>
        <button>Submit</button>
        </td>
        </tr>
        </div>
        </div>
        </div>
)} 
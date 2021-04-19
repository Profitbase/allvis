
import cx from 'classnames'
import styles from "./AdminShell.module.scss"
import logo from './logo.svg'

import { useState, useEffect } from 'react'
import {NewsVGOgE24} from '../slideShow/News/GetNewsVGogE24'
import {NewsNRK} from '../slideShow/News/GetNewsNRK'
import NewsSources from '../slideShow/News/NewsSources'
import React, { Component } from 'react';
//import { Card, FormControl, FormLabel, ListGroup } from 'react-bootstrap';




class AdminShell extends Component<{},any>{
    constructor(props: any) {
        super(props);
        this.state = {
          showHideInput: true,
          showHideLName: true
        };
        this.hideComponent = this.hideComponent.bind(this);
      }
    
      hideComponent(name: string) {
        switch (name) {
          case "showHideInput":
            this.setState({ showHideInput: !this.state.showHideInput });
            break;
          case "showHideInput2":
            this.setState({ showHideInput2: !this.state.showHideInput2 });
            break;
          
        }
      }

    render() {
        const { showHideInput, showHideInput2 } = this.state;
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
                    
                    <table>
                    {showHideInput && (
                        <tr>
                        <td>Været :</td>
                        <td>
                            <input type="text" id="Input" />
                        </td>
                        </tr>
                    )}
                    {showHideInput2 && (
                        <tr>
                            <td>Lunsj :</td>
                        <td>Mandag :</td>
                        <td>
                            <input type="text" id="Input2" />
                        </td>
                        <td>Tirsdag :</td>
                        <td>
                            <input type="text" id="Input2" />
                        </td>
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
                        <button onClick={() => this.hideComponent("showHideInput")}>
                            Været
                        </button>
                        </td>
                        <td>
                        <button onClick={() => this.hideComponent("showHideInput2")}>
                            Lunsj
                        </button>
                        </td>
                    </tr>
                    </table>
                        <tr>
                        <td>
                            <button>Submit</button>
                        </td>
                        </tr>
                </div> 
            </div>
           

        );
       }
    }

export default AdminShell;
        <div>
            <NewsNRK kanal = {NewsSources.NRK_sport} /> 
            <NewsNRK kanal = {NewsSources.NRK_News} />
            <NewsNRK kanal = {NewsSources.NRK_Rogaland} />
            <NewsVGOgE24 kanal = {NewsSources.E24_Aksjetips}/>
            <NewsVGOgE24 kanal = {NewsSources.E24_BorsOgFinans}/>
            <NewsVGOgE24 kanal = {NewsSources.VG_Tech}/>
            <NewsVGOgE24 kanal = {NewsSources.VG_Sport}/>
            <NewsVGOgE24 kanal = {NewsSources.VG_News}/>
        </div>
    


    
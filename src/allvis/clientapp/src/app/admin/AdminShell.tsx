import React, { Component } from "react";
import { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

export const AdminShell= () => {
    const [lunchMonday, setlunchMonday] = useState<string>();
    const [lunchTuesday, setlunchTuesday] = useState<string>();
    const [lunchWensday, setlunchWensday] = useState<string>();
    const [lunchThursday, setlunchThursday] = useState<string>();

    const post = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                lunchMonday: lunchMonday,
                lunchTuesday: lunchTuesday,
                lunchWensday: lunchWensday,
                lunchThursday: lunchThursday
            }),
            
        };

       
        
        
        fetch(`api/Database`, requestOptions)
            .then((response) => response.text())
            .then((data) => {

            })
    }

    return (
        <div>
            <body>
                <form action="#" method="POST">
                    <TextField onChange={(e) => setlunchMonday(e.target.value)}> </TextField>
                    <br>
                    </br>
                    <TextField onChange={(e) => setlunchTuesday(e.target.value)}> </TextField>
                    <br>
                    </br>
                    <TextField onChange={(e) => setlunchWensday(e.target.value)}> </TextField>
                    <br>
                    </br>
                    <TextField onChange={(e) => setlunchThursday(e.target.value)}> </TextField>
                    <br>
                    </br>
                    <Button onClick={() => post()}> Legg til</Button>
                </form>
            </body>
        </div>
    );
}



function requestOptions(arg0: string, requestOptions: any) {
    throw new Error("Function not implemented.");
}


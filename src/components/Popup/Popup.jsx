import React from "react";
import { useState } from "react";
import "./Popup.css";
import { x } from "./close-outline.js"


const Popup = ({ clicked, setClicked, robotAdd }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    let height = id ? '470px' : '320px';
    let robot = {
        id: id,
        name: name,
        email: email
    }

    const addingRobot = () => {
        if (id && name && email) {
            robotAdd(robot);
            setClicked()
            setId('');
            setName('');
            setEmail('');
        }
        else
            alert('Please fill all the fields!')
    }

    return (
        <>
            {clicked && (
                <div className="Popup bg-light-green dib br3 pa3 ma2 bw2 shadow-5 flex flex-column" style={{ height: height }}>
                    <div onClick={() => {
                        setClicked(); setId(''); setName(''); setEmail('')
                    }}>
                        {x}
                    </div>
                    {id && <img src={`https://robohash.org/${id}`} className="poza" alt="robot" />}
                    <div className="tc">
                        <div className="flex justify-center flex-column">
                            <input type="number" placeholder="Id..." className="w-150 h2 f6" style={{ marginTop: '60px' }} onChange={(e) => setId(e.target.value)} />
                            <input placeholder="Name..." className="mt2 w-150 h2 f6" onChange={(e) => setName(e.target.value)} />
                            <input placeholder="Email..." className="mt2 w-150 h2 f6" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="mt5 w-80 h2 f6" id="button-add" onClick={addingRobot}>Add</button>
                    </div>
                </div>
            )}
        </>

    );
};

export default Popup;
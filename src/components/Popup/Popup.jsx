import React from "react";
import { useState } from "react";
import "./Popup.css";

const Popup = ({ clicked }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    let height = id ? '400px' : '300px';

    return (
        <>
            {clicked && (
                <div className="Popup bg-light-green dib br3 pa3 ma2 bw2 shadow-5 flex flex-column" style={{height:height}}>
                    {id && <img src={`https://robohash.org/${id}`} className="poza" alt="robot"/>}
                    <div className="tc">
                        <div className="flex justify-center flex-column">
                            <input type="number" placeholder="Id..." className="mt2 w-150 h2 f6" onChange={(e) => setId(e.target.value)} />
                            <input placeholder="Name..." className="mt2 w-150 h2 f6" />
                            <input placeholder="Email..." className="mt2 w-150 h2 f6" />
                        </div>
                        <button className="mt5 w-80 h2 f6" id="button-add">Add</button>
                    </div>
                </div>
            )}
        </>

    );
};

export default Popup;
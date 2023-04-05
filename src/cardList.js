import React from "react";
import { Card } from "./card.js";

const CardList = (props) => {
    const { robots,search } = props;
    const cardArr = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} search={search}/>
    });

    return (
        <div className="grid centre tc">
            {cardArr};
        </div>

    );
};

export { CardList };

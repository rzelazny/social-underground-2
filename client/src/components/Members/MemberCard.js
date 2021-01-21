import React, { useState } from 'react';
import MemberItem from "./MemberItem";
import "./MemberCard.css";
import $ from "jquery";

function MemberCard() {
    const [email, setEmail] = useState(null);
    const [win, setWin] = useState();
    const [lose, setLose] = useState(); 

    function stats() {
        $.get("/api/UserStats").then((results) => {
            console.log(results)
            setEmail(results.email)
            setWin(results.blackjack_win)
            setLose(results.blackjack_lose)
        })
    }
    stats();

    // function MyComponent() {
    //     const [error, setError] = useState(null);
    //     const [isLoaded, setIsLoaded] = useState(false);
    //     const [items, setItems] = useState([]);

    //     // Note: the empty deps array [] means
    //     // this useEffect will run once
    //     // similar to componentDidMount()
    //     useEffect(() => {
    //         fetch("/api/UserStats")
    //             .then(res => res.json())
    //             .then(
    //                 (result) => {
    //                     setIsLoaded(true);
    //                     setItems(result);
    //                 },
    //                 // Note: it's important to handle errors here
    //                 // instead of a catch() block so that we don't swallow
    //                 // exceptions from actual bugs in components.
    //                 (error) => {
    //                     setIsLoaded(true);
    //                     setError(error);
    //                 }
    //             )
    //     }, [])

    //     if (error) {
    //         return <div>Error: {error.message}</div>;
    //     } else if (!isLoaded) {
    //         return <div>Loading...</div>;
    //     } else {
    //         return (
    //             <ul>
    //                 {items.map(item => (
    //                     <li key={item.id}>
    //                         {item.name} 
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     }
    // }
    // MyComponent();

    return (
        <div className="cards">
            <h1>Your Stats</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <MemberItem
                            text= {email}
                            text2= {win}
                            text3= {lose}
                            // path="/member"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
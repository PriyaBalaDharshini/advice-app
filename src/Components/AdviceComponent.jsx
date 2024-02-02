import React, { useEffect, useState } from 'react'
import "./Advice.css"

function AdviceComponent() {
    const [advice, setAdvice] = useState("Your daily advice app....");
    const [count, setCount] = useState(0)


    async function changeAdvise() {
        let res = await fetch("https://api.adviceslip.com/advice");
        let data = await res.json();
        setAdvice(data.slip.advice);
        setCount(count + 1);
    }



    return (
        <div>
            <div className="adviceApp">
                <h2>Advice App</h2>
                <h3>{advice}</h3>
                <button onClick={changeAdvise}>Click for Advice</button>
                <p>You got <b>{count}</b> <span>{count && count > 1 ? "advices" : "advice"}</span> today.</p>
                <h6>Made By <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/">Priyadharshini</a> with
                    <span style={{ color: "red" }}> &#10084;</span></h6>
            </div>



        </div>
    )
}

export default AdviceComponent
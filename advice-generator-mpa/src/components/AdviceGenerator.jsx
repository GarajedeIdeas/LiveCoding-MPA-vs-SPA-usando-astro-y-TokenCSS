import { useState } from "react"
import getAdvice from "../getAdvice";
import '../main.css'

const AdviceGenerator = ({advice}) => {
    const [response, setResponse] = useState(advice)

    const onClickButton = async () => {
        const response = await getAdvice()
        setResponse(response)
    }

    return (
        <div className="advice-container">
            <label>{response}</label>
            <button onClick={() => onClickButton()}>Get advice</button>
        </div>
    )

}

export default AdviceGenerator
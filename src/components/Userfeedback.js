import starIcon from '../assets/icon-star.svg';
import illustration from '../assets/illustration-thank-you.svg';
import {useState} from 'react';

export default function UserFeedback(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [itemNumber, setItemNumber] = useState("")

    const Button = ({number}) => {
        return(
            <button onClick={() => setItemNumber(number)}>{number}</button>
        )
    }

    return(
        <>
            {!isSubmitted && <div className="container">
                <div className="star">
                    <img src={starIcon} alt="star icon" />
                </div>
                <p className="question">How did we do?</p>
                <p className="appreciation">
                    Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!
                </p>
                <div className="ratings">
                    <Button number={1} />
                    <Button number={2} />
                    <Button number={3} />
                    <Button number={4} />
                    <Button number={5} />
                </div>
                <button className='btn' onClick={() => setIsSubmitted(prevState => !prevState)}>SUBMIT</button>
            </div>}
            {isSubmitted && <ThankYou setIsSubmitted={setIsSubmitted} itemNumber={itemNumber} />}
        </>
    )   
}

const ThankYou = ({setIsSubmitted, itemNumber}) => {
    return(
        <div className="container thank-you">
            <div className="illustration">
                <img src={illustration} alt="illustration" />
            </div>
            <div className="rating-feedback">You selected {itemNumber} out of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
            <button className='btn' onClick={() => setIsSubmitted(prevState => !prevState)} >Rate Again</button>
        </div>
    )
}
    

    
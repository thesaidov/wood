import './question.scss'
import Button from './button'

export default function Question() {
  return (
    <div className="question">
        <h1>Any questions?</h1>
        <div className="bottom">
            <div className="left">
                <form>
                    <input type="text" name="name" id="name" placeholder='Your name'/>
                    <input type="phone" name="phone" id="phone" placeholder='Your telephone number'/>
                    <textarea placeholder='Your question'rows={8}></textarea>
                    {/* <button type="submit">Send</button> */}
                    <Button text="Send"/>
                </form>
            </div>
            <div className="right">
                <p>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
                <img src="../../public/to'nka.png" alt="to'nka"/>
            </div>
        </div>
    </div>
  )
}

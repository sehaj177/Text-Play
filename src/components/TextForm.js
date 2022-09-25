import React, { useState } from 'react'
import './TextForm.css'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log('clicked uppercase ' + text);
        let newText = text.toUpperCase();
        setText(newText)


    }
    const handleDownClick = () => {
        //console.log('clicked lowercase ' + text);
        let newText = text.toLowerCase();
        setText(newText)


    }
    const handleClClick = () => {
        //console.log('clicked lowercase ' + text);
        let newText = "";
        setText(newText)


    }

    const handleOnChange = (event) => {
        console.log('clicked on change');
        setText(event.target.value);

    }
   
    //setText("helo");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <div className="buttonss">
                    <button className='btn btn-primary my-1' onClick={handleUpClick}>Convert to uppercase</button> <></>
                    <button className='btn btn-secondary my-1' onClick={handleDownClick}>Convert to lowercase</button> <></>
                    <button className='btn btn-warning my-1' onClick={handleClClick}>Clear content</button>
                </div>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words, {text.length} characters. </p>
                <p> <strong>Average time you might take to read this is : {0.008 * text.split(" ").length} minutes. </strong></p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the text box to preview here."}</p>
            </div>
        </>
    )
}

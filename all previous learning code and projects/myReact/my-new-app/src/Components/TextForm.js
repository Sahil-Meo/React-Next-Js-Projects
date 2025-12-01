import React, { useState } from 'react'


function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase!", 'success')
    }

    const handledownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", 'success')

    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleTextCopy = () => {

        navigator.clipboard.writeText(text)
        props.showAlert("Text Copy!", 'success')

    }

    const handleTextClear = () => {

        setText("")
        props.showAlert("Text Cleared!", 'success')

    }

    const handleExtraSpace = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra Spaces Removed!", 'success')

    }
    return (
        < >
            <div className='container' style={{ color: props.mode === 'dark' || props.mode === 'success' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' || props.mode === 'success' ? 'grey' : 'white', color: props.mode === 'dark' || props.mode === 'success' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" onClick={handleUpClick} className={`btn btn-${props.mode === 'dark' || props.mode === 'success' ? props.mode : 'primary'}`}>UpperCase</button>
                <button disabled={text.length === 0} type="button" onClick={handledownClick} className={`btn mx-2 btn-${props.mode === 'dark' || props.mode === 'success' ? props.mode : 'primary'}`}>LowerCase</button>
                <button disabled={text.length === 0} type="button" onClick={handleTextCopy} className={`btn mx-2 btn-${props.mode === 'dark' || props.mode === 'success' ? props.mode : 'primary'}`}>Copy Text</button>
                <button disabled={text.length === 0} type="button" onClick={handleTextClear} className={`btn mx-2 btn-${props.mode === 'dark' || props.mode === 'success' ? props.mode : 'primary'}`}>Clear Text</button>
                <button disabled={text.length === 0} type="button" onClick={handleExtraSpace} className={`btn mx-2 btn-${props.mode === 'dark' || props.mode === 'success' ? props.mode : 'primary'}`}>Remove Spaces</button>
            </div>
            <div className='container my-5 border' style={{ color: props.mode === 'dark' || props.mode === 'success' ? 'white' : 'black' }}>
                <h3>Word & Char & time</h3>
                <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} : words & {text.trim() === "" ? 0 : text.length} : Char & time : {0.008 * text.trim().split(/\s+/).length}</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : 'Enter your text to preview!'}</p>
            </div>

        </>
    )
}

export default TextForm

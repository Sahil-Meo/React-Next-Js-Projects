import React, { useState, useCallback, useEffect, useRef } from 'react'
function App() {
    const [numAllowed, setNumAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [length, setLength] = useState(8)
    const [password, setPassword] = useState('')

    const passwordGenrator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if (numAllowed) { str += '0123456789' }
        if (charAllowed) str += '~!@#$%^&*-'

        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, numAllowed, charAllowed, setPassword])

    const copyToClipboard = () => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 5)
        window.navigator.clipboard.writeText(password)
    }
    //useRef hook
    const passwordRef = useRef(null)

    useEffect(() => {
        passwordGenrator();
    }, [length, numAllowed, charAllowed, passwordGenrator])

    return (
        <>
            <div className='w-50 mx-auto my-4 bg-black p-4 text-white rounded-3'>
                <h1 className="text-3xl text-center text-white font-bold">
                    Password Genrator!
                </h1>
                <div className='my-3'>

                    <div className='d-flex'>
                        <input
                            type="text"
                            value={password}
                            className="form-control mw-75"
                            id="exampleInputEmail1"
                            placeholder="Password"
                            ref={passwordRef}
                            readOnly />
                        <button type='button' onClick={copyToClipboard} className='btn btn-primary'>Copy</button>
                    </div>

                    <div className='d-flex item-center gap-3 my-4'>
                        <input type="range" defaultValue={length} min={6} max={100} onChange={(e) => { setLength(e.target.value) }} className="range bg-light" />
                        <label>length : {length}</label>
                        <div>
                            <input type="checkbox"
                                defaultChecked={numAllowed}
                                onChange={() => { setNumAllowed((prev) => !prev) }}
                                id='radio' />
                            <label htmlFor="radio">Number Allowed</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                defaultChecked={charAllowed}
                                onChange={() => { setCharAllowed((prev) => !prev) }}
                                id='radio2' />
                            <label htmlFor="radio2">Char Allowed</label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App

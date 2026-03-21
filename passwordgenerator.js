
import React, { useCallback, useEffect, useState } from 'react';
function PasswordGenerator(){
    const [password,setPassword]=useState('');
    const[length,setlength]=useState(12);
    const[includeNumbers,setIncludeNumbers]=useState(false);
    const[includeSymbols,setIncludeSymbol]=useState(false);

    const generatePassword=()=>{
        let character='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(includeNumbers)character+='0123456789';
        if(includeSymbols)character+='!@#$%^&*()_+';

        let newPassword=' ';
        for(let i=0;i<length;i++){
           newPassword += character.charAt(
                Math.floor(Math.random() * character.length));
        }
        setPassword(newPassword);

    };
    useEffect(()=>{generatePassword()},[length,includeNumbers,includeSymbols])
    useCallback(()=>{generatePassword()},[length,includeNumbers,includeSymbols])

    const copyToClipboard=()=>{
        navigator.clipboard.writeyexy(password);
        alert('password copied to clipbpard');
    }

   return(
     <div className="password-generator">
            <h1>Random Password Generator</h1>
            <div>
                <label>Password Length:</label>
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setlength(parseInt(e.target.value))}
                    min="1"
                    max="32"
                />
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}// false 
                        onChange={
                            () => setIncludeNumbers(!includeNumbers)
                        }
                    />
                    Include Numbers
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={() => setIncludeSymbol(!includeSymbols)}
                    />
                    Include Symbols
                </label>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            <div>
                <input type="text" value={password} readOnly />
                <button onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    );
}

export default PasswordGenerator;
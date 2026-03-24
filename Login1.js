import { useState } from "react";

import Index from './Routing/index'



export default function MyLogin() {

    let [username, setUser] = useState('Default'); 
    let [showComp, setVisible] = useState(false);
    function textReceiver(e) {
        console.log(e.target.value)
        setUser(e.target.value)
    }

    function validate(e) {
      

        if (username == 'iet') {
          
            setVisible(true);
        } else {
            alert("Invalid User")
        }
        e.preventDefault();   

    }




    return <>
       
        <div>

            {showComp ? (<Index user={username}></Index>) : (
                <form onSubmit={validate} action="">
                    Enter User Name <input type="text" name="username"
                        onChange={textReceiver}
                        value={username}

                    />
                    <input type="submit" value={'Login'} />
                </form>
            )
            }


        </div>




    </>



}
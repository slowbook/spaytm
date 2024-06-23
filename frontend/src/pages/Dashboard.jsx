import {Appbar} from "./AppBar"
import {Users} from "./Users"
import {Balance} from "./Balance"

export const Dashboard =()=>{
return <div>
    <Appbar />
        <div> 
            <Balance value={"10,000"}/>
            <Users/>
        </div>
    </div>
}




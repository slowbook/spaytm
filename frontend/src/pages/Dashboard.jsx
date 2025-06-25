import {Appbar} from "./AppBar"
import {Users} from "./Users"
import {Balance} from "./Balance"
import { useEffect, useState } from "react"
import axios from "axios"

export const Dashboard =()=>{
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("https://spaytm1.onrender.com/api/v1/account/balance", {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
                setBalance(0);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    return <div>
        <Appbar />
        <div> 
            <Balance value={balance} loading={loading}/>
            <Users/>
        </div>
    </div>
}




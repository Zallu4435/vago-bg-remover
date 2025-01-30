import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [credit, setCredit] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const { getToken } = useAuth();

    const loadCreditsData = async () => {
        try {
            const token = await getToken()
            const { data } = await axios.get(backendUrl+'/api/user/credits', {headers: {token}})
            console.log('reached inside the app provider ')
            console.log(data, 'data from appprovider')
            console.log(token, 'token from provider ')
            if(data.success) {
                setCredit(data.credits)
                console.log(data.credits, 'jjiji')
            }
            console.log("outside the if from provider ")
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    const value = {
        credit, setCredit,
        loadCreditsData,
        backendUrl
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
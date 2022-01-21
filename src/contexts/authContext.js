import React ,{useContext,useState} from "react";

const AuthContext = React.createContext();

export function authContextVal(){
    return useContext(AuthContext);
}

export default function authProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const value = {
        currentUser
    }
  return(
       <AuthContext.Provider value={}>
        {children}
       </AuthContext.Provider>
    );
}

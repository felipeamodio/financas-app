import React, {useState, createContext} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState({
        name: 'Felipe',
        uid: '89388398q783q'
    });

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
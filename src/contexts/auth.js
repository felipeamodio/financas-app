import React, {useState, createContext} from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);

    //Cadastrar o usuário
    async function userSignUp(userEmail, userPassword, userName){
        await firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                userName: userName
            })
            .then(() => {
                let data = {
                    uid: uid,
                    userName: userName,
                    userEmail: value.user.userEmail,
                }
                setUser(data);
            })
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, userSignUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
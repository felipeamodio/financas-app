import React, {useState, createContext} from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [usuario, setUsuario] = useState(null);

    //Cadastrar o usuário
    async function userSignUp(email, password, name){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.usuario.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                userName: name
            })
            .then(() => {
                let data = {
                    uid: uid,
                    userName: name,
                    userEmail: value.usuario.email,
                }
                setUsuario(data);
            })
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!usuario, usuario, userSignUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
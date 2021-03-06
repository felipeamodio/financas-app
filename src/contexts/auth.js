import React, {useState, createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //manter logado
    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage();
    }, [])

    //Logar usuário
    async function userSignIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email
                }
                setUser(data);
                storageUser(data);
            }) 
        })
        .catch((error) => {
            alert(error.code)
        })
    }

    //Cadastrar o usuário
    async function userSignUp(email, password, nome){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email.trim(),
                }
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error) => {
            alert(error.code)
        })
    }

    //salvando dados no async storage
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    // deslogando usuário
    async function userSignOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, userSignUp, userSignIn, userSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
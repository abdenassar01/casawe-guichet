import { types } from "mobx-state-tree";

import instance from '../axios/axios';

const _loginAsync = async (userData) => {
    try{
        const result = await instance.post("/users/login", userData);
        return result; 
    }catch(ex){
        return ex;
    }  
}

const _registerAsync = async (user) => {
    try{
        const result = await instance.post("/users/register", user);
        return result;
    }catch(ex){
        return ex;
    }
}

function removeSessionToken(){
    sessionStorage.removeItem("token")
}

function saveToken(token){
    sessionStorage.setItem("token", token)
}

const User = types.model("User", {
    name: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    email: types.string,
    phone: types.optional(types.string, ""),
    paye: types.optional(types.string, ""),
    ville: types.optional(types.string, ""),
    avatar: types.optional(types.string, ""),
    adresse: types.optional(types.string, "")
}).actions(self => ({
    setUser(data){
        self.name = data.firstName;
        self.lastName = data.lastName
        self.email = data.email;
        self.phone = data.phone;
    },
    addAdress(newAdress){
        self.adresse = newAdress
    },
    addVille(newVille){
        self.ville = newVille
    },
    addAvatar(newAvatarUrl){
        self.avatar = newAvatarUrl
    },
    addPaye(newPaye){
        self.paye = newPaye
    }
}))

const UserStore = types.model("userStore", {
    user: types.maybe(User),
    token: types.optional(types.string, "")
}).actions(self => ({
    setToken(newToken){
        self.token = newToken
    },
    removeToken(){
        self.token = ""
    },
    setUser(newUser){
        self.user = newUser
    },
    async userLogin(userData){
        const result = await _loginAsync(userData);
        if(result.status === 200){
            saveToken(result.data.token);
            self.setUser(result.data.user);
            self.setToken(result.data.token)
            sessionStorage.setItem("isAuthentificated", true)
        }else{
            return result.response.data
        }  
    },
    async register(user){
        const result = await _registerAsync(user);
        if(result.status === 200){
            saveToken(result.data.token);
            self.setUser(result.data.user);
            self.setToken(result.data.token)
            sessionStorage.setItem("isAuthentificated", true)
        }else{
            sessionStorage.setItem("isAuthentificated", false)
            return result.response.data;
        } 
    },
    logout(){
        self.removeToken();
        removeSessionToken();
        sessionStorage.removeItem("isAuthentificated");
    }
})).views(self => ({
    get isAuthentificated(){
        return self.token ? true : false
    }
}))

let _rootStore;
export const useUserStore = () => {
    if(!_rootStore){
        _rootStore = UserStore.create({
            token: ""
        });
    }
    return _rootStore;
}
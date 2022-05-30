import { types } from 'mobx-state-tree';

import { get } from 'mobx';
import instance from '../axios/axios';

const _loginAsync = async (userData) => {
    const result = await instance.post("/users/login", userData);
   return result; 
}


const saveToken = (token) => {
    sessionStorage.setItem("token", token);
}

const removeToken = () => {
    sessionStorage.removeItem("token");
}

const User = types.model("user" ,{
    name: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    email: types.string,
    password: types.string,
    phone: types.optional(types.string, ""),
    paye: types.optional(types.string, ""),
    ville: types.optional(types.string, ""),
    avatar: types.optional(types.string, ""),
    adresse: types.optional(types.string, "") ,
    token: types.optional(types.string, "")
}).actions(self => ({
    // updateUser(newUser){
    //     self.name = newUser.name,
    //     self.lastName = newUser.lastName,
    //     self.phone = newUser.phone,
    //     self.password = newUser.password
    // },
    setUser(data){
        self.name = data.firstName;
        self.lastName = data.lastName
        self.email = data.email;
        self.phone = data.phone;
    },
    addPaye(paye){
        self.paye = paye
    }, 
    addVille(ville){
        self.ville = ville
    },
    addAdresse(adresse){
        self.adresse = adresse
    },
    addAvatar(avatarUrl){
        self.avatar = avatarUrl
    },
    setUserToken(newToken){
        self.token = newToken
    },
    removeUserToken(){
        self.token = ""
    },
    logout(){
        removeToken();
        self.removeUserToken()
    },
    async userLogin(userData){
        const result = await _loginAsync(userData);
        saveToken(result.data.token);
        self.setUser(result.data.user);
        self.setUserToken(result.data.token)
    }

})).views(self => ({
    get isLogin(){
       return !(self.token === "") 
    }
}))

let _user;
export const useUser = () => {
    if(!_user){
        _user = User.create({
            name: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            paye: "",
            ville: "",
            avatar: "",
            adresse: "",
            token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : ""
        })
    }
    return _user
} 
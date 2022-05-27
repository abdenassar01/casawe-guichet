import { types } from 'mobx-state-tree';

import axios from 'axios';

const _postUserAsync = async (userUsername, userPassword) => 
    axios.post("https://api.guichet.com/users/login", {
        email: userUsername,
        password: userPassword
    })
    .then(response => {
        // console.log(response.data)
        return response.data ;
    })
    .catch(error => error )


const saveToken = (token) => {
    sessionStorage.setItem("token", token);
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
    adresse: types.optional(types.string, "")   
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
    async login(username, password){
        const data = await _postUserAsync(username, password);
        saveToken(data.token);
        self.setUser(data.user);
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
            adresse: ""
        })
    }
    return _user
} 
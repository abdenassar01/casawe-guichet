import { types } from "mobx-state-tree";

import instance from "../axios/axios"

function checkSession(){
    return sessionStorage.getItem("token") ? true : false
}

async function cheCkWebService(token){
    try{
        const response = await instance.get("/users/me", {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
        if( response.status === 200 ){
            return true;
        }
        return false;
    }catch(ex){
        return false
    }  
}

const Utils = types.model({
    isAuthontificated: false
}).actions(self => ({
    setChecked(status){
        self.isChecked = status 
    },
    get status(){
        return self.isChecked
    }
}))

const UtilityStore = types.model({
  utils : types.maybe(Utils)
})
.actions(self => ({
    async check(token){
        self.utils.setChecked(checkSession())
        self.utils.setChecked(await cheCkWebService(token))
    },
    get isChecked(){
        self.check(sessionStorage.getItem("token"))
        return self.utils.isChecked
    }
}))

let _rootStore;
export const useUtils = () => {
    if(!_rootStore){
        _rootStore = UtilityStore.create({
            utils: {}
        })
    }
    return _rootStore;
}


import { types } from "mobx-state-tree";
import { get } from 'mobx';

const Alert = types.model({
    message: types.string,
    isSuccess: types.optional(types.boolean, false) 
}).actions(self => ({
    setMessage(newMessage){
        self.message = newMessage;
    },
    setStatus(status){
        self.isSuccess = status
    },
    ToggleSuccess(){
        self.isSuccess = !self.isSuccess
    },
    reset(e){
        self.message = "";
        self.isSuccess = false;
    }
})).views(self => ({
    get getMessage(){
        return self.message;
    },
    get status(){
        return self.isSuccess
    }
}))


let _alert;
export const useAlert = () => {
    if(!_alert){
        _alert = Alert.create({
            message: "Hey",
            isSuccess: false
        })
    }
    return _alert;
}

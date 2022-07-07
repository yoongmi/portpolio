interface LocalStorageAPI<T> {
    [key:string]: T
}

class LocalStorage<T>{
    private storage: LocalStorageAPI<T> = {}
    setItem(key:string, value:T){
        this.storage[key] = value;
    }
    getItem(key:string):T{
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

interface GeolocationAPI{
    (successFn: Function): void
    (successFn: Function, errorFn: Function): void
    (successFn: Function, errorFn: Function, optionsObj:object): void

    (success: Function):void
    (success: Function, error: Function):void
    (success: Function, error: Function, options:object):void

    (id:number):void
}

const getCurrentPosition:GeolocationAPI = (successFn,errorFn?,optionObj?) => {
    if(optionObj) { console.log(successFn,errorFn,optionObj) }
    else if(errorFn){ console.log(successFn,errorFn) }
    else { console.log(successFn) }
}

const watchPosition:GeolocationAPI = (success,error?,options?) => {
    if(options) { console.log(success,error,options) }
    else if(error){ console.log(success,error) }
    else { console.log(success) }
}

const clearWatch:GeolocationAPI = (id) =>{
    console.log(id)
}

import config from "../Config/Config";
import { Client, Account, ID } from "appwrite";


class Auth{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(config.appUrl).setProject(config.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const res = await this.account.create(ID.unique(),email,password,name);
            if(res){
                // if user exit the login;
                return this.login({email,password});
            }
            else{
                return res;
            }
        } catch (err) {
            console.log("Error in createAccount",err);
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (err) {
            console.log("Error in login",err);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (err) {
            console.log("Error in getCurrentUser",err);
        }
        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            console.log("Error in logOut",err);
        }
    }

}

const authService = new Auth();

export default authService;

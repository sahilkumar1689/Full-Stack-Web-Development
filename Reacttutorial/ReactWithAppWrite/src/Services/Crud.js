import config from "../Config/Config";
import { Client, Databases , Storage,ID } from "appwrite";

export class crud{
    client = new Client();
    db;
    bucket;
    constructor() {
        this.client.setEndpoint(config.appUrl).setProject(config.projectId);

        this.db = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.db.createDocument(config.databaseId,config.collectionId,slug,
                {title,content,featuredImage,status,userId}
            )
        } catch (err) {
            console.log("Error in createPost",err);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.db.updateDocument(config.databaseId,config.collectionId,slug,
                {title,content,featuredImage,status}
            )
        } catch (err) {
            console.log("Error in updatePost",err);
        }
    }

    async deletePost(slug){
        try {
            await this.db.deleteDocument(config.databaseId,config.collectionId,slug);
            return true;
        } catch (err) {
            console.log("Error in deletePost",err);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.db.getDocument(config.databaseId,config.collectionId,slug);
        } catch (err) {
            console.log("Error in deletePost",err);
            return false;
        }
    }

    async getAllPost(slug){
        try {
            return await this.db.listDocuments(config.databaseId,config.collectionId,
                [ Query.equal('status', "active")]
            );
        } catch (err) {
            console.log("Error in deletePost",err);
            return false;
        }
    }

    // Buckets:

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.bucketId,
                ID.unique(),
                file
            )
        } catch (err) {
            console.log("Error in uploadFile",err);
            return false;
        }
    }

    async deleteFile(fileid){
        try {
            await this.bucket.createFile(
                config.bucketId,
                fileid
            )
            return true;
        } catch (err) {
            console.log("Error in deleteFile",err);
            return false;
        }
    }

    previewFile(fileid){
       return this.bucket.getFilePreview(
            config.bucketId,
            fileid
        )
    }
};

const crudServices = new crud();

export default crudServices;
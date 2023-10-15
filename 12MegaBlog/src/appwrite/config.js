import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);    

    }
    //   "slug" is also called as Document ID
    
   // And also in this createDocument(,{}) it is a function taking parameters inside () and taking what needs to updated inside {}
 
    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug,
               {
                title,
                content,
                status,
                featuredImage,
                userId
               }
            )    
        } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);    
        }
    }

    async updatePost ( slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    status,
                    content,
                    title,
                    featuredImage
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
        }
    }

    async deletePost (slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
            return false;
        }
    }

    async getDocuments(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )    
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
            return false;
        }
    }

    // In listing all the documents by getPosts() func we can't do it simply because it will also list the posts which have  "inactive"  status, so we have to use "Queries" in this case and also, Queries can only be used if we have put indexing inside the database article.

    async getPosts ( queries = [Query.equal("staus" , "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                // [
                //     Query.equal("staus" , "active")
                // ]
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
            return false; 
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )   
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
            return false; 
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
            return false;
        }
    }

    getFilePreview(fileId ){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service
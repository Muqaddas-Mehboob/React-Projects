import config from "../config";
import { Client, ID, Storage } from "appwrite";

export class FileService {
    client = new Client();
    bucket;

    constructor() {
            this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId)

            this.bucket = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("File Upload Error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            console.log("Delete file Error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const fileService = new FileService();

export default fileService
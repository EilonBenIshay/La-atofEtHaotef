import { Post } from "../types/Post/Post";
import axiosInstance from "./axiosInstance";


export const postsApi = {
  getAllPosts: async (): Promise<Post[]> => {
    // eslint-disable-next-line no-useless-catch
    try {
      return (await axiosInstance.get("/Facebook")).data;
    } catch (error) {
      throw error;
    }
  }
}
import HomePage from "../pages/homePage/homePage";
import PostPage from "../pages/postPage/postPage";
import CreateNewPostPage from "../pages/createNewPostPage/createNewPost";


export interface route {
  path: string;
  name: string;
  component: React.FC;
}

export const routes: route[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/post",
    name: "post",
    component: PostPage,
  },
  {
    path: "/createPost",
    name: "createPost",
    component: CreateNewPostPage,
  }
]
import HomePage from "../pages/homePage/homePage";
import PostPage from "../pages/postPage/postPage";


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
]
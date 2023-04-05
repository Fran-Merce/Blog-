export const Routes = {
  HOME: {
    path: "/",
    name: "Home",
  },
  POST: {
    path: "/post/:id",
    name: "Post",
  },
  POSTS: {
    path: "/posts",
    name: "Posts",
  },
};

export type RouteType = {
  path: string;
  name: string;
};

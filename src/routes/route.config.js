import Dashboard from "../pages/dashboard";
import Communities from "../pages/communities";
import categories from "../pages/categories";
import categoryDetail from "../pages/categories/components/categoryDetail";
import users from "../pages/users";
import communityDetail from "../pages/communities/communityDetail";
import UserPostDetail from "../pages/users/userPostDetail";

export const mainRoutes = [
  {
    exact: true,
    path: "/dashboard",
    isPrivate: true,
    component: Dashboard,
  },
  {
    path: "/communities",
    isPrivate: true,
    component: Communities,
  },
  {
    exact: true,
    isPrivate: true,
    path: "/categories",
    component: categories,
  },

  {
    isPrivate: true,
    path: "/community/:slug",
    component: communityDetail,
  },
  {
    isPrivate: true,
    path: "/category/:slug",
    component: categoryDetail,
  },

  {
    isPrivate: true,
    path: "/users",
    component: users,
  },
  {
    isPrivate: true,
    path: "/post/:username",
    component: UserPostDetail,
  },
];

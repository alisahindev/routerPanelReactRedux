import Dashboard from "../pages/dashboard";
import Communities from "../pages/communities";
import categories from "../pages/categories";
import communityDetail from "../pages/communities/communityDetail";
import categoryDetail from "../pages/categories/components/categoryDetail";
import users from "../pages/users";

export const mainRoutes = [
  {
    path: "/dashboard",
    exact: true,
    isPrivate: true,
    component: Dashboard,
  },
  {
    path: "/communities",
    exact: true,
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
    path: "/communities/:slug",
    component: communityDetail,
  },
  {
    isPrivate: true,
    path: "/category/:slug",
    component: categoryDetail,
  },

  {
    isPrivate: true,
    exact: true,
    path: "/users",
    component: users,
  },
];

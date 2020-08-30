import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import categories from "./categories/reducer";
import communities from "./communities/reducer";
import selectedCommunity from "./communities/selectedCommunityReducer";
import selectedCategory from "./categories/selectedCategoryReducer";
import users from "./users/reducer";
import selectedUser from "./users/selectedUserReducer";
import auth from "./auth/reducer";
import userPosts from "./posts/reducer";
import loaderReducer from "./loader/reducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    allCategories: categories,
    allCommunities: communities,
    communityDetail: selectedCommunity,
    categoryDetail: selectedCategory,
    userDetail: selectedUser,
    allUsers: users,
    auth,
    userPosts,
    loader: loaderReducer,
  });

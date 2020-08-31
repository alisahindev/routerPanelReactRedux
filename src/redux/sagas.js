import { all } from "redux-saga/effects";
import categories from "./categories/saga";
import communities from "./communities/saga";
import users from "./users/saga";
import auth from "./auth/saga";
import posts from "./posts/saga";
import searching from "./search/saga";

export default function* rootSaga() {
  yield all([
    categories(),
    communities(),
    users(),
    auth(),
    posts(),
    searching(),
  ]);
}

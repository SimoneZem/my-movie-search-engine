import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { clearStore, getPostsApi } from "../app/actions";
import { removePost } from "../app/slice";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ getPostsApi, removePost, clearStore }, dispatch);
};

export default useActions;

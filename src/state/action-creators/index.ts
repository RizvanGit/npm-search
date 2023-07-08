import axios from "axios";
import { ActionType } from "../action-types";
import { UnionAction } from "../actions";
import { Dispatch } from "redux";

const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<UnionAction>) => {
    dispatch({ type: ActionType.SEARCH_REPOS });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        },
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOS_SUCCESS,
        payload: names,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOS_ERROR,
          payload: error.message,
        });
      }
    }
  };
};

export default searchRepositories;

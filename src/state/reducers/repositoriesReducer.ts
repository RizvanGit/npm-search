interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOS;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

type UnionAction =
  | SearchRepositoriesErrorAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesAction;

enum ActionType {
  SEARCH_REPOS = "search_repositories",
  SEARCH_REPOS_SUCCESS = "search_repositories_success",
  SEARCH_REPOS_ERROR = "search_repositories_error",
}

const reducer = (
  state: RepositoriesState,
  action: UnionAction,
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

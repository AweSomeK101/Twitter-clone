export default function Reducer (state, action) {
    if(action.type === "ADD_TWEET")
    {
        return {
            ...state,
            tweetList : [action.payload, ...state.tweetList]
        }
    }
    else return state;
}
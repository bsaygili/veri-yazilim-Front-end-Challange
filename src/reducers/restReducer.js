export const restReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return { ...state, restaurants: [...state, action.payload] };
    default:
      break;
  }
};

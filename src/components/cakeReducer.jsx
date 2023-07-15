import { BUILD_CAKE, BUY_CAKE } from "./cakeTypes";

const initialstate = {noOfCakes: 20};

const cakeReducer = (state = initialstate, action)=> {
    switch(action.type){
         case BUY_CAKE:
         return {
            ...state,
            noOfCakes: state.noOfCakes - 1,
         };

         case BUILD_CAKE:
         return {
            ...state,
            noOfCakes: state.noOfCakes + 1,
         };

         default:
            return state;

    }
}

export default cakeReducer
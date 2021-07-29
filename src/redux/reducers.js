import actions from './actions';
// import questions from '../../Questions'
// import {Submittheoption,Skiptheoption} from './Submit.utils'
const initState= {
    data:''

}

export default function SubmitHandler(state= initState, action){
    switch(action.type){
        case actions.FETCH_REQUEST:
            //console.log('get User success reducer', action.myUsers)
            return{
                ...state
            };
            case actions.GET_API_DATA:
            //console.log('get User success reducer', action.myUsers)
            return{
                ...state,
                data:action.data
            };
            default:
                return state;
    }

    
}
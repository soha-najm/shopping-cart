import React , {useReducer , createContext} from 'react';

const initialState={
// ye objecte k mahsoolati k user entekhab karde miad toosh
    selectedItems: [], 
    itemsCounter :0,
    total :0 ,
    checkout : false
}

const sumItems = (items) =>{
    const itemsCounter=items.reduce((total , product)=> total+ product.quantity , 0 );
    const total = items.reduce((total , product)=>total + product.price * product.quantity, 0).toFixed(2);
    return  {itemsCounter ,total}
}


const cartReducer = (state , action)=>{
    console.log(state);
    switch (action.type){
        case "ADD_ITEM":
            // age tooye sabade kharid nabud 
            if(!state.selectedItems.find(item => item.id===action.payload.id)){
                state.selectedItems.push({...action.payload , quantity:1})
            // payload va quantity push mishe dakhele selected
             // items  k tooye payload hamun category o description o ... hast
            }
            return{
                ...state , selectedItems:[...state.selectedItems], ...sumItems(state.selectedItems),
                checkout:false  
                // ye state jadido return mikonim k toosh etelaate jadide
                // state hast ham selected iteme oon ye array of objecte k 
                // toosh objecthaye jadid + mahsooli k rush click shode va 
                // quantity behesh ezafe shode
            }

        case "REMOVE_ITEM":
            // inja migim hameye item haro return kon joz oon itemi k 
            // idish ba id e item e click shode == bashe .yani amalan remove shode
            const newSelectedItems= state.selectedItems.filter(item => item.id !== action.payload.id);
            return{
                ...state , selectedItems:[...newSelectedItems], ...sumItems(newSelectedItems) 
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            // index e itemi ro tooye selected items behem bede 
            // k idish ba id e itemi k user roosh click karde yeki bashe ;
            state.selectedItems[indexI].quantity++;
            return{
                ...state, ...sumItems(state.selectedItems) 
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                    ...state, ...sumItems(state.selectedItems) 
                }

        case "CHECKOUT":
            return{
                selectedItems: [], 
                itemsCounter :0,
                total :0 ,
                checkout : true
            }
    
        case "CLEAR":
            return{
                selectedItems: [], 
                itemsCounter :0,
                total :0 ,
                checkout : false
            }

        default :
        return state;
    }
}


export const CartContext= createContext();


const CartContextProvider = ({children}) => {

// b useReducer ye function midim k miad baresi mikone
// k dar dispatch ch actioni ro call karde va miad oono
// anjam mide va rooye state e'mal mikone . 


    const [ state , dispatch ] = useReducer(cartReducer , initialState);


    return (
        // mikhaym b value ye object bedim
     <CartContext.Provider value={{state , dispatch}} >
        {children}
     </CartContext.Provider>
    );
};

export default CartContextProvider;

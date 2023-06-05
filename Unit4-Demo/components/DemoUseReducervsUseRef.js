const initialState = {
    additionalPrice: 0,
    phone: {
      price: 28300000,
      name: "iPhone 13 Pro Max 128GB",
      image: '../images/products/iphone-13-pro-max.jpg',
      accessories: []
    },
    listPhoneAcessories: [
      { id: 1, name: "Ốp lưng", price: 75000 },
      { id: 2, name: "Sạc không dây", price: 3150000 },
      { id: 3, name: "Sạc dự phòng AVA", price: 225000 },
      { id: 4, name: "Cáp 2 đầu MFI", price: 125000 }
    ]
};

const reducerAddingFeature = (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                // update price
                additionalPrice: state.additionalPrice - action.item.price,
                // delete item in feature array
                phone: { ...state.phone, accessories: state.phone.accessories.filter((x) => x.id !== action.item.id)},
                // adding againt item removed to list item
                listPhoneAcessories: [...state.listPhoneAcessories, action.item]
            };
        case 'ADD_ITEM':
            return {
                ...state,
                // update price
                additionalPrice: state.additionalPrice + action.item.price,
                // add new item to feature array
                phone: { ...state.phone, accessories: [...state.phone.accessories, action.item] },
                // delete added item from list
                listPhoneAcessories: state.listPhoneAcessories.filter((x) => x.id !== action.item.id)
            };
        default:
            return state;    
    }
}

function AddNewPhoneAcessory (){
    const [state, dispatch] = React.useReducer(reducerAddingFeature, initialState);
  
    const removeFeature = (item) => {
        dispatch({ type: 'REMOVE_ITEM', item });
    }
  
    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', item })
    }

    return(
        <div className="area">
            <div className="box phone">
                <figure className="pic">
                    <img src={state.phone.image} />
                </figure>
                <h2>{state.phone.name}</h2>
                <p>Tiền sản phẩm: <span className="price">{state.phone.price} </span> VND</p>                
            </div>
            <div className="box">
                <div className="content">
                    <h4>Các phụ kiện bạn có thể mua:</h4>
                    {state.listPhoneAcessories.length ? 
                    (
                    <ul type="1">
                        {state.listPhoneAcessories.map((item) => (
                        <li key={item.id}>
                            <button
                            onClick={() => addItem(item)}
                            className="button">Add</button>
                            {item.name} (+{item.price})
                        </li>
                        ))}
                    </ul>
                    ) : <p>Nice looking phone!</p>
                    }
                </div>    
                <div className="content">
                    <h4>Các phụ kiện bạn đã mua:</h4>
                    {/* Nếu Feature của phone được add thì hiển thị ds feature đã mua */}
                    {state.phone.accessories.length ? 
                    (
                        <ul type="1">
                        {state.phone.accessories.map((item) => (
                            <li key={item.id}>
                            <button
                                onClick={() => removeFeature(item)}
                                className="button">X
                            </button>
                            {item.name} (+{item.price})
                            </li>
                        ))}
                        </ul>
                    ) : <p>Sản phẩm bạn mua chưa có phụ kiện, hãy mua thêm phụ kiện nếu cần.</p>
                    }
                </div>
                <div className="content">
                <h4>
                    Tổng tiền phải trả: <span className="price">{state.phone.price + state.additionalPrice}</span> VND
                </h4>
                </div>
            </div>
        </div>
    );
}

//render component
ReactDOM.render( 
    <AddNewPhoneAcessory />, 
    document.getElementById("root") 
); 
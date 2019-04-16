
const initState = {
    titles: [{        
        description: 'Cool Description',
        format: 'Online',
        id: 1,
        title: 'Red Book',
        price: 20
    },
    {
        description: 'Cool Description',
        format: 'Online',
        id: 2,
        title: 'Red Book',
        price: 20
    }]
}


export interface ITitleState {
    title: string;
    description: string;
    format: string;
    id: number;
    price: number;
}

export interface ITitleListState {
    titles: ITitleState[]
}

const TitleReducer = (state: ITitleListState = initState, action: { type: string }) => {
    switch (action.type) {
        case 'GET_TITLES':
            return {
                ...state,
                titles: state.titles
            }
        default:
            return {
                ...state
            }
    }
};

export default TitleReducer;
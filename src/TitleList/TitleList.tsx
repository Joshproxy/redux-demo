import { connect } from 'react-redux';
import React from 'react';
import { Title } from '../Title/Title';
import { addItemToCart } from '../Actions/Actions'
import { ITitleState, ITitleListState } from '../Reducers/titleReducer';

interface ITitleListProps extends ITitleListState {
    addItemToCart: () => void
}

class TitleList extends React.Component<ITitleListProps, {}> {
    title = 'Title';
    description = 'Description';

    render() {
        return (
            <div>
                <div>
                    {this.props.titles.map((t) =>
                        <Title
                            key={t.id}
                            id={t.id}
                            description={t.description}
                            title={t.title}
                            format={t.format}
                            price={t.price}
                            addTitleToCart={this.props.addItemToCart} />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        titles: state.TitleState.titles
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addItemToCart: () => { dispatch(addItemToCart()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList);
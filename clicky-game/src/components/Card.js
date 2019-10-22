import Reacct from 'react';

function Card(props) {
    return (
        <div className='cardWrapperWrapper'>
            <div className='cardWrapper'>
                <img alt={props.name} src={props.image} onClick={props.onClick} data-clicked={props.clicked} data-id={props.id} class="cardImg" />
            </div>
        </div>
    );
}

export default Card;
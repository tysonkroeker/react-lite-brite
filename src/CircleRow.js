import Circle from './Circle';
import './CircleRow.css';


function CircleRow (props) {
    let rows = [];
    for(let i=0; i< props.itemsPerRow; i++) {
        rows.push(Circle());
    }
    return <div className='CircleRow'>
        {rows}
    </div>;
}

export default CircleRow;
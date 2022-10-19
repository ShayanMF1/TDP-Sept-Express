import PropTypes from 'prop-types';

function Item({
  name, quantity, handleClick, changeQuantity,
}) {
  return (
    <div>
      <p>{`Name: ${name}`}</p>
      <p>{`Quantity: ${quantity}`}</p>
      <button type="button" onClick={() => changeQuantity(-1)}>-1</button>
      <button type="button" onClick={handleClick}>X</button>
      <button type="button" onClick={() => changeQuantity(+1)}>+1</button>

    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};
export default Item;
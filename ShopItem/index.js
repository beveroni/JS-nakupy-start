export const ListItem = (props) => {
  const { done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__body">
        <div class="list-item__product">${product}</div>
        <div class="list-item__amount">${amount} ${unit}</div>
      </div>
    </div>
  `;
};

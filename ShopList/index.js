import { ListItem } from '../ShopItem/index.js';

export const ShopList = (props) => {
  const { dayName, items } = props;

  return `
    <div class="shoplist">
      <div class="shoplist__head">
        <h2 class="shoplist__day">${dayName}</h2>
      </div>
      <div class="shoplist__items">
        ${items.map((item) => ListItem(item)).join('')}
      </div>
    </div>
  `;
};

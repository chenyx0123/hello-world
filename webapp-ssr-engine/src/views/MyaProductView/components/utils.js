import { map, reduce } from "lodash";

const CUSTOM_QUANTITY = {
  129108: 0,
  129109: 3,
  129110: 0,
  129111: 1,
  129112: 3,
  129113: 0,
  129114: 0,
  129115: 0,
};

const calculateQuantity = (data) => {
  const quantity = reduce(
    Object.values(data.variationQuantity),
    (prev, cur) => prev + (cur ? parseInt(cur, 10) : 0),
    0
  );
  const requiredQuantity = CUSTOM_QUANTITY[data.variationId] * data.quantity;
  return {
    quantity,
    requiredQuantity,
    isQuantityValid: requiredQuantity === 0 || quantity === requiredQuantity,
  };
};

const calculatePrice = (data, variations) =>
  reduce(
    map(variations, (v) => ({
      id: v.id,
      price: v.price,
      quantity: data.quantity[v.id] ? parseInt(data.quantity[v.id], 10) : 0,
    })),
    (prev, cur) => prev + cur.quantity * cur.price,
    0
  );

export { calculatePrice, calculateQuantity, CUSTOM_QUANTITY };

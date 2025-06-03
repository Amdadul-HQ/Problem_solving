type Item = {
  price: number;
  quantity: number;
};

const calculateTotal =(items: Item[]): number=> {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}


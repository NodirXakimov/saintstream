const a = {
  x: 1,
  y: {
    z: 2,
  },
};

const b = a;

b.x = 3;
b.y = { z: 4 };

console.log(a);

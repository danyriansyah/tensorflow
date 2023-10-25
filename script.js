// console.log(tf.version);
console.log("-------SCALAR-------");
tf.scalar(3.14).print();

console.log("-------TENSOR 1D-------");
const tensor1d = tf.tensor1d([1, 2, 3,], 'int32');

tensor1d.print();
// console.log(tensor1d);

console.log("-------TENSOR 2D-------");
tf.tensor2d([[1, 2],[3, 4]]).print();
tf.tensor2d([1, 2, 3, 4], [2, 2]).print();

console.log("-------TENSOR 3D-------");
tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();
tf.tensor3d([1, 2, 3, 4], [1, 2, 2]).print();
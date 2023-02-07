db.produtos.find({ $and: [{ vendidos: { $gt: 50 } },
   { vendidos: { $lt: 100 } }] }, { nome: 1, vendidos: 1, _id: 0 }).sort({ vendidos: 1 });

/* db.produtos.find({ vendidos: { $lt: 100, $gt: 50}}, {
  nome: 1,
  vendidos: 1,
  _id: 0,
}).sort({
  vendidos: 1,
}); */
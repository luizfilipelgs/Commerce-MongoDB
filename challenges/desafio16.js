db.produtos.updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: Date() } });

db.produtos.find({ $}, {});
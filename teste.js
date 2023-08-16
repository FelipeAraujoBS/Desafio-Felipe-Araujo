const itens = ["cafe, 1", "chantily, 1"]
let splitedArr = []

for(let i = 0; i < itens.length; i++){
   splitedArr.push(itens[i].split(","))

   const [codigo, quantidade] = splitedArr[i]
   console.log(codigo)
}


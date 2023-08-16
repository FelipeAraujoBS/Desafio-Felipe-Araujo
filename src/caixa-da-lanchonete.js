class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: { descricao: "Café", valor: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
            suco: { descricao: "Suco Natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduíche", valor: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            salgado: { descricao: "Salgado", valor: 7.25 },
            combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
        };

        this.formasPagamento = ["dinheiro", "debito", "credito"];
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        let splitedArr = [];

        if (!this.formasPagamento.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        if (!itens || itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (let i = 0; i < itens.length; i++) {
            splitedArr.push(itens[i].split(","));
            const [codigo, quantidade] = splitedArr[i];
            const item = this.cardapio[codigo];

            if (!(codigo in this.cardapio)) {
                return "Item inválido!";
            }

            if (quantidade < 1) {
                return "Quantidade inválida!";
            }

            if((codigo === "chantily" || codigo === "queijo" ) && (splitedArr.length <= 2 )){
                return "Item extra não pode ser pedido sem o principal"
            }

            total += item.valor * quantidade
        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95;
        } else if (metodoDePagamento === "credito") {
            total *= 1.03;
        }

        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
}

export { CaixaDaLanchonete };

let dados = [
    {
        modelo: "Authentique",
        motores: ["1.0 12V SCE Flex"],
        combustivel: "Flex",
        potencia: "72 cv / 98 Nm",
        consumo: "Cerca de 14 km/l na cidade e 16 km/l na estrada (ciclo combinado)",
        fabricacao: "2012 - Atual",
        acessorios: "Ar-condicionado, direção hidráulica, vidros elétricos dianteiros, rádio AM/FM"
    },
    {
        modelo: "Expression",
        motores: ["1.0 12V SCE Flex", "1.6 16V Flex"],
        combustivel: "Flex",
        potencia: "1.0: 72 cv / 98 Nm; 1.6: 110 cv / 15,5 kgfm",
        consumo: "1.0: Cerca de 14 km/l na cidade e 16 km/l na estrada; 1.6: Cerca de 12 km/l na cidade e 14 km/l na estrada",
        fabricacao: "2012 - Atual",
        acessorios: "Ar-condicionado, direção hidráulica, vidros elétricos dianteiros e traseiros, rádio com Bluetooth, computador de bordo"
    },
    {
        modelo: "Privilège",
        motores: ["1.6 16V Flex"],
        combustivel: "Flex",
        potencia: "110 cv / 15,5 kgfm",
        consumo: "Cerca de 12 km/l na cidade e 14 km/l na estrada",
        fabricacao: "2012 - Atual",
        acessorios: "Ar-condicionado automático, direção elétrica, vidros elétricos dianteiros e traseiros, rádio com tela touchscreen, câmera de ré, sensor de estacionamento"
    },
    {
        modelo: "Dynamique",
        motores: ["1.0 12V SCE Flex"],
        combustivel: "Flex",
        potencia: "72 cv / 98 Nm",
        consumo: "Cerca de 14 km/l na cidade e 16 km/l na estrada",
        fabricacao: "2018 - Atual",
        acessorios: "Ar-condicionado, direção elétrica, vidros elétricos dianteiros e traseiros, rádio com tela touchscreen, rodas de liga leve, kit esportivo, sensor de estacionamento"
    },
    {
        modelo: "Sandero Stepway (Primeira Geração)",
        motores: ["1.6 16V Flex"],
        combustivel: "Flex",
        potencia: "110 cv / 15,5 kgfm",
        consumo: "Cerca de 12 km/l na cidade e 14 km/l na estrada (ciclo combinado)",
        fabricacao: "2008 - 2016",
        acessorios: "Ar-condicionado, direção hidráulica, vidros elétricos dianteiros e traseiros, rodas de liga leve, pneus de uso misto, barras de teto, proteções laterais"
    },
    {
        modelo: "Sandero Stepway (Segunda Geração)",
        motores: ["1.0 12V SCE Flex", "1.6 16V Flex"],
        combustivel: "Flex",
        potencia: "1.0: 72 cv / 98 Nm; 1.6: 110 cv / 15,5 kgfm",
        consumo: "1.0: Cerca de 14 km/l na cidade e 16 km/l na estrada; 1.6: Cerca de 12 km/l na cidade e 14 km/l na estrada",
        fabricacao: "2016 - Atual",
        acessorios: "Ar-condicionado, direção elétrica, vidros elétricos dianteiros e traseiros, rodas de liga leve, pneus de uso misto, barras de teto, proteções laterais, multimídia com tela touchscreen"
    }
];

class Modelo {
    constructor(nome, geracao, motor, combustivel, potencia, consumo, fabricacao, acessorios, transmissao, dimensoes, peso) {
        this.nome = nome;
        this.geracao = geracao;
        this.motor = motor;
        this.combustivel = combustivel;
        this.potencia = potencia;
        this.consumo = consumo;
        this.fabricacao = fabricacao;
        this.acessorios = acessorios;
        this.transmissao = transmissao;
        this.dimensoes = dimensoes;
        this.peso = peso;
    }
}

const modelosSandero = [
    // Primeira Geração
    new Modelo("Sandero Authentique", "I", { tipo: "1.0 16V", cilindrada: 998 }, "Flex", { cv: 75, kgfm: 10.5 }, { cidade: 13, estrada: 15 }, "2007-2012", ["ar-condicionado", "direção hidráulica"], "manual", { comprimento: 3912, largura: 1733, altura: 1520 }, 1050),
    new Modelo("Sandero Expression", "I", { tipo: "1.6 16V", cilindrada: 1598 }, "Flex", { cv: 110, kgfm: 15.5 }, { cidade: 12, estrada: 14 }, "2008-2016", ["ar-condicionado", "direção elétrica", "vidros elétricos"], "manual", { comprimento: 3912, largura: 1733, altura: 1520 }, 1100),

    // Segunda Geração
    new Modelo("Sandero Life", "II", { tipo: "1.0 12V SCE", cilindrada: 999 }, "Flex", { cv: 72, kgfm: 98 }, { cidade: 14, estrada: 16 }, "2016-Atual", ["ar-condicionado", "direção elétrica"], "manual", { comprimento: 4070, largura: 1730, altura: 1630 }, 1061),
    new Modelo("Sandero Intense", "II", { tipo: "1.6 16V", cilindrada: 1598 }, "Flex", { cv: 110, kgfm: 15.5 }, { cidade: 12, estrada: 14 }, "2016-Atual", ["ar-condicionado automático", "multimídia"], "manual", { comprimento: 4070, largura: 1730, altura: 1630 }, 1151),
    new Modelo("Sandero Dynamique", "II", { tipo: "1.0 12V SCE", cilindrada: 999 }, "Flex", { cv: 72, kgfm: 98 }, { cidade: 14, estrada: 16 }, "2018-Atual", ["rodas de liga leve", "kit esportivo"], "manual", { comprimento: 4070, largura: 1730, altura: 1630 }, 1061),
    new Modelo("Sandero Privilège", "II", { tipo: "1.6 16V", cilindrada: 1598 }, "Flex", { cv: 110, kgfm: 15.5 }, { cidade: 12, estrada: 14 }, "2016-Atual", ["teto solar", "bancos em couro"], "automática", { comprimento: 4070, largura: 1730, altura: 1630 }, 1151),
    new Modelo("Sandero Stepway", "II", { tipo: "1.0 12V SCE", cilindrada: 999 }, "Flex", { cv: 72, kgfm: 98 }, { cidade: 14, estrada: 16 }, "2016-Atual", ["rodas de liga leve", "barras de teto", "suspensão elevada"], "manual", { comprimento: 4070, largura: 1730, altura: 1630 }, 1080),
    new Modelo("Sandero R.S.", "II", { tipo: "2.0 16V", cilindrada: 1998 }, "Gasolina", { cv: 145, kgfm: 20.2 }, { cidade: 10, estrada: 12 }, "2018-Atual", ["diferencial de deslizamento limitado", "bancos esportivos"], "manual", { comprimento: 4070, largura: 1730, altura: 1630 }, 1180)
];


// Elaboração de uma função para criar uma tabela e adicionar modelos e suas informações e caracteristicas 
const tabelaCarros = document.getElementById('tabela-carros');

function criarTabela() {
    // Limpar a tabela antes de adicionar novos dados (opcional)
    tabelaCarros.innerHTML = '';

    // Criar o cabeçalho da tabela
    const cabecalho = document.createElement('tr');
    cabecalho.innerHTML = `
        <th>Modelo</th>
        <th>Geração</th>
        <th>Motor</th>
        <th>Combustível</th>
        <th>Transmissão</th>
        <th>Acessórios</th>
        <th>Peso (kg)</th>
        `;
    tabelaCarros.appendChild(cabecalho);

    // Criar as linhas da tabela para cada carro
    modelosSandero.forEach(carro => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${carro.nome}</td>
            <td>${carro.geracao}</td>
            <td>${carro.motor.tipo} - ${carro.motor.cilindrada}cc</td>
            <td>${carro.combustivel} - ${carro.consumo.cidade}/${carro.consumo.estrada} km/l</td>
            <td>${carro.transmissao}</td>
            <td>${carro.acessorios.join(', ')}</td>
            <td>${carro.peso}</td>
            `;
        tabelaCarros.appendChild(linha);
    });
}

criarTabela();
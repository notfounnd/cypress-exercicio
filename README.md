# Exercício - Cypress
Execício de automação desenvolvido com o framework Cypress que teve como objetivo validar de forma prática sua aplicação em um processo de testes.

# Diário

Conforme sugestão, elaborei esse diário promovendo um acompanhamento simples de como foram os passos das atividades desenvolvidas nesse exercício.

O ambiente testado durante o desenvolvimento do projeto pode ser encontrado [nesse repositório](https://github.com/GitJMSeguradora/react-slingshot) com todas as orientação de como disponibilizá-lo localmente em sua estação de trabalho.

## 15/07/2020 - 19h00 às 00h00

### Entendendo o Sistema

Antes de iniciar qualquer linha de código de teste, dentro de um horizonte otimista, acredito ser fundamental compreender com o que estamos trabalhando.

Após seguir as intruções de como "subir" o ambiente, podemos verificar um sistema com algumas páginas de exemplo, dentre elas uma funcionalidade que pode ser utilizada para estimar o quanto podemos economizar (ou não) ao trocar de vículo.

Com base nos dados de consumo e preço de combustível de cada um deles, ao final do preenchimento do formulário podemos verificar uma projeção de economia detalhada em 3 perídos (mensalmente / 1 ano / 3 anos).

### Estudando o Código

Exploratório realizado, algumas dúvidas compreendidas, outras não. Hora de entender a lógica por traz da funcionalidade.

Inspecionando os elementos da página através do navegador foi possível chegar ao arquivo que mantém as regras de [processamento do formulário](https://github.com/GitJMSeguradora/react-slingshot/blob/master/src/utils/fuelSavings.js). Através dele podemos verificar que uma das bases do cálculo de processamento é a quantidade de milhas rodadas por mês.

```
export function calculateSavingsPerMonth(settings) {
  if (!settings.milesDriven) {
    return 0;
  }

  const milesDrivenPerMonth = calculateMilesDrivenPerMonth(settings.milesDriven, settings.milesDrivenTimeframe);
  const tradeFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.tradePpg, settings.tradeMpg);
  const newFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.newPpg, settings.newMpg);
  const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

  return roundNumber(savingsPerMonth, 2);
}
```

Em linhas gerais, ao entrar com os valores no formulário, temos os seguintes passos de cálculo:

* Calcular a rodagem mensal do veículo
* Calcular o custo mensal do veículo antigo
* Calcular o custo mensal do veículo novo
* Calcular a diferença entre o custo mensal de cada veículo 

Após encontrar a diferença temos montante mensal economizado, depois desse passao o sistema finaliza o processamento calculando o valor para os demais perídos.

```
export function calculateSavings(settings) {
  const monthlySavings = calculateSavingsPerMonth(settings);

  return {
    monthly: getCurrencyFormattedNumber(monthlySavings),
    annual: getCurrencyFormattedNumber(monthlySavings * 12),
    threeYear: getCurrencyFormattedNumber(monthlySavings * 12 * 3)
  };
}
```

**Curiosiade:** Durante o processo de análise pude verificar que os arquivos de funcionalidade da aplicação continham um par '.spec.js'. Mais tarde, juntando o inicio dos estudos Cypress + a terminal de execução da aplicação, pude compreender que se tratavam de arquivos com testes unitários. :smile:

<p align="center">
  <img src="https://i.imgur.com/e0JsjZQ.png" />
  </br>Terminal de Execução
</p>

## 16/07/2020 - 19h00 às 00h00

### Aprendendo Cypress

Ambientado no contexto do sistema, hora de aprender a sobre a ferramenta [Cypress](https://www.cypress.io/). Apesar de sua rica [documentação](https://docs.cypress.io/), para otimizar meu aprendizado eu apoiei meus estudos no curso '[Testes de aplicações modernas com Cypress](https://www.udemy.com/course/testes-cypress/)'.

O projeto com o conteúdo assimilado durante o curso de aprendizado pode ser verificado [nesse outro repositório aqui](https://github.com/notfounnd/cypress-estudo).

## 17/07/2020 - 19h00 às 00h00

### Desenvolvendo o Projeto

## 15/07/2020 - 14h00 às ...

### Documentando o Processo

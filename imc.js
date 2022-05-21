// Colocando a variável do botão como global pelo ID(html).

const calcular = document.getElementById('calcular');

// Função IMC - Onde será calculado o índice de massa corpórea do usuário e todos as devidas atribuições.

function imc() {
    // Declarando as variáveis e atribuindo valor.

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const altura = document.getElementById('altura').value;
    let select = document.getElementById('sexo').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Aqui é onde será definido o sexo do usuário, através de uma simples condicional: 

    if (select == 'masculino') {
        select = 'Masculino';
    } else {
        select = 'Feminino';
    }

    // Aqui é onde será definido a categoria do usuário, através de uma simples condicional:
    // Infantil(até 12 anos) - Juvenil(entre 12 e 20 anos) - Adulto(entre 21 e 65) - Idoso(acima de 65).
    
    if(idade < 12) {
        categoria = 'Infantil'
      } else if (idade >= 12 && idade <= 20) {
        categoria = 'Juvenil'
      } else if (idade >= 21 && idade <= 65) {
        categoria = 'Adulto'
      } else {
        categoria = 'Idoso'
      }

    // Aqui é a condicional que verificará se foi atribuido valor. 

    if (nome !== ' ' && altura !== ' ' && peso !== ' ')
    {
    // Aqui é onde será calculado o Indice de Massa corpórea com arredondamento de duas casas decimais.
    
        const valorIMC = Number (peso / (altura * altura)).toFixed(2);
    // Declaração de variáveis alteráveis usando "let".

        let classificacao = "";
        let resultadoIMC = 0;
        let riscos = "";
        let imcCerto = "";
        let recomendacao = "";

    // Nestas condicionais serão definidos o IMC do usuário de acordo com as informações cadastradas.

    if (valorIMC < 20)
        {
            imcCerto = "Entre 20 e 24.";
            resultadoIMC = valorIMC;
            classificacao = "Abaixo do peso ideal.";
            riscos = "Muitas complicações de saúde, como doenças pulmonares e cardiovasculares."; 
            recomendacao =  "carboidratos simples, além de proteínas indispensáveis para ganho de massa magra. Procure um profissional!";
            
        } else if (valorIMC <= 24){
            imcCerto = "Entre 20 e 24.";
            resultadoIMC = valorIMC;
            classificacao = "Peso ideal";
            riscos = "Seu peso está ideal para suas referências. Parabéns!";
            recomendacao = "Mantenha uma dieta saudável e faça seus exames periódicos.";
           
        } else if (valorIMC <= 29){
            imcCerto = "Entre 20 e 24.";
            resultadoIMC = valorIMC;
            classificacao = "Excesso de peso.";
            riscos = "Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.";
            recomendacao = "Adote um tratamento baseado em dieta balanceada, exercícios físicos e medicação. A ajude de um profissional pode ser interessante.";
        
        } else if (valorIMC < 35){
            imcCerto = "Entre 20 e 24.";
            resultadoIMC = valorIMC;
            classificacao = "Obesidade";
            riscos = "Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.";
            recomendacao = "Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino).";
        
        } else {
            imcCerto = 'entre 20 e 24';
            resultadoIMC = valorIMC;
            riscos = 'O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.'
            recomendacao = 'Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).'
          }

    // Diagnóstico do usuário: 

        resultado.innerHTML = 
    `<strong>Diagnóstico:</strong><br><br>
    <strong>Nome:</strong> ${nome}<br>
    <strong>Sexo:</strong> ${select}<br>
    <strong>idade:</strong> ${idade} anos<br>
    <strong>Altura:</strong> ${altura}<br>
    <strong>Peso:</strong> ${peso} kg<br>
    <strong>Categoria:</strong> ${classificacao}<br>
    <strong>IMC Correto:</strong> ${imcCerto}<br>
    <strong>Resultado:</strong> ${resultadoIMC}<br>
    <strong>Riscos:</strong> ${riscos}<br> 
    <strong>Recomendação inicial:</strong> ${recomendacao}`

    } else {
        resultado.innerHTML = 'Preencha todos os campos';
    }
}

//Adicionando a ação de clicar no botão "Calcular" e mostrar o resultado do
calcular.addEventListener('click', imc);

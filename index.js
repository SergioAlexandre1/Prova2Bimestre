function calcularMedia() {
    const name = document.getElementById('name').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    // Verificação do nome
    if (!name) {
        alert('Por favor, insira um nome.');
        return;
    }

    // Verificação das notas
    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Por favor, insira notas válidas.');
        return;
    }

    const media = (nota1 + nota2) / 2;
    let situacao = 'Reprovado';

    if (media >= 5) {
        situacao = 'Aprovado';
    }

    const resultado = `Aluno: ${name} <br>
                       Matrícula: ${matricula} <br>
                       Média: ${media.toFixed(2)} <br>
                       Situação: ${situacao}`;

    document.getElementById('resultado').innerHTML = resultado;

    // Adicionar registro na tabela
    adicionarRegistro(name, matricula, nota1, nota2, media, situacao);
}

function adicionarRegistro(name, matricula, nota1, nota2, media, situacao) {
    const table = document.getElementById('alunosTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerHTML = name;
    cell2.innerHTML = matricula;
    cell3.innerHTML = nota1.toFixed(1);
    cell4.innerHTML = nota2.toFixed(1);
    cell5.innerHTML = media.toFixed(2);
    cell6.innerHTML = situacao;
}
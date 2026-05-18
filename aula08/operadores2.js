/*
Operadores Relacionais:
    5 > 2   -> true (maior que)
    7 < 4  -> false (menor que)
    8 >= 8 -> true (maior ou igual a)
    9 <= 7 -> false (menor ou igual a)
    5 == 5 -> true (igual a)
    4 != 4   -> false (diferente de)

Exemplos:  
    preço >= 200.50
    idade < 18
    curso == 'JavaScript'
    n1 != n2

Operadores Identidade:
    5 == 5  -> true (igual a)
    5 == '5' -> true (igual a, mas tipos diferentes)
    5 === '5' -> false (estritamente igual a, tipos diferentes)
    5 === 5 -> true (estritamente igual a, tipos iguais)

Operadores Lógicos:
    ! = negação
        ! -> false
        ! -> true
    && = conjunção (e)
        true && true -> true
        true && false -> false
        false && true -> false
        false && false -> false
    || = disjunção (ou)
        true || true -> true
        true || false -> true
        false || true -> true
        false || false -> false


Operador Tenario:
    media >= 7.0 ? 'Aprovado' : 'Reprovado'
    
    
Ordem de precedência:
    1° Operadores Aritméticos
        1° ()
        2° **
        3° * / %
        4° + - 
    2° Operadores Relacionais
        Não possui ordem de precedência, pois são avaliados da esquerda para a direita.
    3° Operadores Lógicos
        1° ! (negação)
        2° && (conjunção)
        3° || (disjunção)

    Exemplo:
        idade >= 15 && idade <= 17               // a idade está entre 15 e 17 anos?
        estado == 'RJ' || estado == 'SP'         // o estado é o RJ ou SP?
        salário > 1500 && sexo !='M'             // O salário é acima de 1500 e não é homem?




























*/
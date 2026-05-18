/* 
Operadores Aritméticos:
5 + 2 -> 7 (adição)
5 - 2 -> 3 (subtração)
5 * 2 -> 10 (multiplicação)
5 / 2 -> 2.5 (divisão)
5 % 2 -> 1 (módulo)
5 ** 2 -> 25 (exponenciação)


Ordem de Precedência:
1° ()
2° **
3° * / %
4° + - 



Atribuição Simples:
var a = 5 + 3       8   (a recebe o resultado da expressão 5 + 3, que é 8).
var b = a % 5       3   (b recebe o resultado da expressão a % 5, que é 3, pois 8 dividido por 5 tem um resto de 3)..
var c = 5 * b **2   45  (c recebe o resultado da expressão 5 * b ** 2, que é 45, pois b é 3 e 3 elevado ao quadrado é 9, e 5 multiplicado por 9 é 45).
var d = 10 - a/2    6   (d recebe o resultado da expressão 10 - a / 2, que é 6, pois a é 8 e 8 dividido por 2 é 4, e 10 menos 4 é 6).
var e = 6*2/d       2   (e recebe o resultado da expressão 6 * 2 / d, que é 2, pois d é 6 e 6 multiplicado por 2 é 12, e 12 dividido por 6 é 2).
var f = b%e + 4/e   3   (f recebe o resultado da expressão b % e + 4 / e, que é 3, pois b é 3 e e é 2, então b % e é 1 (o resto de 3 dividido por 2), e 4 / e é 2 (4 dividido por 2), então a expressão completa é 1 + 2, que resulta em 3).



Auto Atribuições:
var n = 3
n = n + 4         n+= 4   (n recebe o resultado da expressão n + 4, que é 7, pois n é 3 e 3 mais 4 é 7).
n = n - 5         n-= 5   (n recebe o resultado da expressão n - 5, que é 2, pois n é 7 e 7 menos 5 é 2).
n = n * 4         n*= 4   (n recebe o resultado da expressão n * 4, que é 8, pois n é 2 e 2 multiplicado por 4 é 8).
n = n / 2         n/= 2   (n recebe o resultado da expressão n / 2, que é 4, pois n é 8 e 8 dividido por 2 é 4).
n = n ** 2        n**= 2  (n recebe o resultado da expressão n ** 2, que é 16, pois n é 4 e 4 elevado ao quadrado é 16).
n = n % 5         n%= 5   (n recebe o resultado da expressão n % 5, que é 1, pois n é 16 e 16 dividido por 5 tem um resto de 1).


Incremento
x = x + 1      x++   (x recebe o resultado da expressão x + 1, que é o valor atual de x mais 1. O operador de incremento (++) é uma forma abreviada de adicionar 1 a uma variável. Se x for 5, então x++ resultará em 6).
x = x - 1      x--   (x recebe o resultado da expressão x - 1, que é o valor atual de x menos 1. O operador de decremento (--) é uma forma abreviada de subtrair 1 de uma variável. Se x for 5, então x-- resultará em 4).






*/
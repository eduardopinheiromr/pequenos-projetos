def Bin_2_Dec(array_int_binaria):
    resultado = []
    decimal = 0
    contador = 0
    while len(resultado) < len(array_int_binaria): # CALCULANDO A POTÊNCIA E MULTIPLICANDO PELO BINÁRIO, CONSTRUINDO O ARRAY DE RESULTADOS
        exponente=(len(array_int_binaria) - len(resultado))
        resultado.append(array_int_binaria[-exponente] * (2**(exponente-1)))

    while contador < len(resultado): #FAZENDO O SOMATÓRIO DO ARRAY
        decimal += resultado[contador]
        contador = contador + 1

    return print("A string binária {} convertida para decimal = {}".format(array_int_binaria, decimal)),exit()

def checkbin(string_binaria):
    if string_binaria.isnumeric() == False:
        print("Você digitou letras. Binários são apenas 0's e 1's. Tente novamente.\n")
        restart(string_binaria)

    string_binaria = list(string_binaria)
    listabin_int = []
    while len(listabin_int) < len(string_binaria): # CONVERTENDO O ARRAY DE STRINGS PARA ARRAY DE INT
        listabin_int.append(int(string_binaria[len(listabin_int)]))

    contador = 0
    while contador < len(listabin_int):
        if listabin_int[contador] > 1:
            print("Você digitou {} e ele não pôde ser convertido para binário. Tente novamente com apenas 0's e 1's.\n".format(listabin_int[contador]))
            restart(string_binaria)
        else:
            contador = contador + 1

    if len(string_binaria) == 0:
        print("Você não digitou nenhum valor. Tente novamente.\n")
        restart(string_binaria)

    while len(string_binaria) < 0 or len(string_binaria) > 8:
        print("Por favor, digite entre 0 e 8 caracteres.\n")
        restart(string_binaria)

    Bin_2_Dec(listabin_int)

def restart(string_binaria):
    string_binaria = input("Insira um valor binário de até 8 dígitos para ser convertido em decimal: ")
    checkbin(string_binaria)

string_binaria = 0

restart(string_binaria)

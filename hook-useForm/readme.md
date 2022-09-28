# Algumas Anotações

```shouldUseNativeValidation```: caso não queire que o aviso de required padrão do navegador não apareça marque como ```true``` caso contrario a validação ao invés de mostrar o aviso simplismente irá dar um ```focus``` no input.

O register recebe o nome do input, o mesmo nome será utilizado para guardar no objeto de retorno de valores. Caso queire vc pode customizar isso tendo algumas formas: 

-   ```...register('teste.firstName')``` -> será criado um objeto teste dentro de register e dentro desse objeto terá a chave firstName com o valor do input`.
-   ``...register('teste.0')`` -> será criado um array dentro da chave teste dentro de register e dentro desse array na posição informada estará o valor do input.
-   ``...register('firstName')`` ->  essa é a forma padrão pois será criado dentro do objeto register a chave firstName com o valor do input.
### **O useCallback pode ser facilmente confundido com o useMemo, porém há uma certa diferença:**
 - ```useCallback``` memoriza a função.
 - ```useMemo``` memoriza o retorno.

 Basicamente a função do ```useCallback``` é contruir uma função quando o app é iniciado e guardar (memorizar) a mesma para que funturamente possa reutiliza-lá novamente sem reconstrui-lá. 
 
 Porém isso não quer dizer que vc está restrito á não reconstruir a função caso seja necessário, para isso basta passar a variável ou states dentro do array do ```useCallback``` que quando esse state ou varivel mudar ele reconstruirá a função novamente.
- Para que reconstruir a função? Bom as vezes temos uma função que depende de um state para sua logica funcionar.

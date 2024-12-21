function  disemvowel(str) {
    str= str.replaceAll("a", "");
    str=str.replaceAll("e", "");
    str=str.replaceAll("o", "");
    str=str.replaceAll("u", "");
    str=str.replaceAll("i", "");
    str= str.replaceAll("A", "");
    str=str.replaceAll("E", "");
    str=str.replaceAll("O", "");
    str=str.replaceAll("U", "");
    str=str.replaceAll("I", "");
    return str;
}

console.log(disemvowel('heailou'));

function findShort(s){
    s=s.split(' ')
    l=s.length
    ll=s[0].length
    sw=s[0]
    for(let i=0 ; i<l ; i++){
        if (s[i].length<ll){
            let sw=s[i];
            ll=sw.length
        }}

return ll}
console.log(findShort("Let's travel abroad shall we"));
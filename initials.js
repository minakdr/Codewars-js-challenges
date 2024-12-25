function abbrevName(name){
    name=name.toUpperCase()
    let Fname=name.slice(name[0], name.indexOf(' '))
    let Lname=name.slice(name.indexOf(' ')+1, name[-1])
    console.log(Fname , Lname)
    return Fname[0] + '.' + Lname[0]}
const fs = require("fs");

const {nombreedad,escribir,revisar} = require("./registro")

let name = "Daniel"

let age = 45

/*
nombreedad(name,age)
*/

const madefromapp = ({
    nombre : name, 
    edad : age
});

/*
escribir("user.json", madefromapp)
*/


revisar("user.json" , "Ricardo")


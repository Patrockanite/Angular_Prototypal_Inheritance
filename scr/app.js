/* Prototypal Inheritance */

/* Objet parent */
var parent = {
    value: "parentValue",
    obj:{
        objValue:"parentObjectValue"
    },
    walk: function(){
        console.log("walking !");
    }
};

/* Création de l'objet enfant */
var child = Object.create(parent); 
console.log("CHILD - child.value : ",child.value);
console.log("CHILD - child.objvalue : ",child.obj.objValue);
console.log("PARENT - parent.value : ",parent.value);
console.log("PARENT - parent.obj.objValue : ",parent.obj.objValue);
console.log("parent :",parent);
console.log("child",child);
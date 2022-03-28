function pizzaOven(crustType,saucetype,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=saucetype;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}
pizza1=pizzaOven("deep dish","traditional","mozzerella",["pepperoni", "sausage"]);
pizza2=pizzaOven("hand tossed","marinara",["mozzerella","feta"],["mushrooms","olives","onions"])
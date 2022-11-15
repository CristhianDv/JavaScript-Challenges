function contains(store, product) {
     containsProduct = false;
     for (let key in store) {
          if(store[key] instanceof Object) {
               contains(store[key], product);
          } else if(store[key] === product) {
               containsProduct = true;
          }
     }
     return containsProduct;
}

const almacen = {
     'estanteria1': {
       'cajon1': {
         'producto1': 'coca-cola',
         'producto2': 'fanta',
         'producto3': 'sprite'
       }
     },
     'estanteria2': {
       'cajon1': 'vacio',
       'cajon2': {
         'producto1': 'pantalones',
         'producto2': 'camiseta', // <- ¡Está aquí!
         'producto 3': ''
       }
     }
}
               
console.log(contains(almacen, 'c')) // true
   
const otroAlmacen = {
     'baul': {
       'fondo': {
         'objeto': 'cd-rom',
         'otro-objeto': 'disquette',
         'otra-cosa': 'gameboy'
       }
     }
}
     
console.log(contains(otroAlmacen, 'gameboy')) // false
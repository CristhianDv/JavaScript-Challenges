export default function contarOvejas(ovejas) {
    let ovejasFiltradas = [];
      for(let i in ovejas) {
        if(ovejas[i].color == 'rojo'){
          if((ovejas[i].name.includes('N') && ovejas[i].name.includes('A')) ||
           (ovejas[i].name.includes('N') && ovejas[i].name.includes('a')) ||
           (ovejas[i].name.includes('n') && ovejas[i].name.includes('A')) ||
           (ovejas[i].name.includes('n') && ovejas[i].name.includes('a')) ){
            ovejasFiltradas.push(ovejas[i]);
          }
        }
      }
      return ovejasFiltradas;
  }
  
  
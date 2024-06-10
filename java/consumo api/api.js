const consumir_api = async () => {
    const dolares = await fetch('https://dolarapi.com/v1/dolares')
    const datos = await dolares.json()

        
            
            
          
    datos.forEach((element, index) => {
        const compra = element.compra !== null ? `$${element.compra}` : 'null';
        const venta = element.venta !== null ? `$${element.venta}` : 'null';
        console.log(`${index + 1} - Dólar ${element.nombre} - Compra: ${compra} - Venta: ${venta}`);
        });
}

consumir_api()
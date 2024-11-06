//declaro array productos
let productos = [
    {id: 1, nombre: 'Escuadra', precio: 323.45, categoria: 'Herramientas', stock: 3},
    {id: 2, nombre: 'Calculadora', precio: 234.56, categoria: 'Herramientas', stock: 2},
    {id: 3, nombre: 'Globo Terráqueo', precio: 45.67, categoria: 'Herramientas', stock: 15},
    {id: 4, nombre: 'Paleta Pintura', precio: 456.78, categoria: 'Arte', stock: 5},
    {id: 5, nombre: 'Reloj', precio: 67.89, categoria: 'Hogar', stock: 7},
    {id: 6, nombre: 'Mochila', precio: 78.90, categoria: 'Hogar', stock: 1},
    {id: 7, nombre: 'Agenda', precio: 89.01, categoria: 'Oficina', stock: 6},
    {id: 8, nombre: 'Silla', precio: 90.12, categoria: 'Hogar', stock: 4},
    {id: 9, nombre: 'Escritorio', precio: 123.45, categoria: 'Oficina', stock: 8},
    {id: 10, nombre: 'Computadora', precio: 500000.00, categoria: 'Tecnología', stock: 10},
    {id: 11, nombre: 'Teléfono', precio: 400000.00, categoria: 'Tecnología', stock: 5},
    {id: 12, nombre: 'Impresora', precio: 456.78, categoria: 'Oficina', stock: 3},
    {id: 13, nombre: 'Lámpara', precio: 67.89, categoria: 'Hogar', stock: 10},
    {id: 14, nombre: 'Cafetera', precio: 78.90, categoria: 'Hogar', stock: 4},
    {id: 15, nombre: 'Televisor', precio: 300000.00, categoria: 'Tecnología', stock: 2},
    {id: 16, nombre: 'Microondas', precio: 123.45, categoria: 'Hogar', stock: 6},
    {id: 17, nombre: 'Licuadora', precio: 234.56, categoria: 'Hogar', stock: 3},
    {id: 18, nombre: 'Ventilador', precio: 345.67, categoria: 'Hogar', stock: 7},
    {id: 19, nombre: 'Aspiradora', precio: 456.78, categoria: 'Hogar', stock: 2},
    {id: 20, nombre: 'Plancha', precio: 67.89, categoria: 'Hogar', stock: 5},
    {id: 21, nombre: 'Cámara', precio: 500000.00, categoria: 'Tecnología', stock: 100},
    {id: 22, nombre: 'Altavoz', precio: 90.12, categoria: 'Tecnología', stock: 8},
    {id: 23, nombre: 'Monitor', precio: 123.45, categoria: 'Tecnología', stock: 6},
    {id: 24, nombre: 'Teclado', precio: 234.56, categoria: 'Tecnología', stock: 10},
    {id: 25, nombre: 'Ratón', precio: 45.67, categoria: 'Tecnología', stock: 12},
    {id: 26, nombre: 'Router', precio: 56.78, categoria: 'Tecnología', stock: 9},
    {id: 27, nombre: 'Modem', precio: 67.89, categoria: 'Tecnología', stock: 7},
    {id: 28, nombre: 'Tablet', precio: 78.90, categoria: 'Tecnología', stock: 5},
    {id: 29, nombre: 'Smartwatch', precio: 89.01, categoria: 'Tecnología', stock: 3},
    {id: 30, nombre: 'Consola', precio: 90.12, categoria: 'Tecnología', stock: 2}
];
//declaro array ventas
let ventas = [
    {id_venta: 1, id_producto: 1, cantidad_vendida: 2, id_cliente: 1,fecha_venta: '2021-10-01'},
    {id_venta: 2, id_producto: 2, cantidad_vendida: 1, id_cliente: 1,fecha_venta: '2021-10-02'},
    {id_venta: 3, id_producto: 21, cantidad_vendida: 5, id_cliente: 3,fecha_venta: '2021-10-03'},
    {id_venta: 4, id_producto: 15, cantidad_vendida: 3, id_cliente: 3,fecha_venta: '2021-10-04'},
    {id_venta: 5, id_producto: 5, cantidad_vendida: 4, id_cliente: 5,fecha_venta: '2021-10-05'},
    {id_venta: 6, id_producto: 6, cantidad_vendida: 1, id_cliente: 6,fecha_venta: '2021-10-06'},
    {id_venta: 7, id_producto: 7, cantidad_vendida: 2, id_cliente: 7,fecha_venta: '2021-10-07'},
    {id_venta: 8, id_producto: 8, cantidad_vendida: 3, id_cliente: 8,fecha_venta: '2021-10-08'},
    {id_venta: 9, id_producto: 11, cantidad_vendida: 4, id_cliente: 3,fecha_venta: '2021-10-09'},
    {id_venta: 10, id_producto: 10, cantidad_vendida: 1, id_cliente: 3,fecha_venta: '2021-10-10'},
];
//declaro array clientes
let clientes = [
    {id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan@algo.cl'},
    {id: 2, nombre: 'Ana', apellido: 'González', email: 'ana@algo.cl'},
    {id: 3, nombre: 'Pedro', apellido: 'Rodríguez', email: 'pedro@algo.cl'},	
    {id: 4, nombre: 'María', apellido: 'Gómez', email: 'maria@algo.cl'},
    {id: 5, nombre: 'José', apellido: 'López', email: 'jose@algo.cl'},
    {id: 6, nombre: 'Carla', apellido: 'Sánchez', email: 'carla@algo.cl'},
    {id: 7, nombre: 'Andrés', apellido: 'Torres', email: 'andres@algo.cl'},
    {id: 8, nombre: 'Mónica', apellido: 'Jiménez', email: 'monica@algo.cl'},
    {id: 9, nombre: 'Jorge', apellido: 'Hernández', email: 'jorge@algo.cl'},
    {id: 10, nombre: 'Luis', apellido: 'Díaz', email: 'luis@algo.cl'},
];

//obtengo los productos mas vendidos
function masVendidos(){
    let masVendidos = [];
    let productosVendidos = [];
    //recorro el array ventas
    ventas.forEach(venta => {
        //busco el producto que se vendio en el array productos por id de producto de la venta
        let producto = productos.find(producto => producto.id === venta.id_producto);
        //si el producto ya esta en el array productosVendidos le sumo la cantidad vendida
        if(productosVendidos[venta.id_producto]){
            productosVendidos[venta.id_producto].cantidad_vendida += venta.cantidad_vendida;
        } else {
            //si no esta en el array lo agrego con la cantidad vendida de la venta actual
            productosVendidos[venta.id_producto] = {
                id: producto.id,
                nombre: producto.nombre,
                cantidad_vendida: venta.cantidad_vendida
            };
        }
    });
    //recorro el array productosVendidos y lo agrego al array masVendidos
    productosVendidos.forEach(producto => {
        masVendidos.push(producto);
    });
    //ordeno el array masVendidos por cantidad vendida de mayor a menor
    masVendidos.sort((a, b) => b.cantidad_vendida - a.cantidad_vendida);
    //devuelvo los 3 primeros productos del array masVendidos
    return masVendidos.slice(0, 3);
}

function totalIngresos(){
    //recorro el array ventas y sumo el total de ingresos   
    //utilizo reduce para sumar el total de ingresos de todas las ventas 
    total = ventas.reduce((acc, venta) => {
        let producto = productos.find(producto => producto.id === venta.id_producto);
        return acc + (producto.precio * venta.cantidad_vendida);
    }, 0);
    //devuelvo el total de ingresos
    return total;
}

function clienteVip(){ 
    //creo un array clientesVip
    let clientesVip = [];
    //recorro el array clientes y por cada cliente recorro el array ventas para sumar el total gastado por cada cliente 
    clientes.forEach(cliente => {
        let totalGastado = ventas.reduce((acc, venta) => {
            if (venta.id_cliente === cliente.id) {
                let producto = productos.find(producto => producto.id === venta.id_producto);
                return acc + (producto.precio * venta.cantidad_vendida);
            }
            return acc;
        }, 0);
        //si el total gastado es mayor a 1000000 lo agrego al array clientesVip
        if (totalGastado > 1000000) {
            //agrego el cliente al array clientesVip con el total gastado usando push y spread operator
            clientesVip.push({
                ...cliente,
                totalGastado
            });
        }
    });
    //devuelvo el array clientesVip
    return clientesVip;
    
}

function generarReporteInventario() {
    //recorro el array productos y por cada producto genero un objeto con los datos requeridos y lo agrego a un nuevo array 
    return productos.map(producto => {
        //declaro variable status para asignar el estado del stock
        let status;
        //si el stock es menor a 10 asigno Low Stock a la variable status
        if (producto.stock < 10) {
            status = "Low Stock";
        } else if (producto.stock <= 20) {
            //si el stock es menor o igual a 20 asigno In Stock a la variable status
            status = "In Stock";
        } else {
            //si el stock es mayor a 20 asigno Enough Stock a la variable status
            status = "Enough Stock";
        }
        //devuelvo un objeto con los datos requeridos del producto actual y el status calculado 
        return {
            nombre: producto.nombre,
            categoria: producto.categoria,
            stock: producto.stock,
            status: status
        };

    });
}


//muestro por pantalla el resultado de las funciones 
console.log(masVendidos());
console.log('total vendido '+ totalIngresos());
console.log(clienteVip());
console.log(generarReporteInventario());
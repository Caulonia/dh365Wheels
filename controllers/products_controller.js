const productsController = {
   
    carrito: (req, res) =>{
        res.render('../productCart')
    },
    detalles: (req, res) =>{
        res.render('../productDetail')
    },
    store: (req, res) =>{
        res.render('../productStore')
    },
    crear: (req, res) =>{
        res.render('../productCreate')
    },
    modificar: (req, res)=>{
        res.render('../productModify')
    },
    eliminar: (req, res)=>{
        res.render('../productDelete')
    },
}

module.exports = productsController;

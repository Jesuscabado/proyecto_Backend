

const getAll = async () => {
   try{
        const pedidos = await pedido.findAll()({
            attributes:["idpedido","idusuario","estado","fecha"],
            include:{
                model:producto,
                attributes:["nombre","precio"],
                as:"productos",
                through:{
                    attributes:["cantidad"]
                }
            }
        })
        return pedidos
    }catch(error){
        throw error
    }
}
       

const createPedido = async (req,res) => {
    let userEmail = req.user.email;
    let date = new Date();
    let estado = "pendiente";
    let pedido = await pedido.create({
        idusuario:user.email,
        fecha:date,
        estado:estado
    });
    return pedido;
}

const addProducto = async (req,res) => {
    let userEmail = req.user.email;
    let pedido = Pedido.findOne({
        where:{
            emailuser:userEmail,
            estado:"pendiente"
        }
    });
    if(!pedido){
        pedido = await createPedido(req,res);
    }
}


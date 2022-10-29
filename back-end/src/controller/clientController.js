const clientService = require("../service/clientService");

const clientController = {
    getAllProducts: async (req, res) => {
        const products = await clientService.getAllProducts();
        return res.status(200).json(products);
    }
}

module.exports =  clientController;
import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
    const { method, query: { id }, cookies } = req;
    const token = cookies.token;

    dbConnect();
    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }

    }
    if (method === "PUT") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not Authenticated");
        }
        try {
            const product = await Product.create(req.body);
            console.log("product" + product);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error);
        }

    }

    if (method === "DELETE") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not Authenticated");
        }
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json("The product has beed deleted");
        } catch (error) {
            res.status(500).json(error);
        }

    }
}
import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'


export default async function handler(req, res) {
    const { method, cookies } = req;
    const token = cookies.token;

    dbConnect();
    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }

    }
    if (method === "POST") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not Authenticated");
        }
        console.log("Post method" + req.body);
        try {
            const product = await Product.create(req.body);
            console.log("product" + product);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error);
        }

    }
}

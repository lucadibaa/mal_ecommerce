const Cart = require('../models/Cart')

exports.getCart = async (req, res) => {

    const { id } = req.user

    try {
        const cart = await Cart.findOne({ user: id })

        if (!cart) return res.status(404).json({ success: false, message: 'Cart not found!' })

        res.status(200).json({ success: true, cart })
    } catch (err) {
        res.status(400).json({ success: false, err })
    }
}

exports.addToCart = async (req, res) => {
    // item = {
    //     product: product._id,
    //     quantity: 5,
    //     price: product.price * 5
    // }
    const { item } = req.body
    const { id } = req.user

    try {
        const cart = await Cart.findOne({ user: id })

        if (cart) {
            const isInCart = cart.cartItems.find(c => c.product == item.product)

            let updatedCart
            if (isInCart) {
                updatedCart = await Cart.findOneAndUpdate({ user: id, "cartItems.product": item.product }, {
                    $inc: { "cartItems.$.quantity": item.quantity, "cartItems.$.price": item.price }
                }, { new: true })
            } else {
                updatedCart = await Cart.findOneAndUpdate({ user: id }, {
                    $push: { cartItems: item }
                }, { new: true })
            }
            return res.status(201).json({ success: true, updatedCart })
        } else {
            const cart = new Cart({
                user: id,
                cartItems: [],
            })
            cart.cartItems[0] = item
            const newCart = await cart.save()

            return res.status(201).json({ success: true, newCart })
        }
    } catch (err) {
        res.status(400).json({ success: false, err })
    }
}

exports.removeFromCart = async (req, res) => {
    const { productId } = req.body
    const { id } = req.user

    try {
        const cart = await Cart.findOne({ user: id })

        if (!cart) return res.status(404).json({ success: false, message: 'Cart not found!' })

        const isInCart = cart.cartItems.find(c => c.product == productId)

        if (!isInCart) return res.status(404).json({ success: false, message: 'This product is not in the cart!' })

        const updatedCart = await Cart.findOneAndUpdate({ user: id }, {
            $pull: { cartItems: { product: productId } }
        }, { new: true })

        return res.status(201).json({ success: true, updatedCart })
    } catch (err) {
        res.status(400).json({ success: false, err })
    }
}

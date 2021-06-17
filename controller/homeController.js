

const homeController = async (req, res) => {
    try {
        return res.status (200).send ({
            status: 'success',
            message: 'hit the home endpoint'
        })
    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}

module.exports = {
    homeController
}
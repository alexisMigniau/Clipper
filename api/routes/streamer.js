module.exports = {
    path: "/streamer",
    config : (router) => {
        router.get("/search", async (req, res, next) => {
            res.status(200).send("VIDE")
        });

        return router
    }
}
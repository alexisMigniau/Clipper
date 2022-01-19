const twitch = require("../services/twitch");

module.exports = {
    path: "/streamer",
    config : (router) => {
        router.get("/search/:query", async (req, res, next) => {
            const streamers = await twitch.searchChannels(req.params.query)
            res.status(200).send(streamers)
        });

        return router
    }
}
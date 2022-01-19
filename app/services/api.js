import { get } from "./utils.js";

export async function searchChannels(name = "") {
    return await get("/streamer/search/" + name);
}
import { BotConfig } from "./utils/classes";

require('dotenv').config();

export const config: BotConfig = {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    ROBLOX_USERNAME: process.env.ROBLOX_USERNAME,
    ROBLOX_PASSWORD: process.env.ROBLOX_PASSWORD,
    ROBLOX_COOKIE: process.env.ROBLOX_COOKIE,
    ROBLOX_API_KEY: process.env.ROBLOX_API_KEY,
    groupId: 8555157,
    permissions: {
        all: ["997326665455767562"],
        group: {
            shout: [""],
            ranking: [""],
            joinrequests: [""],
            user: [""],
        },
        game: {
            general: [""],
            broadcast: [""],
            kick: [""],
            ban: [""],
            shutdown: [""],
            datastore: [""],
            execution: [""],
            jobIDs: [""],
            lock: [""],
            mute: [""]
        }
    },
    logging: {
        audit: {
            enabled: true,
            loggingChannel: "997326786046197790"
        },
        shout: {
            enabled: true,
            loggingChannel: "997326792761278594"
        },
        command: {
            enabled: true,
            loggingChannel: "997326774696431657"
        }
    },
    embedColors: {
        info: "BLUE",
        success: "GREEN",
        error: "RED",
    },
    universeId: 3741266388,
    datastoreName: "moderations",
    verificationChecks: true,
    lockedRanks: [""],
    whitelistedServers: ["997314740210638869"]
}
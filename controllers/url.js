const shortid = require('shortid');
const URL = require('../models/url');
async function handleGenerateNewShortUrl(request, response, next) {
    const { url } = request.body;
    if(!url) {
        return response.status(400).json({error: 'URL is required'});
    }
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectUrl: url,
        visitHistory: [],
    })

    return response.status(201).json({id: shortId});
}

async function handleRedirect(request, response) {
    const {shortId} = request.params;
    const entry = await URL.findOneAndUpdate({shortId}, {
        $push: {
            visitHistory: {
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' }),
            }
        }
    })
    response.redirect(entry.redirectUrl);
}
module.exports = {
    handleGenerateNewShortUrl,
    handleRedirect
}

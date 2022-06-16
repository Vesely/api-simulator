const Url = require('url');

export default function handler(request, response) {
    const url = Url.parse(request.url, true);
    const statusCode = parseInt(url.pathname.split('/').pop());
    let body = {};

    if (url.query.json) {
        try {
            body = JSON.parse(url.query.json);
        } catch (error) {
            console.error(error);
        }
    }

    response.status(statusCode).json(body);
}
const axios = require('axios')
const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {

    async index(req, res) {
        const devs = await Dev.find()

        return res.json(devs);
    },

    async store(req, res) {

        const { github_username, techs, latitude, longitude } = req.body
        let dev = Dev.findOne({ github_username })

        // if (!dev) {
        const response = await axios.get(`https://api.github.com/users/${github_username}`)
        let { name, avatar_url, bio } = response.data;
        const techsArray = parseStringToArray(techs);
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
        name = name == null ? response.data.login : name;

        dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray,
            location
        })
        // }
        return res.json(dev)
    },

    async destroy(req, res) {
        try {
            const { id } = req.body
            await Dev.deleteOne({ _id: id });
            return res.json({ 'id': id })
        } catch (error) {
          return res.json({'error': error.message})
        }
    }
}
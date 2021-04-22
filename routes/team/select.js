const client = require('../../client')

module.exports = {
  view: async (req, res) => {
    const teamsResponse = await client.info.get('/team')
    res.locals.teams = teamsResponse.data.map((x) => {
      return { text: x.displayName, value: x.type }
    })
    res.locals.teams.unshift({ value: '', text: '' })

    return res.render('teams/select-team', { errors: req.flash('errors'), data: req.flash('input')[0] })
  },
  submit: (req, res) => {
    const errors = []
    if (!req.body.team) {
      errors.push({ href: '#team', text: 'Choose a team' })
    } else {
      const v4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      // this will only happen if they're doing something weird
      if (!req.body.team.match(v4)) errors.push({ href: '#team', text: 'Choose a real team' })
    }
    if (errors.length > 0) {
      req.flash('errors', errors)
      req.flash('input', req.body)
      return res.redirect(req.originalUrl)
    }
    res.redirect(`/team/${req.body.team}`)
  }
}

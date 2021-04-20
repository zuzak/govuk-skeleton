const client = require('../../client')

module.exports = {
  view: async (req, res) => {
    const unitsResponse = await client.info.get('/unit')
    res.locals.units = unitsResponse.data.map((x) => {
      return { text: x.displayName, value: x.type }
    })
    // prepend a blank entry as a default
    res.locals.units.unshift({ value: '', text: '' })

    return res.render('units/select-unit', { errors: req.flash('errors'), data: req.flash('input')[0] })
  },
  submit: (req, res) => {
    const errors = []
    if (!req.body.unit) errors.push({ href: '#unit', text: 'Choose a team you want to look at' })

    const v4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    // this will only happen if they're doing something weird
    if (!req.body.unit.match(v4)) errors.push({ href: '#team', text: 'Choose a real unit' })

    if (errors.length > 0) {
      req.flash('errors', errors)
      req.flash('input', req.body)
      return res.redirect(req.originalUrl)
    }
    res.redirect(`/unit/${req.body.unit}`)
  }
}

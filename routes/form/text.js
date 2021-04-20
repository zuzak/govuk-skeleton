module.exports = {
  view: (req, res) => {
    // console.dir(req.flash('input'))
    return res.render('form/text', { errors: req.flash('errors'), data: req.flash('input')[0] })
  },
  submit: (req, res) => {
    const errors = []
    if (!req.body['event-name']) errors.push({ href: '#event-name', text: 'Enter the name of the event' })
    if (req.body['event-name'] === 'fred') errors.push({ href: '#event-name', text: 'Choose a name that isn\'t "fred"' })
    if (errors.length > 0) {
      req.flash('errors', errors)
      req.flash('input', req.body)
      return res.redirect(req.originalUrl)
    }
    res.json({ errors, data: req.body })
  }
}

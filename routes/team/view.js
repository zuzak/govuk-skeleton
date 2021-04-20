const client = require('../../client')

const getCaseTypes = async () => {
  const casetypeResponse = client.info.get('/caseType')
  const data = (await casetypeResponse).data

  const ret = {}
  for (const datum of data) {
    ret[datum.type] = datum.displayName
  }

  return ret
}

module.exports = {
  view: async (req, res, next) => {
    const uuid = req.params.uuid
    let teamResponse

    try {
      teamResponse = client.info.get(`/team/${uuid}`)
    } catch (e) {
      // team not found:
      if (e.errorCode === 404) return next()
      throw e
    }
    const unitResponse = client.info.get(`/team/${uuid}/unit`)

    return res.render('teams/view-team', {
      team: (await teamResponse).data,
      unit: (await unitResponse).data,
      caseTypes: await (getCaseTypes())
    })
  },
  submit: (req, res) => { }
}

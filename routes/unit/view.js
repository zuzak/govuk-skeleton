const client = require('../../client')

const getUnit = async (uuid) => {
  // no endpoint on info for just getting one unit
  const getAllUnitsResponse = client.info.get('/unit')
  const allUnits = (await getAllUnitsResponse).data

  return allUnits.find((team) => team.type === uuid)
}

const getTeamsInUnit = async (shortCode) => {
  // /unit endpoint is buggy so we have to do it with a followup query
  // per-unit endpoint expects shortcode, not uuid
  const getTeamsResponse = client.info.get(
    '/teams',
    {
      params: {
        unit: shortCode
      }
    })
  return (await getTeamsResponse).data
}

module.exports = {
  view: async (req, res) => {
    const uuid = req.params.uuid

    const unit = await getUnit(uuid)
    const teamsInUnit = getTeamsInUnit(unit.shortCode)

    return res.render('units/view-unit.njk', {
      unit: unit,
      teams: await teamsInUnit
    })
  },
  submit: (req, res) => { }
}

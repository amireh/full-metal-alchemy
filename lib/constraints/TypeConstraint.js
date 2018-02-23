module.exports = events => ({
  name: `TypeConstraint(${events.join(', ')})`,

  getInitialState() {
    return { events }
  },

  shouldConsumeEvent(constraint, event) {
    return constraint.events.indexOf(event.name) > -1
  }
})

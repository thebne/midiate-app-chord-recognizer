
export default (selectors, state) => ({
   getLastEvent: selectors.getLastEvent(state),
   currentChords: selectors.getCurrentChords(state),
  })

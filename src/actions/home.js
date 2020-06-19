export function homeAction(option) {
  return {
      type: 'HOME',
      payload:option
  }
}
export function selectAction(option) {
  return {
      type: 'SELECT',
      payload:option
  }
}
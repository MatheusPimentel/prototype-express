export const getColumns = (register) => {
  return Object.keys(register).reduce((accumulator, current) => {
    if (current === 'id') {
      return accumulator
    }
    accumulator += `, ${current}`
    return accumulator
  }, '')
}

export const getValues = (register) => {
  return Object.keys(register).reduce((accumulator, current) => {
    if (current === 'id') {
      return accumulator
    }
    accumulator += `, ${register[current]}`
    return accumulator
  }, '')
}

export const getValuesUpdate = (register) => {
  return Object.keys(register).reduce((accumulator, current) => {
    if (current === 'id') {
      return accumulator
    }
    accumulator += `, ${current} = ${register[current]}`
    return accumulator
  }, '')
}

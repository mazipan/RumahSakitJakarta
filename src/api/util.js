export function saveDataToStorage (path, data) {
  try {
    let obj = {
      data: data,
      created: new Date().getTime()
    }
    let dataString = JSON.stringify(obj)
    sessionStorage.setItem(path, dataString)
  } catch (error) {
    console.log('failed save to storage', error)
  }
}

export function checkDataFromStorage (path) {
  let res = null
  try {
    let sessionDataString = sessionStorage.getItem(path)
    if (sessionDataString) {
      let temp = JSON.parse(sessionDataString)
      console.log('session', temp)
      if (temp.created) {
        res = temp.data
      }
    }
  } catch (error) {
    console.log('failed read from storage', error)
  }
  return res
}

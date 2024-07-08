export function createSheet(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/api/v1/timesheetregister',{
      method: 'POST',
      body: JSON.stringify(order),
      headers:{'content-type': 'application/json'}
    })
    const data = await response.json()
    //TODO: on sever it will only return some info of user (not password)
    resolve({data});
  }
  );
}
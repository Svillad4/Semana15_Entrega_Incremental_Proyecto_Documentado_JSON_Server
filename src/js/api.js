export async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`No fue posible consultar ${url}. Estado: ${response.status}`);
  }
  return response.json();
}

export async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`No fue posible guardar en ${url}. Estado: ${response.status}`);
  }
  return response.json();
}

export async function patchData(url, data) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`No fue posible actualizar ${url}. Estado: ${response.status}`);
  }
  return response.json();
}

export async function putData(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`No fue posible reemplazar ${url}. Estado: ${response.status}`);
  }
  return response.json();
}

const params = new URLSearchParams(window.location.search);
const sec = params.get("pasw")
const decd = atob(sec)

async function fetchjson(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error('Error 1: Network error - invalid response');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const keys = fetchjson("./keys.json");

function verify(room) {
  const pasw = keys[room]["pass"]
  if (!pasw == decd) {
    alert(`Error 2: Invalid authorization
    Redirecting back to homepage.`)
    window.location.assign("/")
  }
}
export async function getTracks() {
  try {
    const response = await fetch("http://localhost:5000/tracks");
    return response;
  } catch (err) {
    console.log(err);
  }
}

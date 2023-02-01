export async function getTracks() {
  try {
    const response = await fetch("http://localhost:5000/tracks");
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getTotalPoints() {
  try {
    const response = await fetch("http://localhost:5000/totalPoints");
    return response;
  } catch (err) {
    console.log(err);
  }
}

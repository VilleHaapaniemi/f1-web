export async function getTracks() {
    const response = await fetch('http://localhost:5000/tracks');
    if (!response.ok) {
        throw {message: 'Failed to fetch tracks!'};
    }
    return response
}

export async function simulateRace(track) {
    console.log(track);

    await fetch('http://localhost:5000/simulateRace', {
        method: 'POST',
        body: JSON.stringify(track),
        headers: {
            'content-type': 'application/json'
        }
    })
}
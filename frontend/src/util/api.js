export async function getTracks() {
    const response = await fetch('http://localhost:5000/tracks');
    if (!response.ok) {
        throw {message: 'Failed to fetch tracks!'};
    }
    return response
}
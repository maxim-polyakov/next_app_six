export async function getData() {
    const res = await fetch('http://localhost:5000/api/', { next: { revalidate: 0 } })
    const data = await res.json()
    return data.data[0].message.toString()
}
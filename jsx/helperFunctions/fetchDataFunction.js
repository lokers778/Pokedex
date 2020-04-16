const fetchData = async (callback,url) => {
    fetch(`https://pokeapi.co/api/v2/${url}`)
        .then(res => res.json())
        .then((res) => { callback(res) })
        .catch((err) => { alert(err) })
}
export default fetchData
const fetchData = (callback,url) => {
    fetch(`https://pokeapi.co/api/v2/${url}`)
        .then(res => res.json())
        .then((res) => { callback(res)})
}
export default fetchData
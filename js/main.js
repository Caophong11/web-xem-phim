const films = document.getElementById('films');

const fetchData = async () =>{
    let response = await fetch('./js/data.json');

    let data = await response.json();

    films.innerHTML = data.map(item =>{
        return `
                <a href="../detail.html?id=${item.id}" class="movie-item col-4">
                    <img src="${item.image}" alt="Mặc sát">
                    <div class="content">
                        <p>${item.name}</p>
                    </div>

                </aa>
        `
    }).join("");


}
fetchData ()

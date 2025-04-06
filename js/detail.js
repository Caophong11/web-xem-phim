const displayDetail = async () =>{
    let params = new URLSearchParams(window.location.search);

    let filmId = params.get('id');

    let response = await fetch("./js/data.json");

    let data = await response.json();

    let filmCurrent = data.find(item => item.id.toString() === filmId);

    document.getElementById('detail_img').src=filmCurrent.image;
    document.getElementById('detailtitle').innerHTML=`Phim: ${filmCurrent.name}`
    document.getElementById('detaildirector').innerHTML=`Đạo diễn: ${filmCurrent.director}`
    document.getElementById('detaildescription').innerHTML=`Mô tả: ${filmCurrent.description}`
    document.getElementById('detailrating').innerHTML=`Đánh giá: ${filmCurrent.rating}`
}

displayDetail();
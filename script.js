
function localiza() {
    document.getElementById("tbody").innerHTML = ""
  const banda = document.getElementById("banda").value;
  fetch("https://musicbrainz.org/ws/2/artist?fmt=json&query=" + banda)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "count"
      ).innerText = `Foram encontrados ${data.count} resultados para sua pesquisa.`;
        
     
      document.getElementById(
        "artists"
      ).innerText = `Sua banda favorita é ${data.artists[0].name}, país de origem ${data.artists[0].area.name}`;
      document.getElementById(
        "id"
      ).innerText = `${data.artists[0].id}`
      const id =  data.artists[0].id
    
        fetch("https://musicbrainz.org/ws/2/release-group?fmt=json&artist="+id)
        .then(response=>response.json())
        .then(data => {
            const titles = data["release-groups"]
            console.log(titles)
            titles.map(element => {
                document.getElementById("tbody").innerHTML += `
                <tr>
                <td>
                ${element.title}
            </td>
            <td>
            ${element["first-release-date"]}
            </td>
            </tr>
            `
            });
        })
        
    })
    .catch((error) => console.log(error));

    
    
}

 
// {
//     data.release-groups.forEach(el => {
        
// document.getElementById("tbody").innerHTML = `
// <tr>
// <td>
// ${el.title}
// </td>
// <td>
// ${el.first-release-date}
// </td>
// </tr>
// `


//     });
// }
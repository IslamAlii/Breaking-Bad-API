const API = "https://www.breakingbadapi.com/api/characters",
  select = document.querySelector("#select"),
  actor = document.querySelector("#actor");

const fetchData = async () => {
  try {
    const response = await fetch(API),
      data = await response.json();

    select.innerHTML = `
      <Select class="form-control" onChange="printData(this.value)">
      <option>Please select an actor</option>
          ${data.map((character) => {
            return `<option>${character.name}</option>`;
          })}
      </select>
  `;
  } catch (error) {
    select.innerHTML = error;
  }
};
fetchData();

const printData = async (value) => {
  try {
    const response = await fetch(API + "?name=" + value),
      data = await response.json();

    if (value !== "Please select an actor") {
      actor.innerHTML = `
        <h2>${value} (${data[0].nickname})</h2>
        <h3>${data[0].portrayed}</h3>
        <img src=${data[0].img}  height="450"/>
        `;
    } else {
      actor.innerHTML = "";
    }
  } catch (error) {
    select.innerHTML = error;
  }
};

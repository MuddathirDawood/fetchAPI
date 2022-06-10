async function getUsers() {
    let url = 'users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.picture}" >
                            <h2>${user.name.first} ${user.name.last}</h2>
                            <h4>${user.location.country}</h4>
                            <h4>${user.location.state}</h4>
                            <h4>${user.location.city}: ${user.location.postcode} </h4>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            <p>${user.dob.date}  <strong>Age:   ${user.dob.age}</strong> </p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
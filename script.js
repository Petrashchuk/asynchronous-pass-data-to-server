const users = [{name: 'Ivan', lastName: 'Ivanov', age: 25},
    {name: 'Petriv', lastName: 'Petro', age: 20}, {
        name: 'Pavlo',
        lastName: 'Pavliv',
        age: 30
    }];

function randomizer(min, max) {
    return min + Math.round(Math.random() * (max - min));
}


async function next(user) {
    const ms = randomizer(2000, 6000);
    return (await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user, ms})
    })).json();
}


(async () => {
    for (let i = 0; i < users.length; i++) {
        const resFromDb = await next(users[i]);
        console.log(resFromDb);
    }
})();

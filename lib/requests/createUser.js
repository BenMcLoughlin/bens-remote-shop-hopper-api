
const createUser = async (body) => {

    console.log('Hello from createUser');
    const url = `/api/auth/createUser`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const data = await res.json();


    return data;
};

export default createUser;

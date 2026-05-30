const axios = require("axios");

const teamEndpoints = [
    {
        email: "evaaksoy9@gmail.com",
        url: "https://evastoreproject.onrender.com/getAll"
    },
    {
        email: "member2@email.com",
        url: "https://zinebstoreproject-1.onrender.com/getAll"
    },
    {
        email: "member3@email.com",
        url: "https://member3-store.onrender.com/getAll"
    }
];

async function runTests() {

    for (const member of teamEndpoints) {

        try {

            const response = await axios.get(member.url);

            console.log(
                `${member.email} - getAll to show all product - ${response.status} - PASSED`
            );

        } catch (error) {

            console.log(
                `${member.email} - getAll to show all product - FAILED`
            );
        }
    }
}

runTests();
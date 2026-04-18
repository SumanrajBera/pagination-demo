import userModel from "../models/user.model.js";

const firstNames = ['Aarav', 'Aiden', 'Alex', 'Arjun', 'Blake', 'Casey', 'Chen', 'Cole', 'Dana', 'Dani', 'Dev', 'Eli', 'Elliot', 'Fiona', 'Faith', 'George', 'Glen', 'Hana', 'Harper', 'Iris', 'Ivan', 'Jade', 'Jordan', 'Kai', 'Kiran', 'Leo', 'Luna', 'Mia', 'Morgan', 'Nico', 'Noel', 'Olive', 'Omar', 'Parker', 'Priya', 'Quinn', 'Rey', 'Riley', 'Sam', 'Sasha', 'Taylor', 'Theo', 'Uma', 'Ursa', 'Val', 'Victor', 'Will', 'Wren', 'Yuki', 'Zoe'];

const lastNames = ['Anderson', 'Brown', 'Chen', 'Davis', 'Garcia', 'Harris', 'Jackson', 'Johnson', 'Jones', 'Kim', 'Kumar', 'Lee', 'Martin', 'Martinez', 'Miller', 'Moore', 'Nguyen', 'Patel', 'Robinson', 'Rodriguez', 'Singh', 'Smith', 'Taylor', 'Thomas', 'Thompson', 'White', 'Williams', 'Wilson', 'Wright', 'Young'];

const departments = ['Backend', 'Frontend', 'Mobile', 'Platform', 'DevOps', 'ML', 'Security', 'Data', 'QA', 'Design'];
const roles = ['Junior Engineer', 'Engineer', 'Senior Engineer', 'Staff Engineer', 'Principal Engineer', 'Engineering Manager', 'Director'];
const statuses = ['active', 'active', 'active', 'inactive', 'on-leave']; // weighted toward active

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateUser(i) {
    const firstName = randomFrom(firstNames);
    const lastName = randomFrom(lastNames);
    return {
        name: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@company.com`,
        department: randomFrom(departments),
        role: randomFrom(roles),
        status: randomFrom(statuses),
        salary: Math.floor(Math.random() * 80000 + 60000), // 60k–140k
        joinedAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365 * 5), // within last 5 years
    };
}

async function seed() {
    try {
        await userModel.deleteMany({})
        const users = Array.from({ length: 200 }, (_, i) => generateUser(i));
        await userModel.insertMany(users);
        console.log("Seeded 200 users")
    } catch (err) {
        console.log("Error while initialising")
    }
}

export default seed;
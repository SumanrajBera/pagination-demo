const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Katie', 'Michael', 'Sarah', 'David', 'Laura'];
const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez'];
const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR', 'Finance', 'Support', 'Product'];
const roles = ['Manager', 'Developer', 'Designer', 'Analyst', 'Director', 'Coordinator', 'Specialist', 'Lead'];
const statuses = ['Active', 'On Leave', 'Terminated'];

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateMockData = (count = 50) => {
  return Array.from({ length: count }, (_, i) => {
    const firstName = randomFrom(firstNames);
    const lastName = randomFrom(lastNames);
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@company.com`,
      department: randomFrom(departments),
      role: randomFrom(roles),
      status: randomFrom(statuses),
      salary: Math.floor(Math.random() * 80000 + 60000), // 60k–140k
      joinedAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365 * 5).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })
    };
  });
};

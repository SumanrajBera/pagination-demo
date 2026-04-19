import React from 'react'
import StatusBadge from './StatusBadge'

const DataTable = ({ items }) => {
    const formatSalary = (salary) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(salary);
    
    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Salary</th>
                        <th>Joined At</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="text-subtle">{item.email}</td>
                            <td>{item.department}</td>
                            <td>{item.role}</td>
                            <td><StatusBadge status={item.status} /></td>
                            <td>{formatSalary(item.salary)}</td>
                            <td className="text-subtle">{item.joinedAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
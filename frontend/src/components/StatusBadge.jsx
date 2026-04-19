import React from 'react'

const StatusBadge = ({ status }) => {
    let badgeClass = 'badge-default';
    if (status === 'Active') badgeClass = 'badge-active';
    else if (status === 'On Leave') badgeClass = 'badge-leave';
    else if (status === 'Terminated') badgeClass = 'badge-terminated';

    return <span className={`badge ${badgeClass}`}>{status}</span>;
};

export default StatusBadge
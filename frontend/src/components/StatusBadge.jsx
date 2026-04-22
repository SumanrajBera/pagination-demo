import React from 'react'

const StatusBadge = ({ status }) => {
    let badgeClass = 'badge-default';
    if (status === 'active') badgeClass = 'badge-active';
    else if (status === 'on-leave') badgeClass = 'badge-leave';
    else if (status === 'inactive') badgeClass = 'badge-terminated';

    return <span className={`badge ${badgeClass}`}>{status}</span>;
};

export default StatusBadge
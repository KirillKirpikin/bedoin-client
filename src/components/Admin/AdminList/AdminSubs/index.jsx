import React from 'react';
import { useGetAllSubsQuery } from '../../../../store/api/subscribe.api';
import ListSubs from '../../AdminComponents/ListSubs';

const AdminSubs = () => {
    const {isLoading, data} = useGetAllSubsQuery(); 
    return (
        <div className='admin-product'>
            {isLoading ?
                <div>Loading...</div>
                : data && data.length > 0 ? (
                    data.map(item=> (
                        <ListSubs key={item._id} item={item}/>
                    ))
                ) : (<div>Not Found</div>)  
            }
        </div>
    );
};

export default AdminSubs;
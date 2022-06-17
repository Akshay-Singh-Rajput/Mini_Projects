import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';

export const Detail_Page = () => {

    const navigate = useNavigate();
    const params = useParams();

    const { id } = params;
    const isInteger = /^-?[0-9]+$/.test(id + '');
    useEffect(() => {
        if (!isInteger) {
            navigate("/");
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div>Detail Page id : {id}
        <br />
        <Outlet  />
        </div>
    );
};

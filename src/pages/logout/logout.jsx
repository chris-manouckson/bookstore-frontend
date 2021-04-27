import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authLogout } from '../../store/actions';
import { selectAuthCurrentUser } from '../../store/selectors';
import Layout from '../../components/layout';

const Logout = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const currentUser = useSelector(selectAuthCurrentUser);

  useEffect(() => {
    dispatch(authLogout());
  }, [dispatch]);

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [currentUser, history]);

  return (
    <Layout>
      {/* TODO: replace with loader component */}
      Loading...
    </Layout>
  );
};

export default Logout;

import { Redirect as RedirectDOM } from 'react-router-dom';

const Redirect = ({ to = '/' }) => <RedirectDOM to={to} />;

export default Redirect;

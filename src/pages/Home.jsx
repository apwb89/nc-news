import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h1>Home Page</h1>
            <svg id="logo-57" width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="stroke" d="M36.95 4.31006H13.05L1.09998 25.0001L13.05 45.6901H36.95L48.9 25.0001L36.95 4.31006Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M36.99 6.15991H15.23L4.34998 24.9999L15.23 43.8399H36.99L47.87 24.9999L36.99 6.15991Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.03 8.01001H17.41L7.59998 25L17.41 41.99H37.03L46.84 25L37.03 8.01001Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.07 9.86011H19.59L10.85 25.0001L19.59 40.1401H37.07L45.81 25.0001L37.07 9.86011Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.12 11.71H21.77L14.1 25L21.77 38.29H37.12L44.79 25L37.12 11.71Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.16 13.5601H23.95L17.35 25.0001L23.95 36.4401H37.16L43.76 25.0001L37.16 13.5601Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.2 15.4199H26.13L20.6 24.9999L26.13 34.5799H37.2L42.73 24.9999L37.2 15.4199Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.24 17.27H28.31L23.85 25L28.31 32.73H37.24L41.7 25L37.24 17.27Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.28 19.1201H30.49L27.1 25.0001L30.49 30.8801H37.28L40.68 25.0001L37.28 19.1201Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M37.33 20.97H32.67L30.35 25L32.67 29.03H37.33L39.65 25L37.33 20.97Z" stroke="black" stroke-width="0.5" stroke-miterlimit="10"></path></svg>
            <Button onClick={() => navigate('/topics')} variant="contained">Browse</Button>
            <Button onClick={() => navigate('/login')} variant="contained">Login</Button>
        </section>
    )
}

export default Home;
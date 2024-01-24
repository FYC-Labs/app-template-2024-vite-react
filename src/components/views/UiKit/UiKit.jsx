import {
  Container,
} from 'react-bootstrap';
import TableOfContents from './_components/TableOfContents';
import Headers from './_components/Headers';
import Buttons from './_components/Buttons';
import Cards from './_components/Cards';
import RowsAndColumns from './_components/RowsAndColumns';
import NavBars from './_components/NavBars';
import NavsAndTabs from './_components/NavsAndTabs';
import UniversalInputs from './_components/UniversalInputs';
import Dropdowns from './_components/Dropdowns';
import Modals from './_components/Modals';
import Images from './_components/Images';
import Tables from './_components/Tables';
import Alerts from './_components/Alerts';
import Badges from './_components/Badges';
import ProgressBars from './_components/ProgressBars';
import Loaders from './_components/Loaders';
import Colors from './_components/Colors';
import Toasts from './_components/Toasts';

const UiKit = () => (
  <Container fluid className="bg-secondary pb-24">
    <h1 className="text-center py-16 text-decoration-underline">Hello, Bootstrap 5 & React-Bootstrap!</h1>

    <TableOfContents />
    <hr />

    <Colors />
    <hr />

    <Headers />
    <hr />

    <Buttons />
    <hr />

    <Cards />
    <hr />

    <RowsAndColumns />
    <hr />

    <NavBars />
    <hr />

    <NavsAndTabs />
    <hr />

    <UniversalInputs />
    <hr />

    <Dropdowns />
    <hr />

    <Modals />
    <hr />

    <Images />
    <hr />

    <Tables />
    <hr />

    <Alerts />
    <hr />

    <Badges />
    <hr />

    <ProgressBars />
    <hr />

    <Loaders />
    <hr />

    <Toasts />

  </Container>
);

export default UiKit;

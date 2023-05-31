import StoresTable from "./blockstoretable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <StoresTable/>
      </Col>
    </Row>
  );
};

export default Tables;

import { Badge, ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <ListGroup.Item className="d-flex flex-row justify-content-center w-75 mx-auto">
      <EmpleadoAvatar className="col-4 col-md-2"></EmpleadoAvatar>
      <div className="col-7 col-md-9 ms-md-5 my-auto">
        <h4 className="h3 fw-bolder">Layla Dueñas</h4>
        <p className="mb-0 fs-5">CEO<Badge bg="info ms-2 rounded-0">Bussines</Badge></p>
      </div>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;

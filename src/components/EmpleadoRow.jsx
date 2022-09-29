import { Badge, ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({empleado}) => {
  console.log(empleado)
  return (
    <ListGroup.Item className="d-flex flex-row justify-content-center w-75 mx-auto">
      <EmpleadoAvatar avatar={empleado.pic} className="col-4 col-md-4 col-lg-3"></EmpleadoAvatar>
      <div className="col-7 col-md-8 col-lg-9 ms-md-5 my-auto">
        <h4 className="h3 fw-bolder">{empleado.fullName}</h4>
        <p className="mb-0 fs-5">{empleado.title}<Badge bg="info ms-1 rounded-0">{empleado.department}</Badge></p>
      </div>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;

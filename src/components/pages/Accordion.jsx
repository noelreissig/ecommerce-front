import { Accordion } from "react-bootstrap";
import React from "react";

function AccordionComponent() {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-sm-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="fw-bold">Detalles</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  Mesa redonda con sobre terrazo Ø 120 cm con fondo blanco y
                  madera maciza de acacia.
                </p>
                <p className="text-start">
                  Estructura hecha con madera maciza de acacia con un acabado
                  blanqueado.
                </p>
                <p className="text-start">
                  Se trata de una pieza con un diseño adaptable para interiores
                  y preparada para exteriores.
                </p>
                <p className="text-start">
                  Esta mesa pertenece a la colección Shanelle, con diferentes
                  acabados disponibles para sobre y estructura.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p className="fw-bold"> Mantenimiento</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  Recomendaciones generales: No utilizar productos abrasivos
                  como acetonas, lejías, disolventes, etc.
                </p>
                <p className="text-start">
                  Limpie con un paño humedecido con una solución jabonosa suave
                  y seque inmediatamente con un paño seco. Quitar el polvo con
                  un plumero.
                </p>
                <p className="text-start">
                  Guarde los muebles en un lugar seco interior. Si desea dejarlo
                  al aire libre, protéjalo con una cubierta impermeable en
                  otoño, invierno y temporada de lluvias
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-sm-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="fw-bold">Garantía</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  2 años de garantía a partir de la compra
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p className="fw-bold">Métodos y costos de envío</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  A todo Montevideo: Envío sin costo en compras mayores a USD
                  100 | Costo normal: USD 6
                </p>
                <p className="text-start">
                  A todo el país vía DAC: Costo variable según tamaño del
                  paquete.
                </p>
                <p className="text-start">
                  A todo Maldonado vía DePunta: Costo variable según tamaño del
                  paquete.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AccordionComponent;

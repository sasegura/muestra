import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestros precios</h1>
            <p className="font13">
            Los precios pueden variar según la longitud y el tipo de cabello. Para obtener un presupuesto más preciso, no dudes en comunicarte con nosotros o reservar una cita.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="29,99€"
                title="Cortes de Cabello"
                text="Experimenta la maestría de nuestros barberos con una variedad de cortes de cabello diseñados para realzar tu estilo y personalidad. Desde cortes clásicos hasta tendencias modernas, te garantizamos un resultado impecable que te hará lucir y sentirte seguro."
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: false },
                //   { name: "Product", cheked: false },
                //   { name: "Product Offer", cheked: false },
                // ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="49,99€"
                title="Afeitados"
                text="Sumérgete en la experiencia tradicional de un afeitado en barbería, donde la precisión y el cuidado se combinan para ofrecerte un afeitado suave y revitalizante. Nuestros barberos expertos están aquí para brindarte un servicio excepcional y un acabado impecable."
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: true },
                //   { name: "Product", cheked: true },
                //   { name: "Product Offer", cheked: false },
                // ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="59,99€"
                title="Recorte y Mantenimiento de Barba"
                text="Define tu estilo con nuestros servicios de recorte y mantenimiento de barba. Ya sea que prefieras un aspecto pulido o algo más natural, nuestros barberos expertos te ayudarán a mantener tu barba con un aspecto impecable y bien cuidado."
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: true },
                //   { name: "Product", cheked: true },
                //   { name: "Product Offer", cheked: true },
                // ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;





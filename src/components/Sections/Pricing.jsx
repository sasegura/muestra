import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing({ data }) {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestros precios</h1>
            <p className="font13">{data.message}</p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            {data.prices.map(({ title, text, price }) => (
              <TableBox>
                <PricingTable
                  icon="roller"
                  price={price}
                  title={title}
                  text={text}
                  action={() => alert("clicked")}
                />
              </TableBox>
            ))}
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
    margin: 0 auto;
  }
`;

import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
    Container,
    Row,
    Panel,
    Column,
    Gallery,
    Section,
    Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantia com o Lorem Ipsum</p>
          <p className="description">Receba o produto que você está esperando, ou receba seu dinheiro de volta</p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia.</p>
        </span>
      </div>
      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  );
}

const Info = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        <br />
        <br />
        Itens inclusos: <br />
        - 1x Lorem Ipsum<br />
        - 1x Lorem Ipsum<br />
        - 1x Lorem Ipsum<br />
        - 1x Lorem Ipsum<br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    </Description>
  );
}

export default Product;
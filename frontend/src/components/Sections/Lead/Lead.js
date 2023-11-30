import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Lead.scss';
import { quotes } from '../../../utils/quotes';

function Lead() {

  return (
    <section className="lead">
      <h1 className="lead__title">
        Готовьте с любовью
      </h1>

      <Carousel fade slide={false} indicators={false} controls={false} interval={5000}>
        {quotes.map(quote => {
          return (
            <Carousel.Item key={quote.id}>
              <blockquote className="lead__quote">{quote.quote}</blockquote>
            </Carousel.Item>
          )
        })}
      </Carousel>

      <Button size="lg" className="lead__button">
        Смотреть рецепты
      </Button>

      <div className="lead__image"></div>
    </section>
  );
}

export default Lead;

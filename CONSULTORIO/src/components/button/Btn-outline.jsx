import Button from 'react-bootstrap/Button';
import './Btn.css'

function Btn(props) {
  return (
    <>
      {' '} <Button href="#" variant="outline-success" className='botao-outline'>{props.frase}</Button>{' '}
    </>
  );
}

export default Btn;

import styled from 'styled-components'
import ReactDom from 'react-dom'
const Wrapper = styled.section`
position: absolute;
top: 0;
bottom: 0;
cursor: pointer;
left: 0;
right: 0;
z-index: 666999999999;
background: ${props => props.bg};
&.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const Model = ({children,bg,center,close}) => {

  const handleClick = ()=>{
    close && close(false);
  }
  return ReactDom.createPortal(<Wrapper onClick={handleClick}   bg={bg} className={center && 'center'} >{children} </Wrapper>,
                                document.getElementById('model')
                                );
}

export default Model

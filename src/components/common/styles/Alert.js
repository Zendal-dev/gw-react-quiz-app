import styled from 'styled-components'

const defineColor = (type, color1, color2, color3, defaultColor) => {
   switch (type) {
      case 'success' : return color1
      case 'warning' : return color2
      case 'danger' : return color3
      default : return defaultColor || '#e2e3e5'
   }
}

export const Alert = styled.div`
  max-width: 500px;
  padding: 15px 20px;
  margin: 10px 0;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: fade .25s ease;
  
  font-family: 'Roboto', sans-serif;
  font-size: .95rem;
  color: ${props => defineColor(props.type, '#155724', '#856404','#721c24')};

  background-color: ${props => defineColor(props.type, '#d4edda', '#fff3cd', '#F8D7DA')};
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => defineColor(props.type, '#c3e6cb', '#ffeeba','#f5c6cb')};
  
  @keyframe fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
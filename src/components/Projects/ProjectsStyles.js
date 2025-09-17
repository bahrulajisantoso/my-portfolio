import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 1rem;
place-items: center;
column-gap: 3rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  flex: 1 1 300px; 
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 8px 16px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center; 
  gap: 2rem;               
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;         
  align-items: center;         
  gap: 0.5rem;                   
  color: #fff;                 
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  background: #2563eb;       
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #1e40af;      
  }
`;


export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;       
  gap: 8px;              
  padding: 0;
  margin: 8px 16px;
  list-style: none;
`;

export const Tag = styled.li`
  background: #1e293b;     
  color: #9cc9e3;          
  padding: 4px 10px;   
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
`;


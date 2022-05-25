import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 85%;
    gap: 20px;
`

export const Slider = styled.ul`
    list-style: none;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    width: 100%;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const SliderItemWrapper = styled.li`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex:0 0 auto;
    animation: slideshow 3s ease infinite;
    animation-delay: 10s;

    @keyframes slideshow {
        from { 
            transform: translateX(0); 
        }
        to { 
            transform:translateX(-100%); 
        }
    }
`

export const ImageWrapper = styled.div`
    width: 70%;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;  
    }
`

export const Image = styled.img`
    width: 100%;
    height: 520px;  
    
    @media (max-width: 768px) {
        min-height: 50px;
        height: auto;  
    }
`

export const Panel = styled.div`
    background-color: white;
    width: 30%;
    gap: 30px;
    z-index: -1;
    animation: slide-right 1s ease-in forwards;

    @media (max-width: 768px) {
        width: 100%;
    }

    @keyframes slide-right {
        from{
            opacity: 0;
            margin-left: -200px;
        }
        to{
            opacity: 1;
            margin-left: 0px;
        }
    }
`

export const Content = styled.div`
    padding: 20px;
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    color: #272630;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;

`

export const LinkWrapper = styled.div`
    
`

export const H5 = styled.h5`
    font-size: 14px;
    color: ${props => props.color ? props.color : undefined}
`

export const H3 = styled.h3`
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    font-size: 1.7rem;
    color: #272630;
`

export const P = styled.p`
    font-weight: normal;
    font-size: 14px;
    color: ${props => props.color? props.color : "#b3b3b3"};
`

export const DealContent = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-top: 10px;
`

export const PriceContent = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`

export const BuyNow = styled.li`
    padding: 4px 12px;
    height: fit-content;
    font-weight: normal;
    font-size: 12px;
    background-color: #b3b3b3;
    border-radius: 3px;
`

export const HelperText = styled.p`
    color: #b3b3b3;
    font-weight: 300;
`

export const AlertArea = styled.div`
    font-size: 18px;
    padding: 5px;
`

export const ShareOnSocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`

export const Icon = styled.div`
    color: ${props => props.color};
    border: 1px solid  ${props => props.color};
    border-radius: 100%;
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;

    &:hover{
        background-color: ${props => props.color};
        color: white;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
   
`

export const Section = styled.section`
    background-color: white;
`

export const Raw = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
    gap: 6%;
    flex-wrap: wrap;
`

export const RawItem = styled.li`
    display: flex;
    gap: 6%;
    padding: 10px 0; 
    flex: 1 0 300px;
    width: 27%;
`

export const IconWrapper = styled.img`
    width: 50px;
    height: 50px;
`

export const Text = styled.div`
    font-size: 21px;
    font-weight: 500;
`

export const H4 = styled.h4`
    font-weight: 300;
`

export const BannerHelper = styled.p`
    margin-bottom: 2px;
    font-size: 13px;
    text-align: justify;
    line-height: 16px;

    @media (max-width: 768px){
        width: 85%;
    }
`

export const GradiantShap = styled.div`
    width: 100%;
    height: 5px;
    background: rgb(62,171,211);
    background: linear-gradient(90deg, 
            rgba(62,171,211,1) 5%, 
            rgba(185,200,133,1) 18%, 
            rgba(248,154,80,1) 100%);
` 

export const AvailableTickets = styled.div`
    padding-top: 40px;
`

export const CardsRaw = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3%;
`

export const Card = styled.div`
    /* flex: 1 0 25%; */
    margin-top: 20px;
    box-sizing: border-box;
    width: 22%;

    @media (max-width: 768px){
        width: 90%;
    }
`

export const CardImage = styled.img`
    width: 100%;
`

export const ButtonBuy = styled.div`
    width: 100%;
    background-color: #0066b2;
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    place-items: center;
    border-radius: 2px;
`

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #ebebeb;
    padding: 10px;
`

export const Title = styled.div`
    height: 100px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    border-left: 5px solid #0066b2;
`

export const MatchTitle = styled.p`
    font-size: 20px;
    color: #272630;
    font-weight: bold;

    &:hover{
        color: ${props => props.hover ? "#0066b2" : undefined} ;
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`
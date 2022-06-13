import {
    SliderItemWrapper, Image, Panel,
    ImageWrapper, Content, LinkWrapper,
    H5 ,H3, P, DealContent, 
    PriceContent, BuyNow, ShareOnSocialMedia,
    HelperText, SocialMedia, Icon, AlertArea
   } from "./SubComponents"

import { MdLocationOn, MdOutlineAccessTime } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
import { TiSocialTwitter, 
        TiSocialLinkedin, 
        TiSocialGooglePlus, 
        TiSocialPinterest, 
        TiSocialFacebook 
      } from 'react-icons/ti'

import { RouteLink } from '../../routes/RoutesLinks'
      

const SliderItem = ({ event }) => {
    
    function truncateString(str, num) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }
    
  return (
    <SliderItemWrapper>
        <ImageWrapper>
        <RouteLink to={`/match/${event.id}`}>
            <Image src={event.cover} alt="match day"/>
        </RouteLink>
        </ImageWrapper>
        <Panel>
            <Content>
                <DealContent>
                    <LinkWrapper>
                        <RouteLink to={`/billetterie/sport`} color="#0d6eb6">
                            Sport
                        </RouteLink>
                    </LinkWrapper>
                    <H5>
                        <MdLocationOn size={14}/> Casablanca
                    </H5>
                    <RouteLink to={`/match/${event.id}`}>
                        <H3>
                            {event.title} 
                        </H3>
                    </RouteLink>
                    <P dangerouslySetInnerHTML={{ __html: truncateString(event.description, 250) }} />
                </DealContent>
                <PriceContent>
                    <H3>{event.price} DH</H3>
                    <BuyNow disabled={event.soldOut}>
                        <RouteLink to={`/match/${event.id}`} >
                            <P color={event.soldOut ? "#626467" : "#ffffff"}>{event.soldOut ? "Guichet fermé" : "Acheter"}</P>
                        </RouteLink>
                    </BuyNow>
                </PriceContent>
                <AlertArea>
                 <MdOutlineAccessTime color='black'/> {  event.expiredAt }
                </AlertArea>
                <ShareOnSocialMedia>
                    <P><BsEmojiSmile size={12}/> Offre Special</P>
                    <HelperText> Partagez cet événement </HelperText>
                    <SocialMedia>
                        <a href={`https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fsport.guichet.ma%252Fbilletterie%252Fsport%252F${event.title}%26title%3D${event.title}&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB`} 
                            target="_blank" rel="noreferrer">
                            <Icon color="#3b5999"><TiSocialFacebook size={24}/></Icon>
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fsport.guichet.ma%2Fbilletterie%2Fsport%2F${event.title}&text=${event.title}`}
                            target="_blank" rel="noreferrer">
                            <Icon color="#00aced"><TiSocialTwitter size={24} /></Icon>
                        </a>
                        <a href={`https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fsport.guichet.ma%2Fbilletterie%2Fsport%2F${event.title}&description=${event.title}`} 
                            target="_blank" rel="noreferrer">
                            <Icon color="#c8232c"><TiSocialPinterest size={24} /></Icon>
                        </a>
                        <a href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fsport.guichet.ma%252Fbilletterie%252Fsport%252F${event.title}%26title%3D${event.title}%26mini%3Dtrue`} 
                            target="_blank" rel="noreferrer">
                            <Icon color="#0976b4"><TiSocialLinkedin  size={24} /></Icon>
                        </a>
                        <a href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fsport.guichet.ma%252Fbilletterie%252Fsport%252F${event.title}%26title%3D${event.title}%26mini%3Dtrue`} 
                            target="_blank" rel="noreferrer">
                            <Icon color="#dd4b39"><TiSocialGooglePlus size={24} /></Icon>
                        </a>
                    </SocialMedia>
                </ShareOnSocialMedia>
            </Content>
        </Panel>
    </SliderItemWrapper>
  )
}

export default SliderItem
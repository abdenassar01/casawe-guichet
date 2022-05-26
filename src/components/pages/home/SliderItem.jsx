import React from 'react'

import {
    SliderItemWrapper, Image, Panel,
    ImageWrapper, Content, LinkWrapper,
    H5 ,H3, P, DealContent, 
    PriceContent, BuyNow, ShareOnSocialMedia,
    HelperText, SocialMedia, Icon, AlertArea
   } from "./SubComponents"

import { MdLocationOn } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'
import { TiSocialTwitter, 
        TiSocialLinkedin, 
        TiSocialGooglePlus, 
        TiSocialPinterest, 
        TiSocialFacebook 
      } from 'react-icons/ti'

import { useState, useEffect } from 'react'
import { RouteLink } from '../../routes/RoutesLinks'
      

const SliderItem = () => {

    const [id, setId] = useState("20")
    
    function truncateString(str, num) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }

    useEffect(() => {
        setId(10);
    },[])
    

  return (
    <SliderItemWrapper>
        <ImageWrapper>
        <RouteLink to={`/match/${id}`}>
            <Image src="https://guichet.imgix.net/medias/PnwEhLGKqA1jWq050wIFa5oqlkZmBBrlRvhZ5J7y.jpeg?w=900&h=580&fit=clip&auto=format,compress&q=80" alt="match day"/>
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
                    <RouteLink to={`/match/${id}`}>
                        <H3>
                            {`Wydad Athletic Club vs Chabab Riadhi Belouizdad`} 
                        </H3>
                    </RouteLink>
                    <P>
                        {truncateString("Le Wydad Athletic Club reçoit le Chabab Riadhi Belouizdad pour le match retour de la Quart de Finale de la Ligue des Champions de la CAF TotalEnergies 2021-2022, le Samedi 23 Avril 2022 à 22h00 au Complexe sportif Mohammed V", 150)}
                    </P>
                </DealContent>
                <PriceContent>
                    <H3>{`700DH`}</H3>
                    <BuyNow>
                        <RouteLink to={`/match/${id}`} disabled style={{
                            pointerEvents: "none",
                            cursor: "not-allowed"
                        }}>
                            <P color="#626467">{`Guichet fermé`}</P>
                        </RouteLink>
                    </BuyNow>
                </PriceContent>
                <AlertArea>
                    {new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay()}
                </AlertArea>
                <ShareOnSocialMedia>
                    <P><BsEmojiSmile size={12}/> Offre Special</P>
                    <HelperText> Partagez cet événement </HelperText>
                    <SocialMedia>
                    <a href={`https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fsport.guichet.ma%252Fbilletterie%252Fsport%252Fwac-vs-ock%26title%3DWAC%2Bvs%2BOCK&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB`} 
                        target="_blank" rel="noreferrer">
                        <Icon color="#3b5999"><TiSocialFacebook size={24}/></Icon>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fsport.guichet.ma%2Fbilletterie%2Fsport%2Fwac-vs-ock&text=WAC%20vs%20OCK`}
                        target="_blank" rel="noreferrer">
                        <Icon color="#00aced"><TiSocialTwitter size={24} /></Icon>
                    </a>
                    <a href={`https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fsport.guichet.ma%2Fbilletterie%2Fsport%2Fwac-vs-ock&description=WAC%20vs%20OCK`} 
                        target="_blank" rel="noreferrer">
                        <Icon color="#c8232c"><TiSocialPinterest size={24} /></Icon>
                    </a>
                    <a href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fsport.guichet.ma%252Fbilletterie%252Fsport%252Fwac-vs-ock%26title%3DWAC%2520vs%2520OCK%26mini%3Dtrue`} 
                        target="_blank" rel="noreferrer">
                        <Icon color="#0976b4"><TiSocialLinkedin  size={24} /></Icon>
                    </a>
                    <a href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fsport.guichet.ma%252Fbilletterie%252Fsport%252Fwac-vs-ock%26title%3DWAC%2520vs%2520OCK%26mini%3Dtrue`} 
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
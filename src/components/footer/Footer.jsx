import { FooterWrapper, Newsletter, Text, 
  Mail, Form, H3, P, 
  Input, Submit, CasaweProfile, Image,
  About, Copyright, CopyrightText, 
  Sponsors, SponsorsImage
} from './SubComponents'

const Footer = () => {
  return (
    <FooterWrapper>
        <Newsletter>
          <Text>
            <H3>Inscrivez-vous à la newsletter</H3>
            <P>Vous soyez alertés en amont des meilleurs plans, spectacles, concerts, festivals, etc... </P>
          </Text>
            <Form method="post">
              <Mail>
                <Input type="email" placeholder="Address email"/>
                <Submit type="submit" value="S'INSCRIRE"/>
              </Mail>
            </Form>
        </Newsletter>
        <About>
          <CasaweProfile>
            <Image src="https://casawe.guichet.ma/frontend/images/casawe.png" alt="Casawe Profile"/>
            <P size="15px">Casablanca Events et Animation a pour mission la promotion de Casablanca à l’échelle nationale et internationale par le biais d’animations aussi bien économiques, culturelles que sportives.</P>
          </CasaweProfile>
        </About>
        <Copyright>
          <CopyrightText>
            <b>Copyright 2022 &copy; Casawe</b>
             - Tous droits réservés. | By Guichet
          </CopyrightText>
          <Sponsors>
              <SponsorsImage src="https://guichet.imgix.net/frontend/images/payment-logos.png" alt="Guichet sponsors"/>
          </Sponsors>
        </Copyright>
    </FooterWrapper>
  )
}

export default Footer
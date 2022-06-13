import { Section, Raw, RawItem , IconWrapper, Text, 
    BannerHelper, GradiantShap, H4 
} from './SubComponents';

const Banner = () => {
  return (
    <Section>
        <Raw>
            <RawItem>
                <IconWrapper src="https://guichet.imgix.net/frontend/images/tickets.png" alt="Ticket" />
                <Text>
                    <H4>Achetez <br /><b>des tickets</b></H4>
                    <BannerHelper>Achetez des tickets de qualité pour les meilleurs événements en toute sécurité </BannerHelper>
                </Text>
            </RawItem>
            <RawItem>
                <IconWrapper src="https://guichet.imgix.net/frontend/images/satisfaction.png" alt="Ticket" />
                <Text>
                    <H4>Notre <br /><b>garantie 100 %</b></H4>
                    <BannerHelper>Éliminez les risques et assurez-vous une transaction sécuritaire et protégée en faisant</BannerHelper>
                </Text>
            </RawItem>
            <RawItem>
                <IconWrapper src="https://guichet.imgix.net/frontend/images/contact.png" alt="Ticket" />
                <Text>
                    <H4>Support  <br /><b>7j/7</b></H4>
                    <BannerHelper>05 22 22 77 45/46/47</BannerHelper>
                </Text>
            </RawItem>    
        </Raw>
        <GradiantShap></GradiantShap>
    </Section>
  )
}

export default Banner
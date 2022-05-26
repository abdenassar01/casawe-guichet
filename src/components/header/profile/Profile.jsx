import { ProfileBox, DropDownContainer, DropDownHeader,
  DropDownListContainer, DropDownList, AccountLink,
  ProfilePanel, Avatar, User, DropDownItem
} from '../SubComponents';

import { RiArrowDropDownFill } from 'react-icons/ri';

import { useState } from "react";

const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <ProfileBox>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            <ProfilePanel>
              <Avatar 
                src="https://guichet.imgix.net/frontend/images/profile.png" 
                alt="profile image" 
                />
                <User>
                  abdenassar amimi 
                  <RiArrowDropDownFill size="15px"/>
                </User>
            </ProfilePanel>
          </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <DropDownItem key={1}>
                <AccountLink to="/profile" onClick={toggling}>Mon compte</AccountLink>
              </DropDownItem>
              <DropDownItem key={2}>
                <AccountLink to="/mes-commandes" onClick={toggling}>Mes commandes</AccountLink>
              </DropDownItem>
              <DropDownItem key={3}>
                <AccountLink to="/deconnexion" onClick={toggling}>Deconnexion</AccountLink>
              </DropDownItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </ProfileBox>
  )
}

export default Profile
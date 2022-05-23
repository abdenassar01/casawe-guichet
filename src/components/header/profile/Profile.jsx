import { ProfileBox, DropDownContainer, DropDownHeader,
  DropDownListContainer, DropDownList, AccountLink,
  ProfilePanel, Avatar, User
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
              <AccountLink to="/profile" onClick={toggling}>Profile</AccountLink>
              <AccountLink to="/mes-commandes" onClick={toggling}>Mes commandes</AccountLink>
              <AccountLink to="/deconnexion" onClick={toggling}>Deconnexion</AccountLink>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </ProfileBox>
  )
}

export default Profile
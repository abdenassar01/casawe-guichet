import { ProfileBox, DropDownContainer, DropDownHeader,
  DropDownListContainer, DropDownList, AccountLink,
  ProfilePanel, Avatar, User, DropDownItem
} from '../SubComponents';

import { RiArrowDropDownFill } from 'react-icons/ri';

import instance from "../../../axios/axios";

import { useState, useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { useUserStore } from '../../../models/userStore';

const Profile = observer(() => {

  const [isOpen, setIsOpen] = useState(false);
  // const [ user, setUser ] = useState({});

  const toggling = () => setIsOpen(!isOpen);


const root = useUserStore();

  useEffect(() => {
    //
  },[])

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
                  { 
                    (root.isAuthentificated) &&  root.user?.getFullName()
                  } 
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
})

export default Profile
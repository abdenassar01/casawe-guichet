import { useState } from "react"
import { CodePromotionnelWrapper, InputField, OkButton, 
  PromoBox, Tab, Heading 
} from "../SubComponents"

const CodePromotionnel = ({ setCode }) => {

  const [ promo, setPromo ] = useState("")

  return (
    <CodePromotionnelWrapper>
        <Tab>
          <hr />
          <Heading>Code promotionnel</Heading>
        </Tab>
        <InputField>
          <PromoBox 
            type="text" placeholder="Saisisser votre code" 
            value={ promo } 
            onChange={ e => setPromo(e.target.value) }
          />
          <OkButton onClick={ () => setCode(promo) }>Ok</OkButton>
        </InputField>
    </CodePromotionnelWrapper>
  )
}

export default CodePromotionnel
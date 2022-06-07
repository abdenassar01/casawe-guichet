import { CodePromotionnelWrapper, InputField, OkButton, 
  PromoBox, Tab, Heading 
} from "../SubComponents"

const CodePromotionnel = () => {
  return (
    <CodePromotionnelWrapper>
        <Tab>
          <hr />
          <Heading>Code promotionnel</Heading>
        </Tab>
        <InputField>
          <PromoBox type="text" placeholder="Saisisser votre code" />
          <OkButton>Ok</OkButton>
        </InputField>
    </CodePromotionnelWrapper>
  )
}

export default CodePromotionnel
import { CodePromotionnelWrapper, InputField, OkButton, 
  PromoBox, Tab, Heading 
} from "../SubComponents"

const CodePromotionnel = ({ code, setCode }) => {
  return (
    <CodePromotionnelWrapper>
        <Tab>
          <hr />
          <Heading>Code promotionnel</Heading>
        </Tab>
        <InputField>
          <PromoBox type="text" placeholder="Saisisser votre code" value={ code } onChange={ e => setCode(e.target.value) }/>
          <OkButton>Ok</OkButton>
        </InputField>
    </CodePromotionnelWrapper>
  )
}

export default CodePromotionnel
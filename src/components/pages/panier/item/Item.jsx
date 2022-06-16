import {  ItemImage, ItemContent, Icon,
    OffreName, Title, Pricing, Quantity, BenificaireTitle,
    Input, PricesWrapper, Price, BoldTotal,
    ItemWrapper, Fields, BeneficiareItem, FlexFields
} from "../SubComponents";

import { useCart } from "../../../../models/cart";

import { RiCloseFill } from "react-icons/ri";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Beneficiare from "./fields/Beneficiare";

const Item = observer(({ item, setAlert, setStatus, register }) => {

    const cart = useCart();

    const [ quantity, setQuantity ] = useState(item?.quantity)

    const handleChange = async (e) => {

        if(e.target.value){

            setQuantity(e.target.value)

            const payload = {
                itemIndex: 0,
                quantity: e.target.value,
                type: "up"
            }
    
            const response = await cart.updateQuantity(item?.itemId, payload)
            console.log(item?.itemId)
            if(response.status !== 200){
                setAlert(response?.data.error)
                setStatus(response?.data.success)
            }else{
                setAlert(response?.data.message)
                setStatus(response?.data.success)
                cart.fetch();
            } 
        }  
    } 

    const removeItem = async () => {
        try{
            const response = await cart.deleteItem( item?.itemId );
            setAlert(response?.data.message);
            setStatus(response?.data.success);
        }catch(ex){
            setAlert(ex?.data.error);
            setStatus(ex?.data.success);
        }
    }

    const printFields = () => {
        const rows = []

        for(let i = 0 ; i < quantity ; i++ ){
            rows.push(
                <BeneficiareItem key={i}>
                    <BenificaireTitle>Benificaire { i+1 }</BenificaireTitle>
                    <FlexFields>
                        <Beneficiare fields={ item?.fields } register={ register } />
                    </FlexFields>
                </BeneficiareItem>        
            )
        }
        return rows;
    }

  return (

    <ItemWrapper>
        <Icon>
            <RiCloseFill size={25} onClick={ removeItem } />
        </Icon>
        <ItemImage img={ item?.product.image }/>
        <ItemContent>
            <Title>{ item?.product.title }</Title>
            <OffreName>{ item?.product.offerName }</OffreName>
            <Pricing>
                <Quantity>
                    Quantité
                    <Input type="number" value={ quantity } onChange={ (e) => handleChange(e) } />
                </Quantity>
                <PricesWrapper>
                    <Price>PPC: { item?.product.price } MAD</Price>
                    <Price>Sous-total: <BoldTotal>{ item?.total } MAD</BoldTotal></Price>
                </PricesWrapper>
            </Pricing>
            <Fields>
                {
                    printFields()
                }
            </Fields>
        </ItemContent>
    </ItemWrapper>
  )
})

export default Item
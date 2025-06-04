import React, { useContext } from "react";
import { OrderContext } from "./OrderContext";

const OrderForm = () => {
  const { orderData, updateOrderData, updateNestedOrderData } = useContext(OrderContext);

        

  return (
    <>
    
      <p className="big-letter-order">ADRES</p>
      <p>Adres dostawy</p>
      <div className="order-adress">
        <div className="order-row">


          <div className="order-wrapper">
            <input className="order-input order-name" type="text" placeholder="Imię *"  
            value={orderData.shippingAddress.costumerName} 
            onChange={(e) =>updateNestedOrderData("shippingAddress","costumerName", e.target.value)}/>
            <p className="order-under-input">Np. Jan</p>
          </div>


          <div className="order-wrapper">
            <input className="order-input order-name gap" type="text" placeholder="Nazwisko *"
            value={orderData.shippingAddress.costumerSurname}
            onChange={(e) => updateNestedOrderData("shippingAddress","costumerSurname", e.target.value)} />
            <p className="order-under-input">Np. Kowalski</p>
          </div>
        </div>


        <input className="order-input order-adress" type="text" placeholder="Adres *" 
        value={orderData.shippingAddress.adress}
        onChange={(e => updateNestedOrderData("shippingAddress","address", e.target.value))}/>
        <p>Np. ul. Zamkowa 5</p>


        <input className="order-input order-information" type="text" placeholder="Dodatkowe informacje"
        value={orderData.shippingAddress.company}
        onChange={(e)=> updateNestedOrderData("shippingAddress","company", e.target.value)} />
        <p>Np. Firma, Lokal</p>


        <div className="order-row">

          <div className="order-wrapper">
            <input className="order-input order-name" type="text" placeholder="Kod pocztowy *"
            value={orderData.shippingAddress.postalCode}
            onChange={(e)=> updateNestedOrderData("shippingAddress","postalCode",e.target.value)} />
            <p>Np. 54-444</p>
          </div>

          <div className="order-wrapper">
            <input className="order-input order-name gap" type="text" placeholder="Miasto *" 
            value={orderData.shippingAddress.city}
            onChange={(e)=>updateNestedOrderData("shippingAddress","city", e.target.value)}/>
            <p>Np. Warszawa</p>
          </div>
        </div>

        <p>PAŃSTWO: Poland</p>

        <div className="order-phone-container" style={{ display: 'flex', gap: '8px' }}>
  <select
    className="order-input"
    value={orderData.shippingAddress.phonePrefix}
    onChange={(e) =>
      updateNestedOrderData("shippingAddress", "phonePrefix", e.target.value)
    }
  >
    <option value="+48">🇵🇱 +48</option>
    <option value="+49">🇩🇪 +49</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+1">🇺🇸 +1</option>
  </select>

  <input
    className="order-input"
    type="tel"
    placeholder="Numer telefonu *"
    value={orderData.shippingAddress.phoneNumber}
    onChange={(e) =>
      updateNestedOrderData("shippingAddress", "phoneNumber", e.target.value)
    }
  />
</div>
<p>Np. 667 667 668</p>

      </div>
    </>
  );
};

export default OrderForm;

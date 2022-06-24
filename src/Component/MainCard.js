import Card from "./Card";
import pic1 from '../asset/product-3.jpg'
import pic2 from '../asset/product-4.jpg'
import pic3 from '../asset/product-5.jpg'
function MainCard()
{
    return(
        <>
          <div class="row">
            <Card img={pic1}/>
            <Card img={pic2}/>
            <Card img={pic3}/>
            </div>
        </>
    );
}
export default MainCard;
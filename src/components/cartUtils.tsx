// cartUtils.js or cartUtils.ts
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';
import { fetchDb, fetchSanity } from '@/views/utils/mock'; // Import your fetch functions

export async function fetchAndDispatchCartData() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    try {
        const dbRes = await fetchDb();
        if (dbRes && dbRes.length > 0) {
            for (const cartItem of dbRes) {
                const sanityResponse = await fetchSanity(cartItem.product_id);
                console.log("sanityResponse",sanityResponse)
               dispatch(cartActions.addToCart({ product: sanityResponse[0], quantity: cartItem.quantity }));
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

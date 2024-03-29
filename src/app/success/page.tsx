"use client"
import { NextPage }       from 'next'
import Link               from 'next/link'
import { useEffect }      from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks }   from '@/lib/fireWorks';
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'
import toast from 'react-hot-toast'
 


const Success: NextPage = () => {

   const dispatch = useDispatch();
   const clearCart = async () => {
    dispatch(cartActions.resetCart());
    toast.success("Success")
   }
  useEffect(() => {
    const stripeSession = async () => {
      try {
        const res = await fetch(`/api/stripe-session`,{
          cache : "no-store"
        });
        if(res.ok) {
          const data = await res.json();
          if(data.session) {
            clearCart()
            // localStorage.clear()
            runFireworks()
          }
          else {
            toast.error(data.message)
          }
          console.log("stripe data = ",data.session)
        }
      } catch (error) {
        console.log("error stripe", error)
      }
    };
    stripeSession();
    
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon text-xl'>
          <BsBagCheckFill size={40} className='h-30 w-30'/>
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt.</p>
        <p className='description'>
          If you have any questions, please email
          <a
            className='email text-red-500'
            href='mailto:order@example.com'
          >
           {" "} order@example.com
          </a>
        </p>
        <Link href='/products'>
          <Button
            type='button'
            className='hbtn mt-4'
          >
            Continue Shopping
          </Button>
        </Link>
        <Link href='/orders'>
          <Button
            type='button'
            className='hbtn mt-4'
          >
            See your order
          </Button>
        </Link>
        {/* <button onClick={() => clearCart()} className='hbtn'>clearCart</button> */}
      </div>
    </div>
  )
}

export default Success